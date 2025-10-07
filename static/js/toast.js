function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `
    px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
    transition-all duration-300 transform translate-x-0
    ${type === "success" ? "bg-green-600 text-white" : ""}
    ${type === "error" ? "bg-red-600 text-white" : ""}
    ${type === "info" ? "bg-cyan-600 text-white" : ""}
  `;
  toast.innerHTML = `
    ${type === "success" ? "✅" : type === "error" ? "❌" : "i"}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Animasi muncul
  toast.classList.add("opacity-0", "translate-x-5");
  setTimeout(() => {
    toast.classList.remove("opacity-0", "translate-x-5");
  }, 50);

  // Auto-hilang setelah 3 detik
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-x-5");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}