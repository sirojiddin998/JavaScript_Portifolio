let tabl = document.querySelectorAll(".tab_toogls");
let contents = document.querySelectorAll(".tabs_content");

tabl.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active')
        })
        tabl.forEach((tab) => {
            tab.classList.remove('is-active')
        })
        contents[index].classList.add('is-active')
        tabl[index].classList.add('is-active')
    })
})    