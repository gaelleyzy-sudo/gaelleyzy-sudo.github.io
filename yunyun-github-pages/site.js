
const email = "1508626343@qq.com";
const wechat = "18890164566";
async function copy(value, button) {
  try { await navigator.clipboard.writeText(value); }
  catch {
    const input = document.createElement("textarea");
    input.value = value; document.body.appendChild(input); input.select();
    document.execCommand("copy"); input.remove();
  }
  const old = button.textContent; button.textContent = "已复制 ✓";
  setTimeout(() => button.textContent = old, 1800);
}
document.querySelectorAll(".contact-card-email button").forEach(button => button.addEventListener("click", () => copy(email, button)));
document.querySelectorAll(".contact-card-wechat button").forEach(button => button.addEventListener("click", () => copy(wechat, button)));
