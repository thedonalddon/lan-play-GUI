const { app, BrowserWindow } = require('electron')
const config = require('electron-json-config');
let win
const os = require('os');
if(os.arch == "arm"){
	app.disableHardwareAcceleration()
}
function createWindow () {
	win = new BrowserWindow({ width: 800, height: 623, frame: false })
	win.loadFile('index.html')
	win.setResizable(false)
	win.center()
 win.webContents.openDevTools()
	win.setMenu(null) 
	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('closed', () => {
    window.webContents.send('ping', 'whoooooooh!');
  });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
