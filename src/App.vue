<template>
  <div id="app">
    <PageHeader></PageHeader>
    <XwcToolbar></XwcToolbar>
    <div>
      <XwcMyWallet v-if="currentTabKey==='my_wallet'"></XwcMyWallet>
      <CreateWallet v-if="currentTabKey==='create_wallet'"></CreateWallet>
      <RegisterAccount v-if="currentTabKey==='register_account'"></RegisterAccount>
      <Transfer v-if="currentTabKey==='transfer'"></Transfer>
      <CheckTx v-if="currentTabKey==='check_tx'"></CheckTx>
      <SignRaw v-if="currentTabKey==='sign_raw'"></SignRaw>
      <Contract v-if="currentTabKey==='contract'"></Contract>
      <CustomizeNetwork v-if="currentTabKey==='customize_network'"></CustomizeNetwork>
    </div>
    <div class="xwc-footer-bar">
      <div>@Copyright XWC chain</div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/Header.vue";
import XwcToolbar from "./components/Toolbar.vue";
import XwcMyWallet from "./pages/MyWallet.vue";
import RegisterAccount from "./pages/RegisterAccount.vue";
import CreateWallet from "./pages/CreateWallet.vue";
import Transfer from "./pages/Transfer.vue";
import CheckTx from "./pages/CheckTx.vue";
import SignRaw from "./pages/SignRaw.vue";
import CustomizeNetwork from "./pages/CustomizeNetwork.vue";
import Contract from "./pages/Contract.vue";
import appState from "./appState.js";

export default {
  name: "app",
  components: {
    PageHeader,
    XwcToolbar,
    XwcMyWallet,
    CreateWallet,
    RegisterAccount,
    Transfer,
    CheckTx,
    SignRaw,
    CustomizeNetwork,
    Contract
  },
  created() {
    const lastUsedNetwork = appState.getLastUsedNetwork();
    appState.changeCurrentNetwork(
      lastUsedNetwork ? lastUsedNetwork.key : "mainnet"
    );
    this.currentTabKey = appState.getCurrentTab();
  },
  mounted() {
    appState.onChangeCurrentTab(this.onChangeCurrentTab);
    appState.onConnectionClose(this.onConnectionClose);
  },
  beforeDestroy() {
    appState.offChangeCurrentTab(this.onChangeCurrentTab);
    appState.offConnectionClose(this.onConnectionClose);
  },
  data() {
    return {
      currentTabKey: appState.getCurrentTab()
    };
  },
  methods: {
    onChangeCurrentTab(tabKey) {
      this.currentTabKey = tabKey;
    },
    onConnectionClose() {
      this.$message({
        showClose: true,
        message: "Connection Closed",
        type: "error"
      });
    }
  }
};
</script>

<style lang="less">
body::-webkit-scrollbar {
  display: none;
}

.xwc-main-container {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 8px;
  background: white;
  padding: 50px 20px;
}

.xwc-panel {
  min-width: 400px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 8px;
  background: white;
  padding: 50px 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 400px;
  min-height: 500px;
}

.xwc-footer-bar {
  position: fixed;
  min-width: 200pt;
  text-align: center;
  color: #999999;
  font-size: 10pt;
  right: 40pt;
  padding-top: 20pt;
  bottom: 12pt;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.xwcwallet-form-cancel-btn {
  width: 150pt;
  height: 30pt;
  // color: white;
  font-size: 10pt;
  // background: linear-gradient(#3894e3, #2e8ae7);
  border: 0;
  border-radius: 0;
}
.xwcwallet-form-btn {
  width: 150pt;
  height: 30pt;
  color: white;
  font-size: 10pt;
}
.el-switch__core {
  width: 20px !important;
}
.el-switch .el-switch__core {
  border-color: #308ce5;
}
.el-switch.is-checked .el-switch__core {
  background-color: white;
  border-color: #308ce5;
}
.el-switch.is-checked .el-switch__core:after {
  background-color: #308ce5;
}

.grid-content {
  word-break: break-all;
}

.chrome-ext-app-container {
  .xwc-main-container {
    width: 500px;
  }
}
</style>
