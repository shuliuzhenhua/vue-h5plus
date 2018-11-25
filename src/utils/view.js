const view = {
  /**
   * 打开窗口
   * @param id
   * @param style
   * @param extras
   * @param show
   * @returns {*}
   */
  open (id, style = {}, extras = {}, show = true) {
    // 如果以前创建过就显示或关闭
    let wv = plus.webview.getWebviewById(id)
    if (wv) {
      if (show) {
        view.show(id)
        return wv
      } else {
        view.close(id)
      }
    }

    // 拼接 url
    let url = './' + id + '.html'

    let ws = plus.webview.create(
      url,
      id,
      {
        top: 0, // 新页面顶部位置
        bottom: 0, // 新页面底部位置
        render: 'always',
        popGesture: 'hide', // 右滑后隐藏
        bounce: 'none',
        bounceBackground: '#efeff4',
        ...style
      },
      extras
    )

    let w = plus.nativeUI.showWaiting()

    // 监听需要打开的窗口已经载入完毕
    ws.addEventListener('loaded', () => {
      ws.show('slide-in-right') // 显示窗口
      w.close()
      w = null
    })
    return ws
  },
  /**
   * 显示窗口
   * @param id
   */
  show (id) {
    plus.webview.show(id, 'slide-in-right', 200)
  },
  /**
   * 返回当前 窗口信息
   * @returns {*}
   */
  current () {
    return plus.webview.currentWebview()
  },
  /**
   * 关闭窗口
   * @param id 窗口 的id
   * @param style 关闭样式
   */
  close (id = null, style = null) {
    if (id === null) {
      let current = view.current()
      id = current.id
    }
    plus.webview.close(id, style)
  },
  /**
   * 隐藏当前窗口
   */
  hide () {
    let current = view.current()
    plus.webview.hide(current.id, 'auto')
  },
  /**
   * 跨网页传输数据
   * @param id
   * @param data
   * @param type
   */
  fire (id, data, type = 'event') {
    let view = plus.webview.getWebviewById(id)
    view &&
    view.evalJS(`
  document.dispatchEvent(new CustomEvent("${type}", {
    detail:${JSON.stringify(data)},
    bubbles: true,
    cancelable: true
  }));`)
  },
  /**
   * 取得首页
   */
  launch () {
    return plus.webview.getLaunchWebview()
  }
}
export default view
