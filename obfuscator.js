// Anti Inspect
document.onkeydown = function(e) {
  if (e.key === "F12") return false;
  if (e.ctrlKey && e.shiftKey && e.key === "I") return false;
};

// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Anti console
setInterval(() => {
  const devtools = /./;
  devtools.toString = function() {
    document.body.innerHTML = "ٱلْحِمَايَةُ مُفَعَّلَةٌ";
  };
  console.log(devtools);
}, 1000);

// Arabic Obfuscation Mapping
function arabicObfuscate(str) {
  return btoa(str)
    .split("")
    .map(c => String.fromCharCode(0x0600 + c.charCodeAt(0)))
    .join("");
}

// Example usage
const hiddenCode = arabicObfuscate("<div>FireHorse</div>");
console.log(hiddenCode);