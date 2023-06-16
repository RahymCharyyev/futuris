function getCurrentYear() {
  let date = new Date();
  return date.getFullYear();
}
function updateFooterText() {
  let footer = document.getElementById("change__year");
  let currentYear = getCurrentYear();
  footer.innerHTML = "© Futuris FZE, " + currentYear;
}
window.onload = updateFooterText;
