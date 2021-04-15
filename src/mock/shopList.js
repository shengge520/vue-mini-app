/*
 * @Author: MonkeyFirst
 * @LastEditors: MonkeyFirst
 * @Date: 2021-04-13 09:23:19
 * @LastEditTime: 2021-04-13 10:29:10
 * @Email: 1656667614@qq.com
 * @FilePath: \vue-mini-app\src\mock\shopList.js
 * @Description: 
 */
 const shopList = [
     {
        id:'1',
        img:require('@/assets/img/milk.jpg'),
        name:'测试商品',
        Price:'12',
     },
     {
        id:'2',
        img:require('@/assets/img/milk.jpg'),
        name:'测试商品',
        Price:'12',
     },
     {
        id:'3',
        img:require('@/assets/img/milk.jpg'),
        name:'测试商品',
        Price:'12',
     },
     {
        id:'4',
        img:require('@/assets/img/milk.jpg'),
        name:'测试商品',
        Price:'12',
     },
     {
        id:'5',
        img:require('@/assets/img/milk.jpg'),
        name:'测试商品',
        Price:'12',
     },
     {
        id:'6',
        img:require('@/assets/img/milk.jpg'),
        name:'测试商品',
        Price:'12',
     },
 ]

 const shopDetail =[
    {
        imgone:require('@/assets/img/milk.jpg'),
        imgtwo:require('@/assets/img/milk.jpg'),
        imgThree:require('@/assets/img/milk.jpg'),
        number:'777',
        name:'测试商品',
        color:'blue',
        price:'777',
        value:'1',
        Images:[
            {
                one:require('@/assets/img/milk.jpg')
            }
        ],
        Peizhis:[
            {
                left:'说明1',
                right:'文字1'
            },
            {
                left:'说明2',
                right:'文字2'
            },
        ]
    }
 ]

 const shopCategory =[
    {
        category_name:'类型1',
        cateitems:[
            {
                name:'测试商品1',
                img:require('@/assets/img/milk.jpg'),
            }
        ]
    },
    {
        category_name:'类型2',
        cateitems:[
            {
                name:'测试商品2',
                img:require('@/assets/img/milk.jpg'),
            }
        ]
    },
    {
        category_name:'类型3',
        cateitems:[
            {
                name:'测试商品3',
                img:require('@/assets/img/milk.jpg'),
            }
        ]
    },
 ]

 const toolList =[
     {
        id:'1',
        title:'测试新闻1',
        time:'2020-01-01',
        img:require('@/assets/img/milk.jpg'),
        boxs:[
            {
                p:'说明1',
                imgs:require('@/assets/img/milk.jpg'),
            }
        ]
     },
     {
        id:'2',
        title:'测试新闻2',
        time:'2020-01-01',
        img:require('@/assets/img/milk.jpg'),
        boxs:[
            {
                p:'说明2',
                imgs:require('@/assets/img/milk.jpg'),
            }
        ]
     },
 ]

 export {
    shopList,
    shopDetail,
    shopCategory,
    toolList,
 }