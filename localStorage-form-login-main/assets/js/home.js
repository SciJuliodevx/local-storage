const btnlogout = document.getElementById("#btnLogout");

const logout = () => {
 localStorage.removeItem("status")
window.location.href = "../../index.html"}

btnLogout.addEventListener("click", logout);
