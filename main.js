// var express = require('express')
//   , http = require('http')
//   , path = require('path');

// // Express의 미들웨어 불러오기
// var bodyParser = require('body-parser')
//   , static = require('serve-static');

// // 익스프레스 객체 생성
// var app = express();

// // 기본 속성 설정
// app.set('port', process.env.PORT || 3116);

// // body-parser를 이용해 application/x-www-form-urlencoded 파싱
// app.use(bodyParser.urlencoded({ extended: false }))

// // body-parser를 이용해 application/json 파싱


// // 라우터 사용하여 라우팅 함수 등록
// var router = express.Router();



// app.use('/', router);

// var expressErrorHandler = require('express-error-handler');

// var errorHandler = expressErrorHandler({
//     static:{
//         '404':'./public/404.html'
//     }
// })

// app.use(expressErrorHandler.httpError(404));
// app.use(errorHandler);



// // Express 서버 시작
// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });

document.querySelector("#sendButton").addEventListener('click',()=>{

    let selectFile = document.querySelector("#inputImage").files[0];

    console.log(selectFile);

  })

  document.querySelector("#sendButton").addEventListener('click',()=>{

    let selectFile = document.querySelector("#inputImage").files[0];

    const file = URL.createObjectURL(selectFile);

    document.querySelector(".uploadImage").src = file;

  })