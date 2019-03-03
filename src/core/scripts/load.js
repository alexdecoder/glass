const currentWindow = require('electron').remote.getCurrentWindow()
const {
    BrowserWindow,
    app
} = require('electron').remote

var tasks = [
    task1,
    task2,
    task3,
]
var completed = 0

var progressBar
window.onload = () => {
    progressBar = document.getElementsByClassName('progressBar-progress')[0]

    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];

        task()
    }
}

// these are example tasks to simulate progressbar. add your own here
function task1() {
    window.setTimeout(() => {
        updateProgress()
    }, 2000)
}

function task3() {
    window.setTimeout(() => {
        updateProgress()
    }, 1000)
}

function task2() {
    window.setTimeout(() => {
        updateProgress()
    }, 500)
}

function updateProgress() {
    completed++

    progressBar.style.width = ((completed / tasks.length) * window.screenX).toString() + "px"

    if (completed == tasks.length) {
        window.setTimeout(() => {
            currentWindow.hide()

            showMainWindow()
        }, 250)
    }
}

let mainWindow

function showMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 500,
        show: false,
        frame: false,
        minHeight: 500,
        minWidth: 1000,
        icon: 'src/core/images/logo.png',
        backgroundColor: '#424242',
    })
    mainWindow.loadFile('src/main/main.html')
    mainWindow.on('closed', () => {
        mainWindow = null

        currentWindow.close()
    })
    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })
    app.on('activate', () => {
        if (mainWindow === null) {
            showMainWindow()
        }
    })
}