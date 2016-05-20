var sleep = require('sleep')
var Xvfb = require('xvfb')
var xvfb = new Xvfb()
xvfb.startSync(function (err, xvfbProcess) {
  if(err) {
    console.log(err)
  }
})

var WebTorrent = require('webtorrent-hybrid')

var client = new WebTorrent()

var http = require('http')

var port = 7777

var server = http.createServer(handleHttp).listen(port)

function handleHttp (req, res) {
  var torrentId = req.url.replace('/', '')
  if (torrentId !== '' && torrentId !== 'favicon.ico') {
    client.add(torrentId, download(torrent))
  }
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('booster started')
  res.end()
}

function download (torrent) {
  // wait for time and than destroy the torrent
  sleep.sleep(60)
  torrent.destroy()
}

xvfb.stopSync()
