// THEME ENGINE
(function() {
    const saved = localStorage.getItem("fh_theme") || "dark";
    if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("fh_theme", isDark ? "dark" : "light");
    renderUI();
}

async function loadData() {
    try {
        const res = await fetch("api.json");
        return await res.json();
    } catch (e) {
        console.error("Gagal memuat data API");
        return null;
    }
}

function renderNav() {
    const isDark = document.documentElement.classList.contains("dark");
    return `
    <div class="nav-fixed">
        <div class="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            <a href="index.html" class="font-black text-lg tracking-tighter">🔥 FIREHORSE</a>
            <div class="flex items-center gap-3 sm:gap-6">
                <div class="flex gap-3 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    <a href="index.html">Home</a>
                    <a href="support.html">Support</a>
                    <a href="privacy.html">Privacy</a>
                    <a href="terms.html">Terms</a>
                </div>
                <button onclick="toggleTheme()" class="p-2 rounded-lg bg-indigo-500/10">
                    ${isDark ? '☀️' : '🌙'}
                </button>
            </div>
        </div>
    </div>`;
}

function renderFooter() {
    return `<footer class="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
        © 2026 FireHorse.id — Premium Digital Service
    </footer>`;
}

function renderUI() {
    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");
    if(nav) nav.innerHTML = renderNav();
    if(footer) footer.innerHTML = renderFooter();
}
