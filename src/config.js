// module.exports={
//     devServer:{
//         proxy:{
//             '/api': {
//                 //target后面的url是自己服务器的url，我访问的是.NET服务器的地址，
//                 //如果没有地址可以访问百度、淘宝等
//                 target: 'http://ngrok.ngrok.xiezuojing.icu:8081',
//                 // 允许跨域
//                 changeOrigin: true,
//                 ws: true,
//                 pathRewrite: {
//                     '^/api': '/'
//                 }
//             }
//         }
//     }
// }