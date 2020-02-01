import {request} from "./request"

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getDetailGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}


export class Goods {
  constructor(colunm, itemInfo, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.topImage = itemInfo.topImages[0]
    this.lowNowPrice = itemInfo.lowNowPrice
    //这个有可能没有
    this.discountDesc = itemInfo.discountDesc
    this.sellNum = colunm[0]
    this.fav = colunm[1]
    this.serviceInfo = services[0].name
    this.services = services
    this.deliveryTime = itemInfo.extra.deliveryTime
  }
}
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}
export class itemParams {
  constructor(itemParams) {
    this.set = itemParams.info.set
    this.tables = itemParams.rule.tables
  }
}
export class userComment {
  constructor(rate) {
    this.content = rate.list[0].content
    this.createdTime = rate.list[0].created
    this.explain = rate.list[0].explain
    this.style = rate.list[0].style
    this.userAvatar = 'http:' + rate.list[0].user.avatar
    this.userName = rate.list[0].user.uname
    this.imgs = rate.list[0].images
  }
}
