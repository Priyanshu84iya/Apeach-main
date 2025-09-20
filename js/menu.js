window.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', async () => {
      console.log('[renderer] sending back-to-main');
      try {
        await window.electronAPI.backToMain();
      } catch (error) {
        console.error('[renderer] Error going back to main:', error);
      }
    });
  } else {
    console.error('Button #backBtn not found');
  }

  const btnEating = document.getElementById('btn__eating');
  if (btnEating) {
    btnEating.addEventListener('click', async () => {
      console.log('[renderer] sending eating');
      try {
        await window.electronAPI.eating();
      } catch (error) {
        console.error('[renderer] Error opening eating page:', error);
      }
    });
  } else {
    console.error('Button #btn__eating not found');
  }

  const btnMakeASelfie = document.getElementById('btn__make-a-selfie');
  if (btnMakeASelfie) {
    btnMakeASelfie.addEventListener('click', async () => {
      console.log('[renderer] sending make-a-selfie');
      try {
        await window.electronAPI.makeASelfie();
      } catch (error) {
        console.error('[renderer] Error opening selfie page:', error);
      }
    });
  } else {
    console.error('Button #btn__make-a-selfie not found');
  }

  const btnSleeping = document.getElementById('btn__sleeping');
  if (btnSleeping) {
    btnSleeping.addEventListener('click', async () => {
      console.log('[renderer] sending sleeping');
      try {
        await window.electronAPI.sleeping();
      } catch (error) {
        console.error('[renderer] Error opening sleeping page:', error);
      }
    });
  } else {
    console.error('Button #btn__sleeping not found');
  }

  const btnGiftAFlower = document.getElementById('btn__gift-a-flower');
  if (btnGiftAFlower) {
    btnGiftAFlower.addEventListener('click', async () => {
      console.log('[renderer] sending gift-a-flower');
      try {
        await window.electronAPI.giftAFlower();
      } catch (error) {
        console.error('[renderer] Error opening flower page:', error);
      }
    });
  } else {
    console.error('Button #btn__gift-a-flower not found');
  }
});
