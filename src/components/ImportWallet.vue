<template>
  <div>
    <div class="xwc-main-container xwc-export-wallet-container">
      <h1 class="title">Import Private Key</h1>
      <div class="label">
        <label class="label-font">
          Paste your private key string here:
        </label>
      </div>

      <el-input type="password" placeholder="Type your password" v-model="privateKey" />
    </div>

    <div class="xwc-panel" style="height: 60px; padding: 10px; margin-bottom: 50px;">
      <el-button
        type="primary"
        class="-ctrl-btn xwcwallet-form-btn"
        size="small"
        @click="toggleImportView(false)"
      >
        {{ $t('dialogs.cancel') }}
      </el-button>
      <el-button
        type="primary"
        class="-ctrl-btn xwcwallet-form-btn"
        size="small"
        :disabled="privateKey == ''"
        @click="onImportWallet(privateKey)"
      >
        Confirm
      </el-button>
    </div>
  </div>
</template>

<script>
import appState from '../appState';

let { PrivateKey, key } = xwc_js;
export default {
  name: 'ImportWallet',
  data() {
    return {
      privateKey: '',
    };
  },
  props: {
    toggleImportView: { type: Function },
    onImportWallet: { type: Function },
  },
  methods: {},
};
</script>
