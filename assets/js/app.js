(function(){
  const t = localStorage.getItem("fh_theme") || "dark";
  if(t === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme(){
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("fh_theme", isDark ? "dark" : "light");
}

async function loadData(){
  const res = await fetch("api.json");
  return await res.json();
}

function renderNav(){
  return `
  <nav class="nav">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="index.html" class="flex items-center gap-2">
        <span class="text-2xl">🔥</span>
        <h1 class="font-black text-xl tracking-tighter uppercase">FireHorse<span class="text-indigo-500">.id</span></h1>
      </a>
      <div class="hidden md:flex gap-8 items-center font-bold text-xs tracking-widest uppercase">
        <a href="index.html">Home</a>
        <a href="support.html">Support</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <button onclick="toggleTheme()" class="p-2 bg-indigo-500/10 rounded-xl">🌓</button>
      </div>
      <div class="md:hidden" onclick="toggleTheme()">🌓</div>
    </div>
  </nav>`;
}

function renderFooter(){
  return `
  <footer class="py-10 text-center opacity-50 text-sm font-medium">
    © 2026 FireHorse.id — All Rights Reserved
  </footer>`;
}
