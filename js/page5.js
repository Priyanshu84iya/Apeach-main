window.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backButton3');
  if (backBtn) {
    backBtn.addEventListener('click', async () => {
      console.log('[renderer] sending back-to-main-from-page5');
      try {
        await window.electronAPI.backToMainFromPage5();
      } catch (error) {
        console.error('[renderer] Error going back from page5:', error);
      }
    });
  } else {
    console.error('Button #backButton3 not found');
  }
});

const _PRG = document.getElementById('p');
const _OUT = document.querySelector('output[for="p"]');
const K = 5, TMAX = K * _PRG.max;

function load(t = 0) {
  if (t <= TMAX) {
    if (t % K === 0) {
      _OUT.value = _PRG.value = t / K;
    }
    requestAnimationFrame(load.bind(this, t + (Math.random() > 0.5 ? 1 : 0)));
  }
};

load();
