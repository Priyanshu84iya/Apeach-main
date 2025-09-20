const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 400,
    height: 430,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'img', 'home-page1.png'),
    show: false
  });

  win.loadFile('index.html').catch(e => console.error('[main] loadFile error', e));
  
  // Show window when ready to prevent visual flash
  win.once('ready-to-show', () => {
    win.show();
  });

  // Only open dev tools in development
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.handle('open-menu', async () => {
  if (win) {
    await win.loadFile('menu.html').catch(e => console.error('[main] load menu error', e));
  }
});

ipcMain.handle('back-to-main', async () => {
  if (win) {
    await win.loadFile('index.html').catch(e => console.error('[main] load index error', e));
  }
});

ipcMain.handle('eating', async () => {
  if (win) {
    await win.loadFile('page3.html').catch(e => console.error('[main] load page3 error', e));
  }
});

ipcMain.handle('back-to-main-from-page3', async () => {
  if (win) {
    await win.loadFile('menu.html').catch(e => console.error('[main] load menu error', e));
  }
});

ipcMain.handle('make-a-selfie', async () => {
  if (win) {
    await win.loadFile('page4.html').catch(e => console.error('[main] load page4 error', e));
  }
});

ipcMain.handle('back-to-main-from-page4', async () => {
  if (win) {
    await win.loadFile('menu.html').catch(e => console.error('[main] load menu error', e));
  }
});

ipcMain.handle('sleeping', async () => {
  if (win) {
    await win.loadFile('page5.html').catch(e => console.error('[main] load page5 error', e));
  }
});

ipcMain.handle('back-to-main-from-page5', async () => {
  if (win) {
    await win.loadFile('menu.html').catch(e => console.error('[main] load menu error', e));
  }
});

ipcMain.handle('gift-a-flower', async () => {
  if (win) {
    await win.loadFile('page6.html').catch(e => console.error('[main] load page6 error', e));
  }
});

ipcMain.handle('back-to-main-from-page6', async () => {
  if (win) {
    await win.loadFile('menu.html').catch(e => console.error('[main] load menu error', e));
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});