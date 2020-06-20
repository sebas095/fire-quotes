adminForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const email = document.getElementById("admin-email").value;
  const addAdminRole = func.httpsCallable("addAdminRole");

  addAdminRole({ email }).then(console.log).catch(console.log);
  adminForm.reset();
});
