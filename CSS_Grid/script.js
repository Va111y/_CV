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

const btnLoad = document.querySelector('.buttonLoad');
const divload = document.querySelector('.load-project');


class apiGitHub {
    constructor(token, user) {
        this.token = token;
        this.user = user;
        this.urlApi = 'https://api.github.com';
    }

    async getRepos () {
        const response = await fetch(`${this.urlApi}/users/${this.user}/repos`, {
            headers: {
                Authorization: `token ${this.token}`
        }
    });
    const data = await response.json();
    return data;
};
};

function newElement (repo) {
    const oneRepo = document.createElement('div');

    const link = document.createElement('a');
    link.textContent = repo.full_name;
    link.setAttribute('href', repo.html_url);

    oneRepo.appendChild(link);

    if(repo.description) {
        const desc = document.createElement('p');
        desc.textContent = repo.description;

        oneRepo.appendChild(desc);
    };

    divload.appendChild(oneRepo);
}

btnLoad.addEventListener('click', async function() {
    const api = new apiGitHub('TOKEN', 'va111y');
    const repos = await api.getRepos();

    repos.forEach(repo => {
        newElement(repo)
    });
});
