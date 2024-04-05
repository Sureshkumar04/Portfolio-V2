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
