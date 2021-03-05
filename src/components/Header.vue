<template>
  <div class="header-wrapper">
    <el-row style="max-width: 1000px; margin: 0 auto;">
      <el-col :span="8">
        <div class="grid-content">
          <a href="https://whitecoin.info/" target="_blank">
            <img
              :src="'images/header-logo.png'"
              class="header-logo"
              style="margin-left: 10px;"
              alt
            />
          </a>
        </div>
      </el-col>
      <el-col :span="16" style="text-align: right;">
        <div class="grid-content">
          <div class="el-select network-select xwc-select" style="font-size: 16px;">
            <span style="color: white;">Status &nbsp;</span>
            <span v-if="connected" class="el-icon-check" style="color: #67C23A;"></span>
            <span v-if="!connected" class="el-icon-close" style="color: #F56C6C;"></span>
          </div>
          <el-select
            v-model="network"
            @change="onChangeNetwork"
            placeholder="Network"
            class="network-select xwc-select"
          >
            <el-option
              v-for="item in getNetworkList()"
              :key="item.key"
              :label="item.name"
              :value="item.key"
            ></el-option>
            <el-option label="Customize" value="customize"></el-option>
          </el-select>
          <el-select
            v-model="language"
            @change="onChangeLang"
            placeholder="Language"
            class="language-select xwc-select"
          >
            <el-option label="English" value="english"></el-option>
            <el-option label="中文" value="chinese"></el-option>
            <el-option label="한국어" value="korea"></el-option>
            <el-option label="日本語" value="japan"></el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventEmitter from 'eventemitter3';
import appState from '../appState.js';

export default {
  name: 'PageHeader',
  data() {
    return {
      network: appState.getCurrentNetwork(),
      language: appState.getCurrentLanguage(),
      connected: false,
      connectCheckInterval: null,
      mainnetList: [
        'ws://112.5.37.28:23454',
        'ws://112.5.37.28:23455',
        'ws://123.129.217.68:23454',
        'ws://123.129.217.68:23455',
        'ws://27.159.82.205:23454',
        'ws://27.159.82.205:23455',
        'ws://117.24.6.145:23454',
        'ws://117.24.6.145:23455',
        'ws://223.111.134.138:23454',
        'ws://223.111.134.138:23455',
        'ws://46.29.163.206:23454',
        'ws://46.29.163.206:23455',
        'ws://194.62.214.170:23454',
        'ws://194.62.214.170:23455',
        'ws://43.242.203.134:23454',
        'ws://43.242.203.134:23455',
      ],
    };
  },
  mounted() {
    this.connectCheckInterval = setInterval(() => {
      const nodeClient = appState.getNodeClient();
      nodeClient.execDbApi('get_block', 1).then(
        // get_sync_mode_network_info
        (data) => {
          console.log(data); // show block height
          this.connected = true;
        },
        (err) => {
          console.log('err');
          if (this.connected === false && this.network === 'mainnet') {
            const nodeNum = Math.floor(Math.random() * this.mainnetList.length);
            this.onChangeNetwork(this.network, this.mainnetList[nodeNum]);
          }
          this.connected = false;
        }
      );
    }, 3000);
  },
  beforeDestroy() {
    if (this.connectCheckInterval) {
      clearInterval(this.connectCheckInterval);
      this.connectCheckInterval = null;
    }
  },
  methods: {
    onChangeNetwork(network, nodeServer = null) {
      if (network === 'customize') {
        console.log('customize');
        // 进入自定义network界面
        appState.changeCurrentTab('customize_network');
        return;
      }
      this.network = network;
      appState.changeCurrentNetwork(this.network, nodeServer);
    },
    onChangeLang(lang) {
      this.language = lang;
      appState.changeCurrentLanguage(this.language);
      if (this.$i18n) {
        this.$i18n.locale = lang;
      }
    },
    getNetworkList() {
      return appState.getNetworkList();
    },
  },
};
</script>

<style lang="less">
.header-wrapper {
  height: 29pt;
  line-height: 29pt;
  background: linear-gradient(#3894e3, #2e8ae7);
  .header-logo {
    width: 103pt;
    height: 20pt;
    margin-top: 4pt;
    margin-right: 5px;
    display: inline-block;
    float: left;
  }
}
li.el-select-dropdown__item {
  display: block;
  height: 19pt;
  line-height: 19pt;
  margin: 0;
}
li.el-select-dropdown__item.selected {
  background: #308ce5;
  color: white;
}
.xwc-select {
  font-size: 8pt;
  .el-input__inner {
    padding: 0 10px;
    background: rgba(0, 0, 0, 0);
    border: 0;
    color: white;
  }
}
.network-select {
  width: 65pt;
}
.language-select {
  width: 65pt;
}
.el-select-dropdown {
  top: 32px;
}

.chrome-ext-app-container {
  .header-wrapper .header-logo {
    margin-left: 20px;
  }
}
</style>
