<template>
  <div>
    <div class="xwc-main-container xwc-export-wallet-container">
      <h1 class="title">Show Private Key</h1>
      <div class="label">
        <label class="label-font">
          {{
            locked ? 'Type your wallet password' : 'This is your private key (click to copy)'
          }}</label
        >
      </div>

      <el-input v-if="locked" type="password" placeholder="Type your password" v-model="password" />

      <el-input
        v-if="!locked"
        type="textarea"
        v-model="privateKey"
        disabled
        @click.native="onCopyPrivateKey"
      />

      <div class="danger">
        <span>
          Warning: Never disclose this key. Anyone with your private keys can steal any assets held
          in your account.
        </span>
      </div>
    </div>

    <div class="xwc-panel" style="height: 60px; padding: 10px; margin-bottom: 50px;">
      <el-button
        v-if="!locked"
        type="primary"
        class="-ctrl-btn xwcwallet-form-btn"
        @click="toggleExportView(false)"
        size="small"
        >Done</el-button
      >
      <el-button
        v-if="locked"
        type="primary"
        class="-ctrl-btn xwcwallet-form-btn"
        @click="toggleExportView(false)"
        size="small"
        >{{ $t('dialogs.cancel') }}</el-button
      >
      <el-button
        v-if="locked"
        type="primary"
        class="-ctrl-btn xwcwallet-form-btn"
        size="small"
        :disabled="password == ''"
        @click="handleUnlockPrivateKey(password)"
        >Confirm</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExportWallet',
  data() {
    return {
      password: '',
    };
  },
  props: {
    privateKey: { type: String },
    locked: { type: Boolean, default: false },
    handleUnlockPrivateKey: { type: Function },
    toggleExportView: { type: Function },
    onCopyPrivateKey: { type: Function },
  },
  methods: {},
};
</script>
