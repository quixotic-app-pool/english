/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T08:56:07+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: config.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:26:40+08:00
 */



// ENV
const env = 'development' // 'development' or 'production'

// WXAPP VERSION
const version = 2.0

// development and production host
const hosts = {
  development: 'http://localhost:8080',
  production: 'https://sd.iszu.cn'
}

// apis
// const api = {
//   user: {
//     /**
//      * login api
//      * need header:
//      * {
//      *   'x-wechat-code': code,
//      *   'x-wechat-encrypted': encryptedData,
//      *   'x-wechat-iv': iv
//      * }
//      */
//     login: {
//       method: 'POST',
//       url: '/user/wxlogin'
//     },
//     info: {
//       method: 'GET',
//       url: '/user/info'
//     },
//     blog: {
//       method: 'GET',
//       url: '/v2/user'
//     }
//   },
//   blog: {
//     list: {
//       method: 'GET',
//       url: '/v2/blogs'
//     },
//     detail: {
//       method: 'GET',
//       url: '/v2/blogs'
//     },
//     like: {
//       method: 'POST',
//       url: '/blog/like'
//     },
//     delete: {
//       method: 'POST',
//       url: '/blog/delete'
//     },
//     imageUpload: {
//       method: 'POST',
//       url: '/blog/image'
//     },
//     new: {
//       method: 'POST',
//       url: '/v2/blogs'
//     },
//     comment: {
//       method: 'POST',
//       url: '/v2/comments'
//     },
//     deleteComment: {
//       method: 'DELETE',
//       url: '/v2/comments'
//     }
//   },
//   notifications: {
//     count: {
//       method: 'GET',
//       url: '/v2/notifications'
//     },
//     messages: {
//       method: 'GET',
//       url: '/v2/notifications/messages'
//     },
//     read: {
//       method: 'PUT',
//       url: '/v2/notifications'
//     }
//   },
//   ads: {
//     method: 'GET',
//     url: '/v2/ads'
//   },
//   configs: {
//     method: 'GET',
//     url: '/v2/configs'
//   }
// }

module.exports = {
  env,
  version,
  api: disposeUrl(api, hosts[env])
}

function disposeUrl (obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url
    } else {
      obj[v] = disposeUrl(obj[v], prefix)
    }
  })

  return obj
}
