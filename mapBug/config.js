const url='https://api.mapbox.com/styles/v1/bingwang/ckf3jahtj0qlj1auvvjavoowv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmluZ3dhbmciLCJhIjoiY2tmM2o0ZHY5MDNtODMybnN6Z25ranJnOCJ9.FMXfyo4wD44LQGHmB8ffLA#10.32/34.5779/117.0888';//填写自己请求的具体的网址
const path=require('path');
const imgDir=path.join(__dirname,'img');

module.exports.url=url;
module.exports.imgDir=imgDir;