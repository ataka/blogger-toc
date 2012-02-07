var d = document;
var titles = d.getElementsByClassName('entry-title');
var max = titles.length;
var toc = d.getElementById('toc');
for (i=0; i<max; i++){
  var a = d.createElement('a');
  var post_title = titles[i];
  var url = post_title.getElementsByTagName('a')[0];
  a.innerText = post_title.innerText;
  a.setAttribute('href', url.getAttribute('href'));
  var li = d.createElement('li');
  toc.appendChild(li.appendChild(a));
}
