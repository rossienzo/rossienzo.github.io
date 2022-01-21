window.onload = function () { 

    // Menu
    const bars = document.getElementById("bars") ? document.getElementById("bars") : '';
    const menu = document.getElementById("menu") ? document.getElementById("menu") : '';
    const close = document.getElementById("close") ? document.getElementById("close") : '';

    
    bars.addEventListener('click', e => {
        showMenu(menu);
        e.preventDefault();
    });

    close.addEventListener('click', e => {
        showMenu(menu);
        e.preventDefault();
    });

    // show menu navigation
    function showMenu(e) {
        if(e.style.display == '' || e.style.display == 'none')
            e.style.display = 'block';
        else
            e.style.display = 'none';
    }

}