(() => {
  const toggle = document.querySelector('#language-toggle');
  let lang = 'zh';
  try { if (localStorage.getItem('jixuan-language') === 'en') lang = 'en'; } catch {}
  function applyLanguage(next) {
    lang = next;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-zh][data-en]').forEach(el => { el.innerHTML = el.dataset[lang]; });
    toggle.innerHTML = `${lang === 'zh' ? 'EN' : '中文'} <span aria-hidden="true">↗</span>`;
    toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    document.title = lang === 'zh' ? '陈继萱 · Jixuan Chen' : 'Jixuan Chen · 陈继萱';
    document.querySelector('#open-figure').setAttribute('aria-label', lang === 'zh' ? '放大 MVTrackTrans 框架图' : 'Enlarge MVTrackTrans architecture');
    try { localStorage.setItem('jixuan-language', lang); } catch {}
  }
  toggle.addEventListener('click', () => applyLanguage(lang === 'zh' ? 'en' : 'zh'));
  applyLanguage(lang);
  document.querySelector('#year').textContent = new Date().getFullYear();

  const dialog = document.querySelector('#figure-dialog');
  document.querySelector('#open-figure').addEventListener('click', () => dialog.showModal());
  document.querySelector('#close-figure').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close();
  });

  const bibtex = `@inproceedings{zhang2026MVTrackTrans,
  title={Multi-view Crowd Tracking Transformer with View-Ground Interactions Under Large Real-World Scenes},
  author={Zhang, Qi and Chen, Jixuan and Zhang, Kaiyi and Yu, Xinquan and Chan, Antoni B. and Huang, Hui},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2026}
}`;
  let toastTimer;
  function toast(message) {
    const el = document.querySelector('#toast');
    el.textContent = message; el.classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2600);
  }
  document.querySelector('.copy-citation').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(bibtex);
      toast(lang === 'zh' ? 'BibTeX 已复制' : 'BibTeX copied');
    } catch {
      const field = document.createElement('textarea');
      field.value = bibtex; field.style.position = 'fixed'; field.style.opacity = '0'; document.body.append(field); field.select();
      const copied = document.execCommand('copy'); field.remove();
      if (copied) toast(lang === 'zh' ? 'BibTeX 已复制' : 'BibTeX copied');
      else { const blob = new Blob([bibtex], {type:'text/plain'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'MVTrackTrans.bib'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast(lang === 'zh' ? '引用文件已下载' : 'Citation downloaded'); }
    }
  });
})();
