var Xvfb = require('xvfb')
var xvfb = new Xvfb()
xvfb.startSync()

var webtorrent = require('webtorrent-hybrid')
