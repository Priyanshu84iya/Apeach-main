window.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', async () => {
      console.log('[renderer] sending back-to-main-from-page3');
      try {
        await window.electronAPI.backToMainFromPage3();
      } catch (error) {
        console.error('[renderer] Error going back from page3:', error);
      }
    });
  } else {
    console.error('Button #backButton not found');
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
