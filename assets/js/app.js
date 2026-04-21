// 🔥 NAV COMPONENT (Ultra Modern Glassmorphism)
function renderNav() {
  const navElement = document.getElementById("nav");
  if (!navElement) return;

  navElement.innerHTML = `
  <nav class="fixed top-0 w-full z-50 glass border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-2 group cursor-pointer" onclick="window.location.href='index.html'">
        <div class="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">🔥</div>
        <h1 class="font-extrabold text-xl tracking-tighter text-slate-900 dark:text-white">
          FireHorse<span class="text-indigo-500">.id</span>
        </h1>
      </div>

      <div class="hidden md:flex gap-8 items-center font-semibold text-sm tracking-wide">
        <a href="index.html" class="nav-link hover:text-indigo-500 transition-colors">HOME</a>
        <a href="support.html" class="nav-link hover:text-indigo-500 transition-colors">SUPPORT</a>
        <a href="privacy.html" class="nav-link hover:text-indigo-500 transition-colors">PRIVACY</a>
        <a href="terms.html" class="nav-link hover:text-indigo-500 transition-colors">TERMS</a>
        <button onclick="toggleTheme()" class="ml-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-all">
          <span class="dark:hidden">🌙</span><span class="hidden dark:inline">☀️</span>
        </button>
      </div>

      <div class="md:hidden flex items-center gap-4">
         <button onclick="toggleTheme()" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">🌓</button>
         <span class="text-2xl">☰</span>
      </div>
    </div>
  </nav>
  <div class="h-24"></div>`;
}

function renderNav() {
  return `
  <nav class="nav flex justify-between items-center shadow-lg">
    <div class="flex items-center gap-2">
      <span class="text-2xl">🔥</span>
      <h1 class="font-extrabold text-lg tracking-tighter">FireHorse<span class="text-indigo-500">.id</span></h1>
    </div>
    
    <div class="flex gap-4 md:gap-8 items-center font-semibold text-xs md:text-sm uppercase tracking-widest">
      <a href="index.html" class="hover:text-indigo-400 transition">Home</a>
      <a href="support.html" class="hover:text-indigo-400 transition">Support</a>
      <a href="privacy.html" class="hover:text-indigo-400 transition">Privacy</a>
      <button onclick="toggleTheme()" class="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">🌓</button>
    </div>
  </nav>`;
}
// THEME ENGINE
(function(){
  const theme = localStorage.getItem("fh_theme") || "dark";
  if(theme === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme(){
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("fh_theme", isDark ? "dark" : "light");
}

// FETCH DATA
async function loadData(){
  try {
    const res = await fetch("api.json");
    return await res.json();
  } catch (e) {
    console.error("Gagal memuat data API", e);
  }
}

// COMPONENTS
function renderNav(){
  return `
  <nav class="nav">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-2 cursor-pointer" onclick="window.location.href='index.html'">
        <span class="text-2xl">🔥</span>
        <h1 class="font-black text-xl tracking-tighter">FireHorse<span class="text-indigo-500">.id</span></h1>
      </div>
      <div class="hidden md:flex gap-8 items-center font-bold text-xs tracking-widest uppercase">
        <a href="index.html" class="hover:text-indigo-500 transition">Home</a>
        <a href="support.html" class="hover:text-indigo-500 transition">Support</a>
        <a href="privacy.html" class="hover:text-indigo-500 transition">Privacy</a>
        <a href="terms.html" class="hover:text-indigo-500 transition">Terms</a>
        <button onclick="toggleTheme()" class="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">🌓</button>
      </div>
      <div class="md:hidden" onclick="toggleTheme()">🌓</div>
    </div>
  </nav>`;
}

function renderFooter(){
  return `
  <footer class="py-12 border-t border-white/5 text-center opacity-50 text-sm">
    <p>© 2026 FireHorse.id — All Rights Reserved</p>
  </footer>`;
}

