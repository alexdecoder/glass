const electron = require('electron')
const {
    app,
    BrowserWindow,
    Tray
} = require('electron')

var win

function createWindow() {
    win = new BrowserWindow({
        width: 250,
        height: 350,
        show: false,
        frame: false,
        maxWidth: 250,
        maxHeight: 350,
        icon: 'src/core/images/logo.png',
        resizable: false,
        alwaysOnTop: true,
    })
    win.loadFile('src/core/load.html')

    win.on('closed', () => {
        win = null
    })
    win.on('ready-to-show', () => {
        win.show()
    })

    const trayIcon = new Tray('src/core/images/logo.png')
}

app.on('ready', () => {
    createWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => 
{
    alert('rohan kys')
    if (win === undefined) 
    {
        createWindow()
    }
})