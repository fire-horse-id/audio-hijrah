// THEME INITIALIZATION
(function() {
    const saved = localStorage.getItem("fh_theme") || "dark";
    if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("fh_theme", isDark ? "dark" : "light");
    updateThemeIcon();
}

function updateThemeIcon() {
    const btn = document.getElementById("theme-toggle");
    if(btn) btn.innerHTML = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
}

// GLOBAL UI RENDERER
function renderGlobalUI() {
    const navHTML = `
    <nav class="nav-fixed">
        <div class="nav-container">
            <a href="index.html" class="flex items-center gap-2 font-black tracking-tighter">
                <img src="https://img.icons8.com/color/48/diamond.png" class="w-6 h-6"> FIREHORSE
            </a>
            <div class="nav-links">
                <a href="index.html" class="nav-item">Home</a>
                <a href="support.html" class="nav-item">Support</a>
                <a href="privacy.html" class="nav-item">Privacy</a>
                <a href="terms.html" class="nav-item">Terms</a>
            </div>
            <button onclick="toggleTheme()" id="theme-toggle" class="text-lg"></button>
        </div>
    </nav>`;
    
    const footerHTML = `
    <footer class="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
        © 2026 FireHorse.id — Premium Digital Service
    </footer>`;

    const navEl = document.getElementById("nav-root");
    const footEl = document.getElementById("footer-root");
    if(navEl) navEl.innerHTML = navHTML;
    if(footEl) footEl.innerHTML = footerHTML;

    // Auto-Set Active Badge based on filename
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item").forEach(el => {
        if(el.getAttribute("href") === path) el.classList.add("active");
    });
    updateThemeIcon();
}
