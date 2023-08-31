/** 복습2 
 * 1. http서버를 3000번 포트로 열기
 * 2. 사용자가 text를 보낼 수 있는 간단한 사이트 전송
 */

// 서버를 생성하기 위한 라이브러리
const http = require('http');

// 로컬 파일에 접근하기 위한 라이브러리
const fs = require('fs');
const { text } = require('stream/consumers');
 
//서버 생성
const server = http.createServer((req,res)=>{
    const url = req.url 
    const method = req.method

    if(url === '/' && method === 'GET') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
                <head>
                </head>
                <body>
                    <h1>INPUT DATA</h1>
                    <form action="/message" method="POST" name="message">
                        <input type='text' name="message">
                        <button type='submit'>send</button>
                    </form>
                </body>
            </html>
        `)
        
        return res.end()
    }

    else if (url === '/message' && method === 'POST') {
        const requsetData = []

        /**
         * 데이터가 수신 이벤트 리스너
         * 
         * 수신된 데이터를 requsetData 배열에 push
         */
        req.on('data', (chunk)=>{
            console.log(chunk);
            requsetData.push(chunk)
        });


        /**
         * response 요청 end의 이벤트 리스너
         * 
         * 1. requsetData 가 <Buffer 6d 65 73 73 61 67 65 3d 61 73 64>의 형식으로 옴
         * 2. 이 데이터를 Buffer에 보관
         * 3. 버퍼에서 데이터를 꺼내서 String의 형태로 변환
         * 4. 변환된 문자열은 message=testmessage 의 형태
         * 5. 문자열을 = 를 기준으로 분할한뒤 뒤의 메세지 부분만 추출
         * 6. 추출된 메세지를 fs를 사용하여 비동기적으로 저장
         * 7. 저장후 리스너 종료
         */
        return req.on('end',() => {
            console.log('requsetData: ',requsetData[0].toString())
            console.log('Buffer : ',Buffer)
            console.log('Buffer.concat(requsetData): ',Buffer.concat(requsetData))
            const parsedBody = Buffer.concat(requsetData).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
            
        })


    }
    else {
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                <head></head>
                <body>
                    <h1>
                        worng URL
                    </h1>
                </body>
            </html>
        `);
        res.end();
    }

    
})

// 서버를 3000번 포트에서 지속적으로 유지
server.listen(3000);