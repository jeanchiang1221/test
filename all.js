
//下拉選單按鈕監聽
const showMenu=document.querySelector('.show-menu');
const headerMenu=document.querySelector('.header-menu-list');


showMenu.addEventListener('click',function(e){
    
if(headerMenu.className=='header-menu-list'){
    headerMenu.setAttribute("class",'menu-show');
}
else if(headerMenu.className=='menu-show'){
    headerMenu.setAttribute("class",'header-menu-list');
}
	
;}
)


//寬度監聽，如果超過768，原本打開的下拉menu就會消失
function reportWindowSize() {
    if(window.innerWidth>=768){
        headerMenu.setAttribute("class",'header-menu-list');
    }

}

window.addEventListener('resize', reportWindowSize);
