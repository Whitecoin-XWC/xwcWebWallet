<template>
  <div>
    <div v-if="!created" class="xwc-main-container xwc-create-wallet-container">
      <div class="xwc-create-wallet-title">{{ $t('createWalletPage.title') }}</div>
      <el-form
        :model="createWalletForm"
        status-icon
        ref="createWalletForm"
        label-width="100pt"
        class="xwc-create-wallet-inner-container"
      >
        <el-form-item
          v-bind:label="$t('createWalletPage.set_wallet_password')"
          class="-password-panel"
          prop="password"
        >
          <el-input
            class="-input-password"
            v-bind:placeholder="$t('createWalletPage.please_set_password')"
            type="password"
            v-model="createWalletForm.password"
            autocomplete="off"
            style="width: 100pt;"
          ></el-input>
          <div class="-wallet-password-rule-desc -rule-panel">
            <p style="height: auto;">{{ $t('createWalletPage.please_save_wallet_file_line1') }}</p>
            <p>{{ $t('createWalletPage.passworld_length_notice') }}</p>
          </div>
        </el-form-item>
        <el-form-item :label="$t('createWalletPage.import_mnemonic')">
          <el-input
            class="-input-password"
            v-bind:placeholder="$t('createWalletPage.import_mnemonic_placeholder')"
            type="textarea"
            v-model="createWalletForm.importMnemonic"
            autocomplete="off"
            style="width: 220pt;"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="xwcwallet-form-btn"
            v-on:click="createWallet"
            style="margin-left: -80pt;"
            >{{ $t('createWalletPage.next_step') }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- when wallet created -->
    <div v-if="created" class="xwc-main-container xwc-create-wallet-container">
      <div class="xwc-create-wallet-title">
        {{ $t('createWalletPage.now_please_download_wallet_keystore_file') }}
      </div>
      <div>
        <div class="xwc-create-wallet-done-inner-container">
          <div style="margin-bottom: 5pt;">
            <el-button type="primary" class="xwcwallet-form-btn" v-on:click="downloadKeystoreFile">
              {{ $t('createWalletPage.download_wallet_keystore_file') }}
            </el-button>
          </div>
          <div class="-rule-panel" style="text-align: center; margin-bottom: 30pt;">
            <p>
              {{ $t('createWalletPage.password_is_to_protect_your_private_keys_please_save_it') }}
            </p>
            <p>{{ $t('createWalletPage.wallet_file_is_to_get_your_assets_please_save_it') }}</p>
          </div>
          <div v-if="false">
            <el-button type="primary" class="xwcwallet-form-btn" v-on:click="openKeystoreWallet">{{
              $t('createWalletPage.open_wallet_right_now')
            }}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import appState from '../appState';
import * as bip39 from 'bip39';
import { hdkey } from 'ethereumjs-wallet';
import utils from '../utils';
let { PrivateKey, key, TransactionBuilder, TransactionHelper } = xwc_js;

export default {
  name: 'CreateWallet',
  data() {
    return {
      created: false,
      createdAccount: null,
      createdAccountKeyString: null,
      createWalletForm: {},
      importMnemonic: null,
    };
  },
  created() {},
  methods: {
    showError(e) {
      e = utils.getShowErrorMessage(e);
      this.$message({
        showClose: true,
        message: e,
        type: 'error',
      });
    },
    showInfo(info) {
      this.$message({
        showClose: true,
        message: (info || 'info').toString(),
      });
    },
    showSuccess(info) {
      this.$message({
        showClose: true,
        message: (info || 'success').toString(),
        type: 'success',
      });
    },
    createWallet() {
      this.hasError = false;
      let password = (this.createWalletForm.password || '').trim();
      if (password.length < 8 || password.length > 30) {
        this.showError(this.$t('createWalletPage.invalid_password_length'));
        this.hasError = true;
        this.created = false;
        return;
      }
      this.created = true;
      let account;
      if (this.createWalletForm.importMnemonic && this.createWalletForm.importMnemonic.trim()) {
        // import from mnemonic
        const importMnemonic = this.createWalletForm.importMnemonic.trim();
        if (!bip39.validateMnemonic(importMnemonic)) {
          console.log('invalid mnemonic');
          this.showError('Invalid mnemonic');
          this.hasError = true;
          this.created = false;
          return;
        }
        const seed = bip39.mnemonicToSeedSync(importMnemonic); // .toString('hex');
        // console.log(`seed: ${seed.toString('hex')}`);
        // seed to private key
        const path = "m/44'/999'/0/0/0"; // m / 44' / 999' / account / 0 / addrIndex

        const hdwallet = hdkey.fromMasterSeed(seed);
        const wallet = hdwallet.derivePath(path).getWallet();
        let privKeyStr = wallet.getPrivateKeyString();
        if (privKeyStr.indexOf('0x') === 0) {
          privKeyStr = privKeyStr.substring(2);
        }
        // console.log(`privKeyStr: ${privKeyStr}`);
        account = account_utils.NewAccount();
        account.setPrivateKey(privKeyStr);
      } else {
        account = account_utils.NewAccount();
      }
      this.createdAccount = account;
      account.address = null;
      let address = account.getAddressString(appState.getAddressPrefix());
      let keyStr = account.toKeyString(password);
      this.createdAccountKeyString = keyStr;
    },
    downloadKeystoreFile() {
      let account = this.createdAccount;
      let address = account.address;
      let keyStr = this.createdAccountKeyString;
      let blob = new Blob([keyStr], {
        type: 'application/json; charset=utf-8',
      });
      //saveAs(blob, address);
      let i = window.document.createElement('a');
      (i.target = '_blank'), (i.href = window.URL.createObjectURL(blob));
      i.download = address;
      document.body.appendChild(i);
      i.click();
      document.body.removeChild(i);
      this.showInfo(this.$t('createWalletPage.find_wallet_file_in_download_directory'));
    },
    openKeystoreWallet() {
      appState.changeCurrentAccount(this.createdAccount);
      appState.changeCurrentTab('my_wallet');
    },
  },
};
</script>

<style lang="less">
.xwc-create-wallet-container1 {
  .label-font {
    color: #a99eb4;
    font-size: 8pt;
  }
}
.xwc-create-wallet-container2 {
  .label-font {
    color: #a99eb4;
    font-size: 8pt;
  }
}
.xwc-create-wallet-container {
  min-width: 400px;
  min-height: 266pt;
}
.xwc-create-wallet-inner-container,
.xwc-create-wallet-done-inner-container {
  width: 400pt;
  margin: 20pt auto 0 auto;
  label {
    color: #a99eb4;
    font-size: 1rem;
    white-space: nowrap;
  }
  .el-input {
    width: 100% !important;
  }
  .el-textarea {
    width: 100% !important;
  }
  .-wallet-password-rule-desc,
  .-rule-panel {
    padding: 0.5rem;
    background: rgba(245, 108, 108, 0.2);
    border-radius: 0.5rem;
    color: #f56c6c;
    font-size: 14px;
    text-align: left;
    margin-top: 0.5rem;

    p {
      padding: 0;
      margin: 4px;
      line-height: 18px;
      height: 18px;
    }
  }
}
.xwc-create-wallet-title {
  color: #a99eb4;
  font-size: 2rem;
  margin-bottom: 1rem;
}
@media (max-width: 600px) {
  .xwc-create-wallet-container {
    .xwc-create-wallet-inner-container {
      width: 400px;
      .-password-panel {
        .el-form-item__label {
          width: 60pt;
        }
      }
    }
  }
}

.chrome-ext-app-container {
  .xwc-create-wallet-container {
  }
  .xwc-create-wallet-inner-container {
    width: auto;
  }
}
</style>
