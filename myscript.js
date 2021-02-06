const triggers = document.querySekectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
