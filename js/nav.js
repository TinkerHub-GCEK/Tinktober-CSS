const resMenu = ()=>{
    let nav = document.getElementById('mob-nav');
    if(nav.className === 'hide'){
        nav.className += 'show';
    }
    else{
        nav.className = 'hide';
    }
}