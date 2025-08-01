console.log("Bienvenue sur le site d’Abdennour Location !");

const offres = [
  { voiture: "Renault Clio", prixParJour: 250, dispo: true },
  { voiture: "Peugeot 208", prixParJour: 270, dispo: true },
  { voiture: "Dacia sandero", prixParJour: 320, dispo: true },
];
function afficherOffres() {
  const liste = document.getElementById("liste-offres");
  liste.innerHTML = "";
  offres.forEach(offre => {
    const li = document.createElement("li");
    li.textContent = `${offre.voiture} - ${offre.prixParJour} dh/jour - ${offre.dispo ? "Disponible" : "Indisponible"}`;
    if (!offre.dispo) li.style.color = "red";
    liste.appendChild(li);
  });
}

function remplirListeVoitures() {
  const selectVoiture = document.getElementById("voiture");
  selectVoiture.innerHTML = `<option value="">--Sélectionnez--</option>`;
  offres.forEach(offre => {
    if (offre.dispo) {
      const option = document.createElement("option");
      option.value = offre.voiture;
      option.textContent = `${offre.voiture} - ${offre.prixParJour} dh/jour`;
      selectVoiture.appendChild(option);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  afficherOffres();
  remplirListeVoitures();

  const form = document.getElementById("form-reservation");
  const errorMessage = document.getElementById("error-message");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMessage.textContent = "";
    message.textContent = "";

    const nom = document.getElementById("nom").value.trim();
    const voiture = document.getElementById("voiture").value;
    const jours = parseInt(document.getElementById("jours").value);

    if (!nom) {
      errorMessage.textContent = "Le nom est obligatoire.";
      return;
    }
    if (!voiture) {
      errorMessage.textContent = "Veuillez choisir une voiture.";
      return;
    }
    if (!jours || jours < 1) {
      errorMessage.textContent = "Le nombre de jours doit être au moins 1.";
      return;
    }

    const offreChoisie = offres.find(o => o.voiture === voiture);
    const prixTotal = offreChoisie.prixParJour * jours;

    message.textContent = `Merci ${nom}, votre réservation pour la ${voiture} (${jours} jour(s)) est confirmée. Total à payer : ${prixTotal} dh.`;
    form.reset();
  });

  document.getElementById("annee").textContent = new Date().getFullYear();
});
  document.getElementById("annee").textContent = new Date().getFullYear();

