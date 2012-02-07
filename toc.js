var d = document;
var titles = d.getElementsByClassName('entry-title');
var max = titles.length;
var toc = d.getElementById('toc');
if (max <= 1){
  toc.parentNode.parentNode.setAttribute('style', 'display:none;');
} else {
  for (i=0; i<max; i++){
    // Add Header aka. separator
    var header = d.createTextNode('★');
    toc.appendChild(header);
    var a = d.createElement('a');
    // Add Post Title
    var post_title = titles[i];
    var url = post_title.getElementsByTagName('a')[0];
    a.innerText = post_title.innerText;
    a.setAttribute('href', url.getAttribute('href'));
    toc.appendChild(a);
  }
}
