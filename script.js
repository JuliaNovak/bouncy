menu.onclick = function toggle() {
    let x = document.getElementById('navigation');

    if (x.className === 'navigation') {
        x.className += ' responsive';
    } else {
        x.className = 'navigation'
    }
}