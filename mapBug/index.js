const http=require('http');
const fs=require('fs');
const request=require('request');
const path=require('path');
const async = require('async');
const config=require('./config');
	
	var sleep = function(time) {
	    var startTime = new Date().getTime() + parseInt(time, 10);
	    while(new Date().getTime() < startTime) {}
	};
	let z = 0,urlArr=[];
	
	for(let i = 6;i < 7;i++){
		let x = Math.pow(2,i),y = Math.pow(2,i);

		for(let j = 60;j < 64;j++){
			for(let k = 0;k < y;k++){
				let url = config.url;
				url = url.replace(/{z}/,i);
				url = url.replace(/{x}/,j);
				url = url.replace(/{y}/,k);
				if(fs.existsSync('../img/'+i)){
					console.log('../img/'+i);
					console.log("是目录");
				}else{
					console.log("目录生成成功");
					fs.mkdirSync('../img/'+i);
				}
				if(fs.existsSync('../img/'+i+'/'+j+'/')){
					console.log('../img/'+i+'/'+j+'/');
					console.log("是目录");
				}else{
					console.log("目录生成成功");
					fs.mkdirSync('../img/'+i+'/'+j+'/');
				}
				urlArr.push({
					url:url,
					fsName:'../img/'+i+'/'+j+'/'+k+'.png'
				});
			}
		}
	}

		// if(i!=0 && i % 100 == 0){
		// 		sleep(1000*60);
		// }
		async.mapLimit(urlArr, 5, function (urlObj, callback) {
		    if (urlObj.url) {
		      console.log('正在下载' + urlObj.fsName);
		      // 默认
		      // fs.createWriteStream(dir + "/" + filename)
		      // 防止pipe错误
			  request(urlObj.url)
		        .on('error', function (err) {
		          console.log(err);
		        })
		        .pipe(fs.createWriteStream(urlObj.fsName));
				
			  // let resultStr= yield myP;
		      callback();
		    }
		  }, function (err, result) {
		    if (err) {
		      console.log(err);
		    } else {
		      console.log(" all right ! ");
		      console.log(result);
		    }
		  });
		 // sleep(100);





	
