import Vue from 'vue'
import FastClick from 'fastclick'
import http from './http'
import view from './view'
import './back'

Vue.prototype.$http = http
Vue.prototype.$view = view

// 去除300ms延迟
document.addEventListener(
  'DOMContentLoaded',
  function () {
    FastClick.attach(document.body)
  },
  false
)
