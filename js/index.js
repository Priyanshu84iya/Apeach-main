window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('my-button');
  if (btn) {
    btn.addEventListener('click', async () => {
      console.log('[renderer] START button clicked');
      
      // Check if electronAPI is available
      if (window.electronAPI && window.electronAPI.openMenu) {
        try {
          console.log('[renderer] Using electronAPI to open menu');
          await window.electronAPI.openMenu();
        } catch (error) {
          console.error('[renderer] Error opening menu:', error);
          // Show user feedback if needed
          btn.textContent = 'Error!';
          setTimeout(() => {
            btn.textContent = 'START';
          }, 2000);
        }
      } else {
        console.error('[renderer] electronAPI not available - this might be running in a browser instead of Electron');
        // Fallback for testing in browser
        alert('This app needs to run in Electron. Please use "npm start" to run the app.');
      }
    });
    
    // Add visual feedback
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'translateY(1px)';
    });
    
    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'translateY(0)';
    });
    
    console.log('[renderer] START button event listener attached successfully');
  } else {
    console.error('Button #my-button not found!');
  }
  
  // Debug: Check if electronAPI is available
  if (window.electronAPI) {
    console.log('[renderer] electronAPI is available:', Object.keys(window.electronAPI));
  } else {
    console.warn('[renderer] electronAPI is not available - make sure this is running in Electron with preload script');
  }
});
