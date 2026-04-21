// 🔐 THEME ENGINE
(function() {
    const saved = localStorage.getItem("fh_theme") || "dark";
    if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("fh_theme", isDark ? "dark" : "light");
    // Refresh Nav untuk update icon jika diperlukan
    document.getElementById("nav").innerHTML = renderNav();
}

// 🧠 API LOADER
async function loadData() {
    try {
        const res = await fetch("api.json");
        return await res.json();
    } catch (e) {
        console.error("Gagal load data", e);
    }
}

// 🔥 NAV COMPONENT (REUSABLE)
function renderNav() {
    return `
    <nav class="nav">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
            <a href="index.html" class="flex items-center gap-2">
                <span class="text-2xl">💎</span>
                <span class="font-black text-xl tracking-tighter uppercase">FireHorse<span class="text-indigo-500">.id</span></span>
            </a>
            
            <div class="flex items-center gap-4 md:gap-8">
                <div class="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest opacity-70">
                    <a href="index.html" class="hover:text-indigo-500 transition">Home</a>
                    <a href="support.html" class="hover:text-indigo-500 transition">Support</a>
                    <a href="privacy.html" class="hover:text-indigo-500 transition">Privacy</a>
                </div>
                <button onclick="toggleTheme()" class="p-2.5 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 transition-all">
                    <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>`;
}

// 🔥 FOOTER
function renderFooter() {
    return `
    <footer class="py-12 border-t border-indigo-500/10 text-center">
        <p class="text-xs font-bold opacity-30 tracking-[0.2em] uppercase">© 2026 FireHorse.id — Premium Quality</p>
    </footer>`;
}
