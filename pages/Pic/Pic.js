Page({
    data:{
        Img: '',
        Name:'刘小雨の小枇杷',
        Motto:'和你在一起的2136+天',
        Enter:'\n'
    },

onShareAppMessage: function () {
    return {
      title: '刘小雨の小枇杷',
      desc: '萌萌哒阿雨和枇杷',
      path: '/page/user?id=123'
    }
  }

})