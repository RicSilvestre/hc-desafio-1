const form = document.querySelector("#form")


form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  let data = [nome.value, email.value];

  localStorage.setItem("lead", JSON.stringify(data));

})