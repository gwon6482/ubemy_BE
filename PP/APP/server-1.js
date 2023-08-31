// 복습1 : http 서버를 생성하고 3000번 포트로 열기

// 서버를 생성하기 위한 라이브러리
const http = require('http');

// 로컬 파일에 접근하기 위한 라이브러리
const fs = require('fs');
const { text } = require('stream/consumers');

//서버 생성
const server = http.createServer((req,res)=>{
    const url = req.url 
    const method = req.method

    res.setHeader('Content-type', 'text/html');
    res.write(`
        <html>
            <head>
            </head>
            <body>
                test
            </body>
        </html>
    `)
})

// 서버를 3000번 포트에서 지속적으로 유지
server.listen(3000);