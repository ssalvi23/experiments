document.addEventListener("DOMContentLoaded", function() {
    const gEle: HTMLElement | null = document.getElementById("greeting");
    if (gEle) {
        gEle.textContent = "Hello, TypeScript!";
    }
});

