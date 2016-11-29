//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    var articleList = [
      {
        title:"文章1",
        brief:"文章1的简介",
        time:"2016-07-12",
        image:"http://atth.eduu.com/album/201203/12/1475134_1331559643qMzc.jpg"
      },
      {
        title:"文章2",
        brief:"文章2的简介",
        time:"2016-07-12",
        image:"http://pic51.nipic.com/file/20141027/11284670_094822707000_2.jpg"
      },
      {
        title:"文章1",
        brief:"文章1的简介",
        time:"2016-07-12",
        image:"http://pic.4j4j.cn/upload/pic/20130815/31e652fe2d.jpg"
      }
    ];

    that.setData({
      articleList:articleList
    });
  },
  articleTap: function(e){
    var that = this
    var temList = that.data.articleList
    var idx = e.currentTarget.dataset.id
    var view = temList[idx].view
    view = typeof(view) == 'undefined' ? {} : view
    view.style="background-color: #eee;"
    temList[idx].view = view
    that.setData({
      articleList:temList
    });
  },
  articleLikeTap: function(e){
    var that = this
    var temList = that.data.articleList
    var idx = e.currentTarget.dataset.id
    var view = temList[idx].view
    view = typeof(view) == 'undefined' ? {} : view
    view.likeStyle="color: red;"
    temList[idx].view = view
    that.setData({
      articleList:temList
    });
  },
  articleTouchstart: function(e){
    console.log("hello");
  },
  articleTouchmove: function(e){
    var that = this
    var temList = that.data.articleList
    var idx = e.currentTarget.dataset.id
    var view = temList[idx].view
    view = typeof(view) == 'undefined' ? {} : view
    view.style = typeof(view.style) == 'undefined' ? "" : view.style 
    view.style+="left: "+100+"px;"
    temList[idx].view = view
    that.setData({
      articleList:temList
    });
  }
})
