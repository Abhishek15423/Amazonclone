let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let img_items = document.getElementsByClassName("allimg");
let img_items2 = document.querySelectorAll(".img-item");
let shop = document.querySelectorAll(".common-link");
let i = 1;


// Today's deal attribute
let td_btn1 = document.getElementById("td-btn1");
let td_btn2 = document.getElementById("td-btn2");
let td_slider = document.querySelectorAll(".td-card");
let td_slider1 = document.getElementsByClassName("td-imgslider");
let j = 0;

//Today's deal2 attribute
let td2_btn1 = document.getElementById("td2-btn1");
let td2_btn2 = document.getElementById("td2-btn2");
let td2_slider = document.querySelectorAll(".td2-img");



btn1.addEventListener("click", () => {
    if (i === 1) {
        i = -4
    }

    if (i < img_items2.length) {
        img_items2.forEach(img => {
            img.style.transform = `translateX(${i * 100}%)`
            img.style.transition = '0.8s'
        });
    }
    console.log(i)
    i++
});

btn2.addEventListener("click", () => {
    if (i < img_items2.length) {
        img_items2.forEach(img => {
            img.style.transform = `translateX(-${i * 100}%)`
            img.style.transition = '0.8s'
        });
    } else {
        i = 0
        img_items2.forEach(img => {
            img.style.transform = `translateX(-${i * 100}%)`
            img.style.transition = '0.8s'
        });
    }
    console.log(i)

    i++
});

shop.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.remove("unclick");
        element.classList.add("clicked");
    })
});


td_btn2.addEventListener("click", () => {
    if (j === 0) {
        j = 1
    }
    if (j < 7) {
        td_slider.forEach(img => {
            img.style.transform = `translateX(-${j * 105}%)`
            img.style.transition = '0.8s'
        });
        j++
    }
    console.log(j)

});

td_btn1.addEventListener("click", () => {
    if(j > 6){
        j = -j+2
    }
    if (j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6) {
        j = -j+2
    }
    if (j <= 0) {
        td_slider.forEach(img => {
            img.style.transform = `translateX(${j * 105}%)`
            img.style.transition = '0.8s'
        });
    }
    console.log(j)
    j++

});

td2_btn1.addEventListener("click", () => {
    if(i === 6 || i === 5 || i === 4 || i === 3 || i === 2){
        i = -i+2
    }
    if (i === 1) {
        i = -i+1
    }
    if(i <= 1){
        td2_slider.forEach(img => {
            img.style.transform = `translateX(${i * 147.4}%)`
            img.style.transition = '0.8s'
        });
        i++
        console.log(i)
    }
});

td2_btn2.addEventListener("click", () => {

    if(i <= 5){
        td2_slider.forEach(img => {
            img.style.transform = `translateX(-${i * 147.4}%)`
            img.style.transition = '0.8s'
        });
        i++
        console.log(i)
    }
});