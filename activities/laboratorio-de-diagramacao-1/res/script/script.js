window.onload = function () { 

    // Menu
    const toggle = document.getElementById("toggle") ? document.getElementById("toggle") : '';
    const menu = document.getElementById("menu") ? document.getElementById("menu") : '';
    
    toggle.addEventListener('click', e => {
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