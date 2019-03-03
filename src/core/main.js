const electron = require('electron')
const {
    app,
    BrowserWindow,
    Tray,
    Menu
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

    initTray()
}

app.on('ready', () => {
    createWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

function initTray() {
    const trayIcon = new Tray('src/core/images/taskbar.png')

    const contextMenu = Menu.buildFromTemplate([{
            label: 'Item1',
            type: 'radio'
        },
        {
            label: 'Item2',
            type: 'radio'
        },
        {
            label: 'Item3',
            type: 'radio',
            checked: true
        },
        {
            label: 'Item4',
            type: 'radio'
        }
    ])

    trayIcon.setToolTip('This is my application.')
    trayIcon.setContextMenu(contextMenu)
}