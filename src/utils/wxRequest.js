/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T14:13:34+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: wxRequest.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-17T08:27:25+08:00
 */



import wepy from 'wepy';
import util from './util';
// import md5 from './md5';


// const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {

    wepy.showToast({
        title: '加载中',
        icon: 'loading'
    });
    // console.log('kong de?: ' + JSON.stringify(params.query))
    var data = params.query || {};
    // data.sign = SIGN;
    // data.time = TIMESTAMP;
    const res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' }
    }).then(function(err, respond){
      if(err) {
        return err
      }
      return respond;
    });
    wepy.hideToast();
    return res;
};


module.exports = {
    wxRequest
}
