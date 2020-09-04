(function () {
  let span = document.createElement('span');

  span.className = 'fa';
  span.style.display = 'none';
  document.body.insertBefore(span, document.body.firstChild);

  function css(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
  }

  if (css(span, 'font-family') !== 'FontAwesome') {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://use.fontawesome.com/releases/v5.14.0/css/all.css";
    document.head.appendChild(link);
  }
  document.body.removeChild(span);
})();
