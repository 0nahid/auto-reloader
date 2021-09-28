function loadVisitor() {
    fetch('https://visitor-badge.glitch.me/badge?page_id=0nahid.visitor-badge')
}
loadVisitor();
setInterval(() => {
    loadVisitor();
}, 10);
