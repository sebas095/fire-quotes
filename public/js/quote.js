createForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  await db.collection("quotes").add({
    author: createForm["author"].value,
    message: createForm["message"].value,
  });

  const modal = document.getElementById("modal-create");
  M.Modal.getInstance(modal).close();
  createForm.reset();
});
