emailjs.init("bxrW6kS67mmlitjPy"); // ganti dengan Public Key Anda

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  emailjs
    .send("service_4s009oq", "template_m132nie", {
      from_name: name,
      reply_to: email,
      message: message,
    })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Pesan Terkirim! MOHON JANGAN SPAM!!!",
        text: "Pesan Anda telah berhasil dikirim. MOHON JANGAN SPAM!!!. Kami akan segera menghubungi Anda.",
      });
      e.target.reset(); 
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim Pesan",
        text: "Silakan coba lagi nanti.",
      });
      console.error("Error:", error);
    });
});
