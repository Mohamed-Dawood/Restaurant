let lis = document.querySelectorAll(".head ul li");
let dives = document.querySelectorAll(".content div");

lis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", mangeDiv)
})

function removeActive() {
    lis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active")
    })
}

function mangeDiv() {
    dives.forEach((div) => {
        div.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "flex"
    })
}