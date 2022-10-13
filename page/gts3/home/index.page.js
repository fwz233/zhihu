import { textStyle } from './index.style'
var timer1 
import { readFileSync, writeFileSync } from './../../../utils/fs'
const { messageBuilder } = getApp()._options.globalData
const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
var data='此刻\n知乎热榜\n!'
var text 
var vibrate
Page({
  onMessage() {
    messageBuilder.on('call', ({ payload: buf }) => {
      const json = messageBuilder.buf2Json(buf)
      data = json
      this.createAndUpdateList()
    })
  },
  getTodoList() {
    messageBuilder
      .request({
        jsonrpc: 'hmrpcv2',
        method: 'GET_TODO_LIST',
        params: {},
      })
      .then(({ result }) => {
        data = result
        this.createAndUpdateList()
      })
      .catch((res) => {})
  },
  build() {
    logger.debug('page build invoked')
  },
  onInit() {
    logger.debug('page onInit invoked')
    this.onMessage()
  //  this.getTodoList()

  hmUI.setScrollView(true, 450, 1) //先使能翻页功能
text = hmUI.createWidget(hmUI.widget.TEXT)
    text.setProperty(hmUI.prop.MORE, {
      x: 0,
      y: 64,
      w: 390,
      h: 450-64,
      text: 'hello world',
      text_size: 44,
      color: 0xffffff,
      text_style:hmUI.text_style.WRAP,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V
    })

    // writeFileSync('233', false)
    // text.setProperty(hmUI.prop.MORE, {
    //   text: readFileSync()
    // })
    text.setProperty(hmUI.prop.MORE, {
        text: data
      })

  },
  onDestory() {
    //取消注册按键监听
    vibrate.stop()
    // const alarm = hmApp.alarmNew({
    //   file: 'page/gts3/home/index.page',
    //   appid: 1003585,
    //   delay: 5000
    // })
    
    //取消唤醒
   // hmApp.alarmCancel(alarm)
    logger.debug('page onDestory invoked')
  },
   randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}   ,createAndUpdateList() {
if(data!='网络错误'){
  var shi=data.split(/-/)
  // var date=appso_date[1].split(/-/)
  // hmUI.showToast({
  //   text: date[0]+'\n'+date[1]
  // })
  vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
  vibrate.motorenable = 1
  vibrate.crowneffecton = 1
  vibrate.scene = 2
  vibrate.start()
  // var shi=data.split(/[\\]/);
  var ye=0
  hmUI.setScrollView(true, 450-64, 11)
  text.setProperty(hmUI.prop.MORE, {
    text: "1."+shi[ye],
    align_h: hmUI.align.LEFT
  })

  const two = hmUI.createWidget(hmUI.widget.TEXT)
  two.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450,
    w: 390,
    h: 450-64,
    text: "2."+shi[1]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })

  const threer = hmUI.createWidget(hmUI.widget.TEXT)
  threer.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*1,
    w: 390,
    h: 450-64,
    text: "3."+shi[2]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const four = hmUI.createWidget(hmUI.widget.TEXT)
  four.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*2,
    w: 390,
    h: 450-64,
    text: "4."+shi[3]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const five = hmUI.createWidget(hmUI.widget.TEXT)
  five.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*3,
    w: 390,
    h: 450-64,
    text: "5."+shi[4]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const six = hmUI.createWidget(hmUI.widget.TEXT)
  six.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*4,
    w: 390,
    h: 450-64,
    text: "6."+shi[5]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const seven = hmUI.createWidget(hmUI.widget.TEXT)
  seven.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*5,
    w: 390,
    h: 450-64,
    text: "7."+shi[6]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const eight = hmUI.createWidget(hmUI.widget.TEXT)
  eight.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*6,
    w: 390,
    h: 450-64,
    text: "8."+shi[7]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const nine = hmUI.createWidget(hmUI.widget.TEXT)
  nine.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*7,
    w: 390,
    h: 450-64,
    text: "9."+shi[8]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const ten = hmUI.createWidget(hmUI.widget.TEXT)
  ten.setProperty(hmUI.prop.MORE, {
    x: 0,
    y: 450+(450-64)*8,
    w: 390,
    h: 450-64,
    text: "10."+shi[9]   ,
    text_size: 44,
    color: 0xffffff,
    text_style:hmUI.text_style.WRAP,
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V
  })
  const qrcode_txt =hmUI.createWidget(hmUI.widget.TEXT)
  qrcode_txt.setProperty(hmUI.prop.MORE, {
    x: 0,
      y: 450+(450-64)*9,
      w: 390,
      h: 49,
      text_size: 36,
      color: 0xffffff,
    text: '扫码查看详情',
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V
  })

  const qrcode = hmUI.createWidget(hmUI.widget.IMG)
  qrcode.setProperty(hmUI.prop.MORE, {
      x: 45,
      y: 450+(450-64)*9+45,
      w: 300,
      h: 300,
     src: 'yjxl.png',
    })




 
   
 

}else
text.setProperty(hmUI.prop.MORE, {
  text: '网络连接异常'
})
}
})
