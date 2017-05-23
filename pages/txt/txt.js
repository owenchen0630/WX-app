
Page({
  data: {
    src_head: "http://opvi9iwql.bkt.clouddn.com/",
    img_src: ""
  },

  onLoad: function () {

    this.setData({
      img_src: "http://opvi9iwql.bkt.clouddn.com/wx02.jpg"
    })
  },

  onHide: function () {
    var num = Math.random();//Math.random()：得到一个0到1之间的随机数
    num = Math.ceil(num * 51);//num*80的取值范围在0~80之间,使用向上取整就可以得到一个1~80的随机数
    //num就是你要的随机数,如果你希望个位数前加0,那么这样:
    var str;
    if (num < 10) {
      str = "0" + num.toString();
    }
    else {
      str = num.toString();
    }
    this.setData({
      img_src: "http://opvi9iwql.bkt.clouddn.com/wx" + str + ".jpg"
    })
  },

  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = 750,           //设置图片显示宽度，  
      viewHeight = 750 / ratio;    //计算的高度值     
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  }

})