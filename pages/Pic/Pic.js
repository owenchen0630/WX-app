  
Page({
    data:{
        Img: '',
        Name:'刘小雨の小枇杷',
        Motto:'和你在一起的2136+天',
        Enter:'\n'
    },

    imageLoad: function (e) {
      var _this = this;
      var $width = e.detail.width,    //获取图片真实宽度  
        $height = e.detail.height,
        ratio = $width / $height;   //图片的真实宽高比例  
      var viewWidth = 500,           //设置图片显示宽度，  
        viewHeight = 500 / ratio;    //计算的高度值     
      this.setData({
        imgwidth: viewWidth,
        imgheight: viewHeight
      })
    }

})