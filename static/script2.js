document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const typingText = document.getElementById("typing-text");
    const phrase = "Welcome to CryptGuard";
    let index = 0; // Declare index here

    // Toggle Theme Mode
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });

    let pyramidContainer = document.querySelector(".pyramid-container");

    function createPyramids() {
        for (let i = 0; i < 15; i++) {
            let pyramid = document.createElement("div");
            pyramid.classList.add("pyramid");
    
            let edges = ["edge-1", "edge-2", "edge-3", "edge-4"];
            edges.forEach(edge => {
                let edgeDiv = document.createElement("div");
                edgeDiv.classList.add("edge", edge);
                pyramid.appendChild(edgeDiv);
            });
    
            let leftPos = Math.random() * window.innerWidth;
            let topPos = Math.random() * window.innerHeight;
            let speed = Math.random() * 4 + 3;
    
            pyramid.style.left = `${leftPos}px`;
            pyramid.style.top = `${topPos}px`;
            pyramid.style.animationDuration = `${speed}s`;
    
            pyramidContainer.appendChild(pyramid);
        }
    }
    
    createPyramids();
    

    // Typing effect
    function typeEffect() {
        if (index < phrase.length) {
            typingText.textContent += phrase[index];
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    if (typingText) {
        typeEffect(); // Only start if the element exists
    }
});
