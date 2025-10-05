// === SCRIPT PRINCIPAL BANQUE APP ===

// --- LOGIN ---
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (username === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
      }

      // Simulation de connexion réussie
      localStorage.setItem("username", username);
      window.location.href = "dashboard.html";
    });
  }

  // --- DASHBOARD ---
  const userDisplay = document.querySelector("#userDisplay");
  const balanceDisplay = document.querySelector("#balance");
  const transactionList = document.querySelector("#transactions");
  const logoutBtn = document.querySelector("#logoutBtn");

  if (userDisplay && balanceDisplay && transactionList) {
    const username = localStorage.getItem("username");
    userDisplay.textContent = username ? username : "Utilisateur";

    // Solde initial simulé
    let balance = 125000;
    balanceDisplay.textContent = balance.toLocaleString("fr-FR") + " CFA";

    // Transactions simulées
    const transactions = [
      { label: "Transfert vers Ali", amount: -5000 },
      { label: "Dépôt mobile money", amount: 20000 },
      { label: "Achat en ligne", amount: -3500 },
      { label: "Salaire", amount: 120000 },
    ];

    transactions.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = `${t.label} : ${t.amount > 0 ? "+" : ""}${t.amount} CFA`;
      li.style.color = t.amount > 0 ? "green" : "red";
      transactionList.appendChild(li);
    });
  }

  // --- DÉCONNEXION ---
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "login.html";
    });
  }
});
