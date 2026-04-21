// ===== 🔐 OBFUSCATION PROTECTION START =====
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};
while(c--){if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}
return p}('0.1("Protected Mode Active");',2,2,'console|log'.split('|'),0,{}))
// ===== 🔐 OBFUSCATION PROTECTION END =====


// 🔐 THEME ENGINE (Persisted)
(function(){
  const t = localStorage.getItem("fh_theme");
  if(t === "dark") document.documentElement.classList.add("dark");
})();

// THEME ENGINE
(function() {
    const saved = localStorage.getItem("fh_theme") || "dark";
    if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("fh_theme", isDark ? "dark" : "light");
    renderGlobalUI();
}

// LOAD API DATA
async function loadData() {
    try {
        const res = await fetch("api.json");
        if (!res.ok) throw new Error();
        return await res.json();
    } catch (e) {
        console.error("Gagal memuat api.json");
        return null;
    }
}

// RENDER NAV & FOOTER
function renderNav() {
    const isDark = document.documentElement.classList.contains("dark");
    return `
    <div class="nav-fixed">
        <div class="nav-content">
            <a href="index.html" class="font-black text-lg tracking-tighter">💎 FIREHORSE</a>
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

function renderGlobalUI() {
    const n = document.getElementById("nav");
    const f = document.getElementById("footer");
    if(n) n.innerHTML = renderNav();
    if(f) f.innerHTML = renderFooter();
}
