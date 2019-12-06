function IniciarScriptHamburguesa(){

    const showMenu = (toggleId,navId,sidebar) =>{
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId)
              mainSidebar = document.getElementById(sidebar);
              
        if(toggle && nav && mainSidebar){
            toggle.addEventListener('click', () =>{
                toggle.classList.toggle("is-active");
                nav.classList.toggle('show');
                mainSidebar.classList.toggle('display-block');
            })
        }
    
    }
    
    showMenu('hamburger','main-nav','main-sidebar');   

}

