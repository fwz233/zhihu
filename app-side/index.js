import { MessageBuilder } from '../shared/message'
import { DEFAULT_TODOLIST } from './../utils/constants'
const messageBuilder = new MessageBuilder()
var sb='qaq'
function getTodoList() {
  return sb
}
AppSideService({
  onInit() {
    messageBuilder.listen(() => {})

  // fetch('http://yijuzhan.com/api/word.php?m=json').then(function(response) {
  //   return response.json();//  return response.text();
  // }).then(function(json) { http://yijuzhan.com/api/word.php
  // });  https://okjk.co/xcXM6
  //  详情点击 2021年12月21日


  fetch('https://www.zhihu.com/billboard').then(function(data){
      // text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，用于获取后台返回的数据
      var sbb=data.body.split(/class="HotList-itemTitle">|div><div class="HotList-itemMetrics">/)
      sb=sbb[1].slice(0,-2)+"-"+sbb[3].slice(0,-2)+"-"+sbb[5].slice(0,-2)+"-"+sbb[7].slice(0,-2)+"-"+sbb[9].slice(0,-2)+"-"+sbb[11].slice(0,-2)+"-"+sbb[13].slice(0,-2)+"-"+sbb[15].slice(0,-2)+"-"+sbb[17].slice(0,-2)+"-"+sbb[19].slice(0,-2);
      messageBuilder.call(getTodoList())
    }).catch(function(err){
      // text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，用于获取后台返回的数据
      messageBuilder.call('网络错误')
    })

    messageBuilder.on('request', (ctx) => {
      const jsonRpc = messageBuilder.buf2Json(ctx.request.payload)
      if (jsonRpc.method === 'GET_TODO_LIST') {
        ctx.response({
          data: { jsonrpc: 'hmrpcv1', result: getTodoList() },
        })
      }
    })
  },
  onRun() {},
  onDestroy() {},
})