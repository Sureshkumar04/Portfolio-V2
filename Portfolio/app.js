let hamburger = document.querySelector('ul');

function hamShow(){
    hamburger.classList.toggle('hamShow');
    function xMark(){
        let crossMark = document.querySelector('nav button i')

        if(crossMark.classList.contains('fa-bars')){
            crossMark.classList.remove('fa-bars');            
            crossMark.classList.add('fa-xmark');            
        }

        else{
            crossMark.classList.remove('fa-xmark');
            crossMark.classList.add('fa-bars');
        }
    }
    return xMark();
}




