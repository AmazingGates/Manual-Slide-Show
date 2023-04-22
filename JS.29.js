const nextEl = document.querySelector(".next")
const preEl = document.querySelector(".pre")
const imageContainerEl = document.querySelector(".image-container")
const imgsEl = document.querySelectorAll("img")

let currentImg = 1

nextEl.addEventListener("click", ()=> {
    currentImg++
    updateImg()
})

preEl.addEventListener("click", ()=> {
    currentImg--
    updateImg()

})

function updateImg() {
    if (currentImg > imgsEl.length) {
        currentImg = 1
    }else if (currentImg < 1) {
        currentImg = imgsEl.length
    }
    imageContainerEl.style.transform = `translateX(-${
        (currentImg - 1) * 236
    }px)`
    }
