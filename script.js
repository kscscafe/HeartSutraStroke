function showKanji(id) {
  // 全てのSVGを非表示に
  document.querySelectorAll('.kanji-svg').forEach(svg => {
    svg.classList.remove('active');
  });

  const svg = document.getElementById(`kanji-svg-${id}`);
  if (!svg) return;

  // 表示対象にアクティブクラス付与
  svg.classList.add('active');

  // パスを取得して初期化
  const paths = svg.querySelectorAll('path[stroke="#bf0000"]');
  paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.stroke = "#222";
  });

  // 書き順アニメーション
  let index = 0;
  function animateStroke(path, duration, callback) {
    const length = path.getTotalLength();
    path.style.stroke = "#bf0000";
    path.style.transition = 'none';
    path.getBoundingClientRect(); // Reflow
    path.style.transition = `stroke-dashoffset ${duration}ms linear`;
    path.style.strokeDashoffset = 0;
    setTimeout(() => {
      path.style.stroke = "#222";
      callback();
    }, duration + 100);
  }

  function animateNext() {
    if (index >= paths.length) return;
    animateStroke(paths[index], 700, animateNext);
    index++;
  }

  setTimeout(animateNext, 500);
}