+(function() {
  let elm = document.querySelector("h1#content");
  console.info("%c ","background: url(https://images.cnblogs.com/cnblogs_com/miluluyo/1493340/o_a.gif) no-repeat center;padding-left:400px;padding-bottom: 160px;background-size:400px");

  function renderHtml(content) {
    return [...content]
      .map(c => `<span>${c.trim() || "&nbsp;"}</span>`)
      .join("");
  }

  elm.innerHTML = renderHtml(elm.textContent);
})();