function locomotive() {
    const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
locomotive()






// document.querySelector(".slide").addEventListener("mousemove", function (elem) {
//     var dim = document.querySelector(".slide").getBoundingClientRect();
//     document.querySelector(".slide img:nth-child(2)").style.clipPath = `circle(10% at ${elem.clientX-dim.left}px  ${elem.clientY-dim.top}px)`
// })
    
// document.querySelector(".slide").addEventListener("mouseleave", function (elem) {
//     var dim = document.querySelector(".slide").getBoundingClientRect();
//     document.querySelector(".slide img:nth-child(2)").style.clipPath = `circle(0% at ${elem.clientX-dim.left}px  ${elem.clientY-dim.top}px)`
// })
function slide() {
    document.querySelectorAll(".slide").forEach(function (slide) {
        slide.addEventListener("mousemove", function (dets) {
            var dim = slide.getBoundingClientRect();
            this.children[1].style.clipPath = `circle(10% at ${dets.clientX - dim.left}px  ${dets.clientY - dim.top}px)`;
        })
    })
}
document.querySelectorAll(".slide").forEach(function (slide) {
    slide.addEventListener("mouseout", function (dets) {
        var dim = slide.getBoundingClientRect();
        this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px  ${dets.clientY - dim.top}px)`;
    })
})
slide()

function skew_maker() {
    var dim1 = document.querySelector(".slide").getBoundingClientRect();
    var prev = dim1.left;


    document.querySelector("#project").addEventListener("scroll", function (elmm) {
        var dim2 = document.querySelector(".slide").getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".slide").forEach(function (elm) {
            elm.style.transform = `skew(${diff * .1}deg)`; 
        })
        prev = dim2.left;
        
    })
}
skew_maker()
    
