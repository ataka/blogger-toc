var d = document;
var titles = d.getElementsByClassName('entry-title');
var max = titles.length;
var toc = d.getElementById('toc');
for (i=0; i<max; i++){
  var a = d.createElement('a');
  a.innerText = titles[i].innerText;
  a.setAttribute('href', titles[i].childNodes[1].getAttribute('href'));
  var li = d.createElement('li');
  toc.appendChild(li.appendChild(a));
}
