window.onload = function() {
    const hash = window.location.hash || "#fried";
    showContent(hash);
};

function showContent(id) {
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => content.classList.remove("active"));

    const selectedContent = document.querySelector(id);
    if(selectedContent) {
        selectedContent.classList.add("active");
    }
}