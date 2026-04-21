// 🔐 THEME ENGINE
(function() {
    const saved = localStorage.getItem("fh_theme") || "dark";
    if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("fh_theme", isDark ? "dark" : "light");
    // Refresh Nav & UI agar warna ikon/teks update seketika
    const nav = document.getElementById("nav");
    if(nav) nav.innerHTML = renderNav();
}

// 🧠 LOAD DATA (Fix Path: Pastikan api.json di root atau folder data)
async function loadData() {
    try {
        // Mencoba mengambil api.json di root folder
        const res = await fetch("api.json"); 
        if (!res.ok) throw new Error("Data Gagal Dimuat");
        return await res.json();
    } catch (e) {
        console.error("API Error:", e);
        return null;
    }
}

// 🔥 NAV COMPONENT (Premium & Full Links)
function renderNav() {
    const isDark = document.documentElement.classList.contains("dark");
    return `
    <nav class="nav-fixed">
        <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2">
                <span class="text-xl">💎</span>
                <span class="font-black text-lg tracking-tighter uppercase">FireHorse<span class="text-indigo-500">.id</span></span>
            </a>
            
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-3 md:gap-6 text-[10px] md:text-xs font-black uppercase tracking-widest opacity-70">
                    <a href="index.html" class="hover:text-indigo-500 transition">Home</a>
                    <a href="support.html" class="hover:text-indigo-500 transition">Support</a>
                    <a href="privacy.html" class="hover:text-indigo-500 transition">Privacy</a>
                    <a href="terms.html" class="hover:text-indigo-500 transition">Terms</a>
                </div>
                
                <button onclick="toggleTheme()" class="p-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 transition-all ml-2">
                    <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${isDark 
                          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>' 
                          : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>'}
                    </svg>
                </button>
            </div>
        </div>
    </nav>`;
}

function renderFooter() {
    return `
    <footer class="py-12 border-t border-indigo-500/10 text-center">
        <p class="text-[10px] font-bold opacity-30 tracking-[0.2em] uppercase">© 2026 FireHorse.id — Premium Digital Experience</p>
    </footer>`;
}
