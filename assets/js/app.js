// 🔐 THEME ENGINE
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

// 📡 DATA LOADER
async function fetchAppData() {
    try {
        const res = await fetch("api.json");
        return await res.json();
    } catch (e) {
        console.error("Gagal memuat API");
        return null;
    }
}

// 🛠 GLOBAL UI RENDERER
function renderGlobalUI() {
    const navHTML = `
    <nav class="nav-fixed">
        <div class="nav-container">
            <a href="index.html" class="font-extrabold tracking-tighter text-lg">FIREHORSE<span class="text-indigo-500">.ID</span></a>
            <div class="nav-links">
                <a href="index.html" class="nav-item">Home</a>
                <a href="support.html" class="nav-item">Support</a>
                <a href="privacy.html" class="nav-item">Privacy</a>
            </div>
            <button onclick="toggleTheme()" id="theme-toggle" class="p-2 text-xl"></button>
        </div>
    </nav>`;
    
    const footerHTML = `
    <footer class="py-12 text-center opacity-30 text-[10px] font-bold uppercase tracking-[0.3em]">
        © 2026 FireHorse.id — Premium Digital Experience
    </footer>`;

    const navEl = document.getElementById("nav-root");
    const footEl = document.getElementById("footer-root");
    if(navEl) navEl.innerHTML = navHTML;
    if(footEl) footEl.innerHTML = footerHTML;

    // Set Active Badge
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item").forEach(el => {
        if(el.getAttribute("href") === path) el.classList.add("active");
    });
    updateThemeIcon();
}
