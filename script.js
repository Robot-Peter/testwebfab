function make() {
    var stjs = window.document.getElementById('t1')
    var t1js = window.document.getElementById('t2')
    var tjs = window.document.getElementById('title')
    var itjs = window.document.getElementById('i1').value
    var it1js = window.document.getElementById('i2').value
    var it2js = window.document.getElementById('i3').value
    tjs.innerText = itjs
    stjs.innerHTML = '<h3>' + it1js + '</h3>'
    t1js.innerText = it2js
}
