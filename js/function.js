var isREJOIDRE = true;

function OublierPassword() {
    alert("Formulaire soumis");
    btn.blur();
}

function loginWithFacebook() {
    alert("Connexion via Facebook");
    btn.blur();
}

function loginWithGoogle() {
    alert("Connexion via Google");
    btn.blur();
}

function loginWithFacebook() {
    alert("Connectez-vous via Facebook");
    btn.blur();
}

function loginWithGoogle() {
    alert("Connectez-vous via Google");
    btn.blur();
}

function Sauvegarder() {
    alert("Save modifier");
    btn.blur();
}

function Consulter() {
    alert("consulter.html");
    btn.blur();
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'example@example.com' && password === '123') {
        window.location.href = 'profil.html';
    } else {
        alert('Email ou mot de passe incorrect. Veuillez réessayer.');
        window.location.href = 'connecter.html';
    }
    btn.blur();
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    var btn_menu = document.getElementById('btn_menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
    btn_menu.blur();
}

function submitForm() {
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var motDePasse = document.getElementById("mot_de_passe").value;
    var confirmation = document.getElementById("confirmation").value;

    if (nom.trim() === "" || email.trim() === "" || motDePasse.trim() === "" || confirmation.trim() === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
    } else {
        if (motDePasse.trim() != confirmation.trim()) {
            alert("Les mots de passe ne correspondent pas");
        }
        else {
            window.location.href = "profil.html";
        }
    }
    btn.blur();
}

function NouveauMotPasse() {
    var email = document.getElementById("email").value;

    if (email.trim() === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
    } else {
        alert("message de récupération de mot de passe envoyé à la email");
    }
    btn.blur();
}

function toggleREJOIDRE_QUITTER() {
    if (isREJOIDRE) {
        alert("Ajouter à mes groupes");
        document.getElementById('toggleButton').innerHTML = "QUITTER";
        document.getElementById('toggleButton').classList.add('red');
    } else {
        alert("Suppression de mes groupes");
        document.getElementById('toggleButton').innerHTML = "REJOIDRE";
        document.getElementById('toggleButton').classList.remove('red');
    }

    isREJOIDRE = !isREJOIDRE;
    toggleButton.blur();
}
