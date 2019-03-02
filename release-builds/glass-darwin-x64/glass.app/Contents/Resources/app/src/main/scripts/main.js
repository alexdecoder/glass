const currentWindow = require('electron').remote.getCurrentWindow()
const electron = require('electron')
window.onload = () => {
    if (process.platform == 'darwin')
    {
        var winControls = document.getElementsByClassName('navagation-windowControls')[0]
        winControls.style.display = 'none'

        var darControls = document.getElementsByClassName('navagation-darwinControls')[0]
        darControls.style.display = 'flex'

        var darButtons = document.getElementsByClassName('navagation-darwinControls-control')
        darButtons[1].addEventListener('click', () => 
        {
            currentWindow.minimize()
        })
        darButtons[2].addEventListener('click', () => 
        {
            currentWindow.maximize()
        })
        darButtons[0].addEventListener('click', () => 
        {
            window.close()
        })
    }
    var controls = document.getElementsByClassName('navagation-windowControls-control')
    controls[0].addEventListener('click', () => {
        currentWindow.minimize()
    })
    controls[1].addEventListener('click', () => {
        currentWindow.maximize()
    })
    controls[2].addEventListener('click', () => {
        window.close()
    })

    var slideControl = document.getElementById('slideBar')
    var menuButton = document.getElementsByClassName('navagation-tab')[0]
    menuButton.addEventListener('click', () => {
        if (slideControl.className != 'slideBarInit') {
            if (slideControl.className == 'sidebarSlideHidden') {
                slideControl.className = 'sidebarSlideIn'
            } else {
                slideControl.className = 'sidebarSlideHidden'
            }
        } else {
            slideControl.className = 'sidebarSlideIn'
        }
    })
}