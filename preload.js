const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  openMenu: () => ipcRenderer.invoke('open-menu'),
  backToMain: () => ipcRenderer.invoke('back-to-main'),
  eating: () => ipcRenderer.invoke('eating'),
  backToMainFromPage3: () => ipcRenderer.invoke('back-to-main-from-page3'),
  makeASelfie: () => ipcRenderer.invoke('make-a-selfie'),
  backToMainFromPage4: () => ipcRenderer.invoke('back-to-main-from-page4'),
  sleeping: () => ipcRenderer.invoke('sleeping'),
  backToMainFromPage5: () => ipcRenderer.invoke('back-to-main-from-page5'),
  giftAFlower: () => ipcRenderer.invoke('gift-a-flower'),
  backToMainFromPage6: () => ipcRenderer.invoke('back-to-main-from-page6')
});