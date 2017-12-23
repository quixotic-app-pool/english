/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T14:12:49+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-17T16:41:49+08:00
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
const fetchUnreadMessages = (params) => wxRequest(params, host + "/api/notification");
const refreshNotificationBox = (params) => wxRequest(params, host + "/api/updnotification");

// USER
const screenUser = (params) => wxRequest(params, host + "/api/screenuser");

// ADS
const fetchSwiperImgUrls = (params) => wxRequest(params, host + "/api/ads");

// COMMENTS
const postComment = (params) => wxRequest(params, host + "/api/addcomment");
const deleteComment = (params) => wxRequest(params, host + "/api/delcomment");
const reportComment = (params) => wxRequest(params, host + "/api/repcomment");
const updateCommentLikeNum = (params) => wxRequest(params, host + "/api/updcommentlike");

// BLOG
const fetchBlogList = (params) => wxRequest(params, host + "/api/list");
const deleteBlog = (params) => wxRequest(params, host + "/api/delblog");
const reportBlog = (params) => wxRequest(params, host + "/api/repblog");
const fetchUserBlogs = (params) => wxRequest(params, host + "/api/userbloglist");
const fetchBlogDetail = (params) => wxRequest(params, host + "/api/blogdetail");
//  upload image?
const uploadBlog = (params) => wxRequest(params, host + "/api/newblog");
const updateBlogLikeNumber = (params) => wxRequest(params, host + "/api/updbloglike");

//admin
const banUser = (params) => wxRequest(params, host + "/api/admin/banuser");


module.exports = {
  //wechatActivity
  wechatActivity,
  // notification
  fetchUnreadMessages,
  refreshNotificationBox,
  // user
  screenUser,
  // ads
  fetchSwiperImgUrls,
  // COMMENTS
  postComment,
  deleteComment,
  reportComment,
  updateCommentLikeNum,
  // BLOG
  fetchBlogList,
  deleteBlog,
  reportBlog,
  fetchUserBlogs,
  fetchBlogDetail,
  uploadBlog,
  updateBlogLikeNumber,
  // admin
  banUser
}
