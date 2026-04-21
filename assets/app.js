async function loadData() {
  const res = await fetch("data/data.json");
  const data = await res.json();

  document.getElementById("appName").innerText = data.app_details.name;

  // Features
  const featureList = document.getElementById("features");
  data.app_details.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featureList.appendChild(li);
  });

  document.getElementById("specs").innerText = data.app_details.specs;
  document.getElementById("devices").innerText = data.app_details.devices;
  document.getElementById("tutorial").innerText = data.app_details.tutorial;

  // Playstore
  document.getElementById("playBtn").href = data.app_details.playstore_url;

  // QR Barcode
  document.getElementById("qr").src =
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data.app_details.playstore_url}`;

  // FAQ
  const faqBox = document.getElementById("faq");
  data.faq.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button class="w-full text-left font-bold">${item.q}</button>
      <p class="hidden">${item.a}</p>
    `;
    div.querySelector("button").onclick = () => {
      div.querySelector("p").classList.toggle("hidden");
    };
    faqBox.appendChild(div);
  });

  // Social
  document.getElementById("wa").href = data.support.whatsapp;
  document.getElementById("tg").href = data.support.telegram;
  document.getElementById("yt").href = data.support.youtube;
}

loadData();
