// 页面返回处理
import view from './view'
function plusReady() {
  plus.key.addEventListener(
    'backbutton',
    () => {
      let ws = view.current();
      if (ws.hide) {
        plus.webview.hide(ws, 'auto');
      } else {
        if (ws = view.launch()) {
          let main = plus.android.runtimeMainActivity();
          main.moveTaskToBack(false);
          console.log('首页最小化app');
        } else {
          plus.webview.close(ws);
        }
      }
    },
    false
  );
}
if (window.plus) {
  plusReady();
} else {
  document.addEventListener('plusready', plusReady, false);
}
