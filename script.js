const linklist = Array.from(document.querySelectorAll(".linkli"));
linklist.forEach(liElement => {
    liElement.addEventListener("mouseenter", (e) => {
        let description = liElement.querySelector(".description");
        toggleOn(description);
    });
    liElement.addEventListener("mouseleave", (e) => {
        let description = liElement.querySelector(".description");
        toggleOff(description);
    });
    liElement.addEventListener("click", (e) => {
        // e.preventDefault();
        let link = liElement.children[0].getAttribute("href");
        window.open(link);
    });
});

function toggleOff(description) {
    if(description.classList.contains("visibleDescription")) {
        description.classList.toggle("visibleDescription");
    }
}

function toggleOn(description) {
    if(!description.classList.contains("visibleDescription")) {
        description.classList.toggle("visibleDescription");
    }
}