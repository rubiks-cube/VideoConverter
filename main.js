const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let mainWin;

app.on('ready', () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {backgroundThrottling: false}
  });

  mainWin.loadURL(url.format({
     pathname: path.join(__dirname, '/src/index.html'),
     protocol: 'file',
     slashes: true
  }));
});