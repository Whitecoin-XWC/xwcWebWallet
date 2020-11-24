var storeUnhandledTxs = (function() {

  var unhandledTxs = [];

  return {
    get: function() {
      return unhandledTxs;
    },

    empty: function() {
      unhandledTxs = [];
    },

    add: function(tx) {
      unhandledTxs.push(tx);
    }
  };
})();

window.storeUnhandledTxs = storeUnhandledTxs;

document.addEventListener('DOMContentLoaded', function () {
  var loading = document.querySelector('#loading');
  var body = document.body;

  var getAllNode = function (callback) {
    var getAllNodeXhr = new XMLHttpRequest();
    getAllNodeXhr.open('get', 'https://node8.whitecoin.info:8877/config/all', true);
    getAllNodeXhr.send();
    getAllNodeXhr.onreadystatechange = function (e) {
      if (getAllNodeXhr.readyState === 4 && (getAllNodeXhr.status >= 200 && getAllNodeXhr.status < 300 || getAllNodeXhr.status === 304)) {
        var responseText = getAllNodeXhr.responseText;
        var data = JSON.parse(responseText);

        if (data.code === 1) {
          window.allNodes = data.data.map((node) => ({
            chainId: node.chainId,
            key: node.nodeName,
            name: node.nodeName,
            url: node.url
          }));
        } else {
          window.allNodes = [];
        }

        typeof callback === 'function' && callback();
      }
    };
  }

  var getCurrentNode = function (callback) {
    var getNodeXhr = new XMLHttpRequest();
    getNodeXhr.open('get', 'https://node8.whitecoin.info:8877/config/get-node', true);
    getNodeXhr.send();
    getNodeXhr.onreadystatechange = function (e) {
      if (getNodeXhr.readyState === 4 && (getNodeXhr.status >= 200 && getNodeXhr.status < 300 || getNodeXhr.status === 304)) {
        var responseText = getNodeXhr.responseText;
        var data = JSON.parse(responseText);

        if (data.code === 1) {
          window.currentNodeInfo = {
            chainId: data.data.chainId,
            key: data.data.nodeName,
            name: data.data.nodeName,
            url: data.data.url
          };
        } else {
          window.currentNodeInfo = {};
        }

        typeof callback === 'function' && callback();
      }
    };
  }

  try {
    getAllNode(
      getCurrentNode(
        function () {
          var scriptUrls = [
            'dist/build.js?v=0.1.7'
          ];
          var fragment = document.createDocumentFragment();
          var script;

          scriptUrls.forEach(function (scriptUrl) {
            script = document.createElement('script');
            script.src = scriptUrl;
            script.type = 'text/javascript';

            fragment.appendChild(script);
          });

          body.appendChild(fragment);

          //  插件不支持IE, 所以只需要判断onload事件
          script.onload = function(e) {
            var unhandledTxs = storeUnhandledTxs.get();

            if (unhandledTxs.length) {
              var tx = unhandledTxs.pop();

              if (window.xwcAppState) {
                xwcAppState.pushFlashTx(tx);
              }
            }

            setTimeout(() => {
              body.removeChild(loading);
              storeUnhandledTxs.empty();

              script = null;
              fragment = null;
            }, 1000);
          };
        }
      )
    );
  } catch (e) {
    location.reload();
  }
});