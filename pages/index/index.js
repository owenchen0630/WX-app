Page({
    data: {
        Img: '',
        Name: '刘小雨の小枇杷',
        Motto: '和你在一起的天数：',
        Dates: '0',
        Enter: '\n'
    },

    onLoad: function () {
        var end_dates = new Date();
        //var start_dates = 1309363200;
        var start = "2011-06-30";
        var start_dates = new Date(Date.parse(start.replace(/-/g,   "/"))).getTime();     
        var nTime = end_dates - start_dates;
        var day =Math.floor(nTime/86400000);
        this.setData({
            Dates: day
        });
    },

    onShareAppMessage: function () {
        return {
            title: '刘小雨の小枇杷',
            desc: '萌萌哒阿雨和枇杷',
            path: '/page/user?id=123'
        }
    }

})