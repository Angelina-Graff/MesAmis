class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <img class="logo" src="image/logo.jpg" alt="Logo du site">
      <div class="header">
          <a id="btn" href="inscrire.html" class="button_header" role="button" aria-label="Inscrire"
              tabindex="0">Inscrire</a>
          <a id="btn" href="connecter.html" class="button_header" role="button" aria-label="Connecter" tabindex="0">Connecter</a>
      </div>
          `
    }
}

class HeaderConnect extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <img class="logo" src="image/logo.jpg" alt="Logo du site">
        <div class="header">
            <a id="btn" href="profil.html" class="button_header" role="button" aria-label="Bouton profil"
                tabindex="0"><img class="photo_header" src="image/PhotoProffil.jpg" alt="Photo du Proffil"></a>
            <a id="btn_menu" class="button_header" role="button" aria-label="Menu" tabindex="0" onclick="toggleMenu()"><img
                    class="photo_header" src="image/Menu.jpg" alt="Menu"></a>
        </div>
    </header>
    <ul class="menu" id="menu">
        <a id="btn" href="profilModifier.html" class="button_header" role="button" aria-label="Modification du compte"
            tabindex="0">Modification du compte</a>
        <a id="btn" href="mesGroupes.html" class="button_header" role="button" aria-label="MES GROUPES" tabindex="0">MES
            GROUPES</a>
        <a id="btn" href="rechercheGroups.html" class="button_header" role="button" aria-label="RECHERCHE GROUPES"
            tabindex="0">RECHERCHE GROUPES</a>
    </ul>
          `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <address>
            <p>____________________________________</p>
            <p>Contactez-nous : <a href="mailto:graff.aan@gmail.com">graff.aan@gmail.com</a></p>
            <p>Téléphone : +33 6 20 08 60 68</p>
        </address>
        <p>&copy; 2023 Ma Page Web</p>
        `
    }
}

class GroupPreview extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <div class="form_recerche">
                            <div class="photo">
                                <img src="image/PhotoGroupe.jpg" alt="Photo de la Groupe">
                            </div>
                            <div class="info">
                                <div class="row">
                                    <div class="form_recerche_nom">
                                        <p>NOM GROUP</p>
                                    </div>
                                    <a id="toggleButton" class="button_entre" role="button" aria-label="Modifier"
                                        onclick="toggleREJOIDRE_QUITTER(this.id)" tabindex="0">REJOINDRE</a>
                                    <a id="btn" class="button" role="button" aria-label="Modifier" onclick="Consulter()"
                                        tabindex="0">CONSULTER</a>
                                </div>
                                <div class="row">
                                    <p>Description de groupe <br>description / description</p>
                                </div>
                            </div>
                        </div>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

customElements.define('main-header-connect', HeaderConnect);

customElements.define('group-preview', GroupPreview);