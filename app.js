Fancybox.bind("[data-fancybox]", {
});



// matte title

const fadeup = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("fade-up-show");
        }else{
            entry.target.classList.remove("fade-up-show");

        }
    });
});   

const fadeuphidden = document.querySelectorAll(".fade-up-hidden");
fadeuphidden.forEach((el)=>fadeup.observe(el));

// fade left

const fadeLeft = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("fade-left-show");
        }else{
            entry.target.classList.remove("fade-left-show");

        }
    });
});   

const fadelefthidden = document.querySelectorAll(".fade-left-hidden");
fadelefthidden.forEach((el)=>fadeLeft.observe(el));

// fade right

const faderight = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("fade-right-show");
        }else{
            entry.target.classList.remove("fade-right-show");

        }
    });
});   

const faderighthidden = document.querySelectorAll(".fade-right-hidden");
faderighthidden.forEach((el)=>faderight.observe(el));


// Fade down

const fadedown = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("fade-down-show");
        }else{
            entry.target.classList.remove("fade-down-show");

        }
    });
});   

const fadedownhidden = document.querySelectorAll(".fade-down-hidden");
fadedownhidden.forEach((el)=>fadedown.observe(el));


// Scale in

const scalein = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("scale-in-show");
        }else{
            entry.target.classList.remove("scale-in-show");

        }
    });
});   

const scaleinhidden = document.querySelectorAll(".scale-in-hidden");
scaleinhidden.forEach((el)=>scalein.observe(el));


// diagonalFlip 
const diagonalFlip  = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("diagonal-Flip-show");
        }else{
            entry.target.classList.remove("diagonal-Flip-show");

        }
    });
});   

const diagonalFliphidden = document.querySelectorAll(".diagonal-Flip-hidden");
diagonalFliphidden.forEach((el)=>diagonalFlip.observe(el));


// Flip left
const flipLeft  = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("flip-left-show");
        }else{
            entry.target.classList.remove("flip-left-show");

        }
    });
});   

const flipLefthidden = document.querySelectorAll(".flip-left-hidden");
flipLefthidden.forEach((el)=>flipLeft.observe(el));



window.addEventListener('scroll', function() {
    // Calculate the scroll progress
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100; 

    console.log(scrollTop + windowHeight + "" + documentHeight)


    console.log(scrollProgress)


    if(scrollProgress >= 10){
        document.querySelector(".move-top").classList.add('move-top-show');
    }else{document.querySelector(".move-top").classList.remove('move-top-show');}
    
    var path = document.querySelector('.pxl-scroll-progress-circle path');

    var style = window.getComputedStyle(path);

    
    var pathLength = path.getTotalLength();
    var progressScrollDash = pathLength - (scrollProgress / 100) * pathLength;

   
    path.style.strokeDashoffset = progressScrollDash;
});






window.onload = function() {
    document.getElementById("form").reset();
};

window.addEventListener("load", ()=>{
    let perloader = document.querySelector('.preloader');
    let innerloader = document.querySelector('.innerloader');
    let percentage = document.querySelector('.percentage');

    let load = 0;
    let interval = setInterval(frame, 10);

    function frame() {
        if (load >= 100) {
            
            perloader.style.display = 'none';
        } else {
            load++;
            percentage.innerText = load + '%';
            innerloader.style.width = load + "%";
        }
    }
})