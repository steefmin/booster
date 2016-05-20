var Xvfb = require('xvfb')
var xvfb = new Xvfb()
//xvfb.startSync(function(err,xvfbProcess){
//  if(err){
//    console.log(err)
//  }
//})

//var webtorrent = require('webtorrent-hybrid')

//var client = new webtorrent()

var http = require('http')

var port = 7777

var server = http.createServer(handleHttp).listen(port)

function handleHttp (req,res) {
  console.log(req.url)
  req.url.replace("/","")
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('booster started')
  res.end()
}

//xvfb.stopSync()
