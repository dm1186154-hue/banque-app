// script.js — validation simple et simulation de dashboard

document.addEventListener("DOMContentLoaded", () => {
  // --- LOGIN ---
  const loginForm = document.querySelector("#loginForm") || document.querySelector("form");
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  // Compte test
  const TEST_USER = "testuser";
  const TEST_PASS = "12345";

  if (loginForm && usernameInput && passwordInput) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        alert("Veuillez remplir tous les champs !");
        return;
      }

      // Vérification basique (simulation uniquement)
      if (username === TEST_USER && password === TEST_PASS) {
        alert("Connexion réussie — bienvenue " + username + " !");
        // Sauvegarde du nom pour le dashboard (simulation)
        localStorage.setItem("username", username);
        // Petite pause pour laisser l'utilisateur lire l'alerte
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 300);
      } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
        // Optionnel : vider le champ mot de passe pour resaisir
        passwordInput.value = "";
        passwordInput.focus();
      }
    });
  }

  // --- DASHBOARD ---
  const userDisplay = document.querySelector("#userDisplay");
  const balanceDisplay = document.querySelector("#balance");
  const transactionList = document.querySelector("#transactions");
  const logoutBtn = document.querySelector("#logoutBtn");

  if ((userDisplay || document.querySelector(".account-info")) && (balanceDisplay || transactionList)) {
    const username = localStorage.getItem("username") || "Utilisateur";

    // Si tu as un élément #userDisplay, on l'affiche
    if (userDisplay) userDisplay.textContent = username;

    // Solde initial simulé (en centimes ou unités selon toi)
    let balance = 125000; // ex : 125 000 CFA
    if (balanceDisplay) balanceDisplay.textContent = balance.toLocaleString("fr-FR") + " CFA";

    // Transactions simulées
    const transactions = [
      { date: "05/10/2025", label: "Transfert vers Ali", amount: -5000 },
      { date: "03/10/2025", label: "Dépôt mobile money", amount: 150000 },
      { date: "01/10/2025", label: "Recharge Internet", amount: -5000 },
    ];

    // Si #transactions existe, on remplit la liste
    if (transactionList) {
      transactionList.innerHTML = ""; // vide avant d'ajouter
      transactions.forEach((t) => {
        const li = document.createElement("li");
        const sign = t.amount > 0 ? "+" : "";
        li.textContent = `${t.date} — ${t.label} — ${sign}${t.amount.toLocaleString("fr-FR")} CFA`;
        li.style.color = t.amount > 0 ? "green" : "red";
        transactionList.appendChild(li);
      });
    }

    // Si tu utilises un tableau (table), tu peux aussi le remplir — exemple :
    const txTableBody = document.querySelector("#txTableBody");
    if (txTableBody) {
      txTableBody.innerHTML = "";
      transactions.forEach((t) => {
        const tr = document.createElement("tr");
        const tdDate = document.createElement("td");
        const tdLabel = document.createElement("td");
        const tdAmount = document.createElement("td");
        tdDate.textContent = t.date;
        tdLabel.textContent = t.label;
        tdAmount.textContent = (t.amount > 0 ? "+" : "") + t.amount.toLocaleString("fr-FR") + " CFA";
        tdAmount.style.color = t.amount > 0 ? "green" : "red";
        tr.appendChild(tdDate);
        tr.appendChild(tdLabel);
        tr.appendChild(tdAmount);
        txTableBody.appendChild(tr);
      });
    }
  }

  // --- DÉCONNEXION ---
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("username");
      alert("Vous êtes déconnecté.");
      window.location.href = "login.html";
    });
  }
});
