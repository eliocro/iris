
const path = require('path');
const { app, BrowserWindow } = require('electron');


function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  process.env.REACT_DEV
    ? win.loadURL('http://localhost:3000')
    : win.loadFile(path.join(__dirname, 'build', 'index.html'));
}


app.whenReady().then(() => {
  createWindow();

  // Open a window if none are open (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Quit the app when all windows are closed (Windows & Linux)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })
});;
