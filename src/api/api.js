/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T14:12:49+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-01-03T14:25:00+08:00
 */

import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
// production
// const host = ?
// development
// const host = 'http://127.0.0.1:8080'
const host = 'https://www.takeiteasydude.com'


//wechat
const wechatActivity = (params) => wxRequest(params, host + "/api/wechatactivity");

// NOTIFICATION
const fetchNotification = (params) => wxRequest(params, host + "/api/fetchnotification");
const updateNotification = (params) => wxRequest(params, host + "/api/updatenotification");

// Question
// fetch, update by filter or not; like/featured/bookmark categorized ones
const fetchQuestions = (params) => wxRequest(params, host + "/api/fetchquestions");
const postQuestion = (params) => wxRequest(params, host + "/api/postquestion");
const editQuestion = (params) => wxRequest(params, host + "/api/editquestion");
const closeQuestion = (params) => wxRequest(params, host + "/api/closequestion");
const enableNotification = (params) => wxRequest(params, host + "/api/enablenotification");
const disableNotification = (params) => wxRequest(params, host + "/api/disablenotification");
const delQuestion = (params) => wxRequest(params, host + "/api/delquestion");

const answer = (params) => wxRequest(params, host + "/api/answer");
const like = (params) => wxRequest(params, host + "/api/like");
const bookmark = (params) => wxRequest(params, host + "/api/bookmark");
const report = (params) => wxRequest(params, host + "/api/report");

module.exports = {
  //wechatActivity
  wechatActivity
}
