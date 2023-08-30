const fs = require('fs')

const requestHandler = (req,res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
        <html>
            <head>
                <title>
                    enter message
                </title>
            </head>
            <body>
                <h1>
                    hello from my Node.js Server!
                </h1>
                <form action="/message" method="POST" name="message">
                    <input type='text' name="message">
                    <button type='submit'>send</button>
                </form>
            </body>
        
        </html>
    `);
        return res.end();
    
    
    }
    if (url === '/message' && method === 'POST'){
        const body = [];
    
        // 버퍼에 사용할수 있는 새로운 데이터 청크가 발생하면 반응
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        // if 뒤쪽으로 넘어가게 되면 ERR_HTTP_HEADERS_SENT 에러가 발생할 수 있으므로
        // res.end 이후에 req가 중단 될 수 있게 return 키워드를 써준다. (익명함수 중단)
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
            <head></head>
            <body>
                <h1>
                    hello world
                </h1>
            </body>
        </html>
    `);
    res.end();
}

module.exports = requestHandler;
