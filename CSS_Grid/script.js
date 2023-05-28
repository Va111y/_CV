/*photo*/

const photo = document.querySelector(".image-main-photo");

function makePhotoBigger () {
    this.classList.add("clickPhoto-bigger");
    this.removeEventListener("click", makePhotoBigger);
    this.addEventListener("click", makePhotoSmaller)
}

function makePhotoSmaller () {
    this.classList.remove("clickPhoto-bigger");
    this.classList.add("clickPhoto-smaller");
    setTimeout (() => {
        this.classList.remove("clickPhoto-smaller");
        this.removeEventListener("click", makePhotoSmaller);
        this.addEventListener("click", makePhotoBigger);
    }, 2000);
    makePhotoBigger();
}

photo.addEventListener("click", makePhotoBigger)

/*scroll*/

const aNav = document.getElementById('A-nav');
const sectionA = document.getElementById('A-section');

document.addEventListener('keydown', (event) => {
    if(event.key === 'a' || event.key === 'A') {
        const section = sectionA.getBoundingClientRect();
        window.scrollTo ({
            top: section.top,
            left: section.left,
            behavior: 'smooth'
        });
    }
})

const bNav = document.getElementById('B-nav');
const sectionB = document.getElementById('B-section');

document.addEventListener('keydown', (event) => {
    if(event.key === 'b' || event.key === 'B') {
        const section = sectionB.getBoundingClientRect();
        window.scrollTo ({
            top: section.top,
            left: section.left,
            behavior: 'smooth'
        });
    }
});

const cNav = document.getElementById('C-nav');
const sectionC = document.getElementById('C-section');

document.addEventListener('keydown', (event) => {
    if(event.key === 'c' || event.key === 'C') {
        const section = sectionC.getBoundingClientRect();
        window.scrollTo ({
            top: section.top,
            left: section.left,
            behavior: 'smooth'
        });
    }
});

const dNav = document.getElementById('D-nav');
const sectionD = document.getElementById('D-section');

document.addEventListener('keydown', (event) => {
    if(event.key === 'd' || event.key === 'D') {
        const section = sectionD.getBoundingClientRect();
        window.scrollTo ({
            top: section.top,
            left: section.left,
            behavior: 'smooth'
        });
    }
})