const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 250,
        height: 250,
        webPreferences: {
            nodeIntegration: true
        },
        title:"CPSGame - By Nyrok",
        icon: __dirname + "/assets/cps.ico",
    })
    win.loadFile(__dirname + '/assets/index.html')
    win = null
}

app.whenReady().then(createWindow)

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