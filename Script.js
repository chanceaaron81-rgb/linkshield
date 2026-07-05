async function check() {
  let url = document.getElementById("urlInput").value;
  let result = document.getElementById("result");

  if (!url) {
    result.innerHTML = "Aucun lien";
    return;
  }

  result.innerHTML = "🔎 Analyse en cours...";

  try {
    const response = await fetch("https://dacelien-server.onrender.com/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    result.innerHTML = data.message;

  } catch (error) {
    result.innerHTML = "⚠️ Erreur, réessaie plus tard";
  }
}
