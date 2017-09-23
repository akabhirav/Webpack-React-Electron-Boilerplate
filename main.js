const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

/** We store browser window object in a variable so that it
 * does not get cleaned up automatically by garbage collector*/
let mainWindow;

let mainWindowConfig= {width: 800, height: 600, resizable: true, frame: true};


/** Configuration for Browser Window
 * @param {object} config - Takes the configuration for browser window.
 * @param {number} config.width - Width of the browser window
 * @param {number} config.height - Height of the browser window
 * @param {boolean} config.resizable - Whether the browser window is resizable
 * @param {boolean config.frame - Whether the browser window has a frame
 * */
function createWindow(config) {
  /** Initialize browser window with config*/
  mainWindow = new BrowserWindow(config);

  /** Tell main window which window to load by constructing a url*/
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  /** Uncomment to Open Dev Tools for better development experience*/
  // mainWindow.webContents.openDevTools();

  /** Set main window var to null so that cleanup happens on closing the window*/
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

/** Create window when app is ready and loaded*/
app.on('ready', createWindow);

/** Quit the application automatically when all windows are closed*/
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/** If window was not loaded on ready event load it now!*/
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow(mainWindowConfig);
  }
});

/** custom channel example, on receiving this event on ipc app will quit.*/
ipcMain.on('close-main-window', function () {
  app.quit();
});