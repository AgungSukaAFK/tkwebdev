async function sendEmail({ fromEmail, fromName, message }) {
  const apiUrl = "https://email-rest-api.vercel.app/sendemail";

  const emailData = {
    fromEmail,
    fromName,
    message,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const form = document.querySelector("#formEmail");
const loading = document.querySelector(".loading");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  loading.classList.toggle("hidden");
  let [name, email, message] = [
    document.querySelector("#name").value,
    document.querySelector("#email").value,
    document.querySelector("#message").value,
  ];
  if (name && email && message) {
    await sendEmail({
      fromEmail: email,
      fromName: name,
      message: message,
    });
    console.log("triggered");
    alert("Email terkirim :)");
    loading.classList.toggle("hidden");
  }
});

// List gambar
// const arrGambar = [
//     {
//         url:
//     }
// ]
