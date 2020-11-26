const http = require('http');
const fs = require('fs');
// const path = require('path');
var Jimp = require('jimp');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);
    
    if (req.method == 'GET') {

        if(req.url === '/simple/1'){
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/utf-8')
            res.end('You triggered the simple api')
        }
        else if(req.url === '/simple/2'){
            Jimp.read('https://drive.google.com/uc?id=1m9U-jBXKCVR4RigA1nPt8LjT81zVljx-')
            .then(image => {
                console.log({image});
                res.statusCode = 200
                res.setHeader('Cache-Control', 'no-cache')
                image.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
                    console.log(Buffer.byteLength(buffer),Buffer.byteLength(image.bitmap.data));
                    res.end(buffer)
                    
                });
            })
            .catch(err => {
                console.error({err});
            });
        }
        else if(req.url === '/simple/3'){
            Jimp.read('https://drive.google.com/uc?id=1m9U-jBXKCVR4RigA1nPt8LjT81zVljx-')
            .then(image => {
                console.log({image});
                res.statusCode = 200
                res.setHeader('Cache-Control', 'no-cache')
                image
                .invert()
                .flip(true,false)
                .blur( 20 )          
                .rotate(120) 
                .getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
                    console.log(Buffer.byteLength(buffer),Buffer.byteLength(image.bitmap.data));
                    res.end(buffer)
                });
            })
            .catch(err => {
                console.error({err});
            });
        }
        else if(req.url === '/simple/4'){
            Jimp.read('https://drive.google.com/uc?id=1m9U-jBXKCVR4RigA1nPt8LjT81zVljx-')
            .then(image => {
                console.log({image});
                res.statusCode = 200
                res.setHeader('Cache-Control', 'no-cache')
                // image.resize(100,Jimp.AUTO)
                image
                .invert()
                .flip(true,false)
                .blur( 20 )          
                .rotate(120) 
                .sepia()
                .fade( 0.8 )
                .brightness( 1 )    // adjust the brighness by a value -1 to +1
                .greyscale()
                .normalize()
                .gaussian(2)
                .getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
                    console.log(Buffer.byteLength(buffer),Buffer.byteLength(image.bitmap.data));
                    res.end(buffer)
                });
            })
            .catch(err => {
                console.error({err});
            }); 
        }
        else if(req.url === '/simple/5'){
            Jimp.read('https://drive.google.com/uc?id=1m9U-jBXKCVR4RigA1nPt8LjT81zVljx-')
            .then(image => {
                console.log({image});
                res.statusCode = 200
                res.setHeader('Cache-Control', 'no-cache')
                // image.resize(100,Jimp.AUTO)
                image
                .invert()
                .flip(true,false)
                .blur( 20 )          
                .rotate(120) 
                .sepia()
                .fade( 0.8 )
                .brightness( 1 )    // adjust the brighness by a value -1 to +1
                .greyscale()
                .normalize()
                .gaussian(2)
                .invert()
                .flip(true,false)
                .blur( 20 )          
                .rotate(120) 
                .sepia()
                .fade( 0.8 )
                .brightness( 1 )    // adjust the brighness by a value -1 to +1
                .greyscale()
                .normalize()
                .gaussian(2)
                .getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
                    console.log(Buffer.byteLength(buffer),Buffer.byteLength(image.bitmap.data));
                    res.end(buffer)
                });
            })
            .catch(err => {
                console.error({err});
            }); 
        }
      
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
  })
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});