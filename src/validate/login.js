import AsyncValidator from 'async-validator'
import { Dialog } from 'vant'

// 参数校验
const descriptor = {
  mobile: [
    {
      required: true,
      message: '请填写手机号'
    },
    {
      pattern: /^1[0-9]{10}$|^[569][0-9]{7}$/,
      message: '手机号格式不正确'
    }
  ],
  password: [
    {
      required: true,
      message: '请填写密码'
    },
    {
      min: 6,
      max: 20,
      message: '密码长度为6-20位'
    }
  ]
}

const validator = new AsyncValidator(descriptor)

const validatorLast = data => {
  return new Promise((resolve, reject) => {
    validator.validate(data, errors => {
      if (errors) {
        // 弹窗提醒这里用的是一次一次的报错
        return Dialog.alert({
          message: errors[0].message
        })

        // 字段提醒
        // errors.map(error => {
        //   let field = error.field + 'Error'
        //   data[field] = error.message
        //   console.log(error)
        //   // data.error + 'Error'
        // })
        // return reject
      }
      return resolve
    })
  })
}

export default validatorLast
