/*-------------submit--------------*/
document.getElementById("form").onsubmit = onValidate;
//Fonction pour le preventDefault + appel de toutes mes fonctions de control
function onValidate(e) {
  e.preventDefault();
  isGender();
  isName();
  isEmail();
  isEmail2();
  isFirstName();
  isBirthDate();
  isPseudo();
  isMdp();
  isMdp2();
  isAdress();
  isCp();
  isCity();
  isCountry();
}
/*------------------------Ctrl Genre(sera surement inutilisé)-----------------------------------*/
function isGender() {
  let male = document.getElementById("civilite_H").checked;
  let female = document.getElementById("civilite_F").checked;

  if (male === true) {
    repGender = "Bienvenue Monsieur";
  } else if (female === true) {
    repGender = "Bienvenue Madame";
  } else {
    repGender = "Veuillez indiquez le champ civilité";
  }
}
/*------------------------Ctrl Nom-----------------------------------*/
function isName() {
  let name = document.getElementById("name").value.trim();
  let motif = "^[a-z' áàâäãåçéèêëíìîïñóòôöõúùûüA-Z-]{2,50}$";
  let er = new RegExp(motif);
  let nameTest = er.test(name);
  if (!nameTest) {
    document.getElementById("lblMessageNom").innerHTML =
      "Le champ nom est obligatoire et ne doit contenir que des lettres";
  } else {
    document.getElementById("lblMessageNom").innerHTML = `Nom:${name}`;
  }
}
/*------------------------Ctrl Prénom-----------------------------------*/
function isFirstName() {
  let prenom = document.getElementById("prenom").value;
  let motif = "^[a-z'áàâäãåçéèêëíìîïñóòôöõúùûüA-Z]{2,50}$";
  let er = new RegExp(motif);
  let firstNameTest = er.test(prenom);
  if (!firstNameTest) {
    repFirstName =
      "Le champ prénom est obligatoire et ne doit contenir que des lettres";
  } else {
    repFirstName = prenom;
  }

  console.log(repFirstName);
}
/*------------------------Ctrl date de naissance-----------------------------------*/
function isBirthDate() {
  let reBirthDate = "";
  let dateNaissance = document.getElementById("dateNaissance").value;
  let motif = "([0-9]{2})/([0-9]{2})/([0-9]{4})";
  let er = new RegExp(motif);
  let birthDateTest = er.test(dateNaissance);
  if (!birthDateTest) {
    reBirthDate =
      "Le champ Date de naissance est obligatoire et doit être écris sous ce format==>DD/MM/YYYY";
  } else {
    reBirthDate = dateNaissance;
  }
  console.log(reBirthDate);
}
/*------------------------Ctrl Email-----------------------------------*/
function isEmail() {
  let email = document.getElementById("email").value;
  let motif =
    "^[0-9a-zA-Z_-]+([.][0-9a-zA-Z_-]+)?@[0-9a-zA-Z._-]{2,}[.][a-zA-Z]{2,5}$";
  let er = new RegExp(motif);
  let emailTest = er.test(email);
  if (!emailTest) {
    repEmail = "Format adresse mail incorrecte";
  } else {
    repEmail = email;
  }
  console.log(repEmail);
}
/*------------------------Ctrl Email2-----------------------------------*/
function isEmail2() {
  let email2 = document.getElementById("email2").value;
  let email = document.getElementById("email").value;
  let motif =
    "^[0-9a-zA-Z_-]+([.][0-9a-zA-Z_-]+)?@[0-9a-zA-Z._-]{2,}[.][a-zA-Z]{2,5}$";
  let er = new RegExp(motif);
  let emailTest2 = er.test(email2);
  if (!emailTest2) {
    repEmail2 = "Format adress mail incorrecte ";
  } else if (email != email2) {
    repEmail2 = "Les adresse email sont différentes";
  } else {
    repEmail2 = "Email2 ok";
  }
  console.log(repEmail2);
}
/*------------------------Ctrl pseudo-----------------------------------*/
function isPseudo() {
  let pseudo = document.getElementById("pseudo").value;
  let motif = "^[A-Za-z-_]{2,50}$";
  let er = new RegExp(motif);
  let pseudoTest = er.test(pseudo);
  if (!pseudoTest) {
    repPseudo =
      "Le champ pseudo est obligatoire et ne doit pas contenir de charactères accentués";
  } else {
    repPseudo = pseudo;
  }
  console.log(repPseudo);
}
/*------------------------Ctrl Mdp-----------------------------------*/
function isMdp() {
  let mdp = document.getElementById("mdp").value;
  let motif = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  //TestMdp-6943
  let er = new RegExp(motif);
  let mdpTest = er.test(mdp);
  if (!mdpTest) {
    repMdp =
      "Le mot de passe doit contenir 8 caractères minimum dont au moins une majuscule, une minuscule, un chiffre et un caractère spécial";
  } else {
    repMdp = "Mot de passe ok";
  }
  console.log(repMdp);
}
/*------------------------Ctrl Mdp2-----------------------------------*/
function isMdp2() {
  let mdp2 = document.getElementById("mdp2").value;
  let mdp = document.getElementById("mdp").value;
  let motif = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  //^[0-9a-zA-Z_-]+([.][0-9a-zA-Z_-]+)?@[0-9a-zA-Z._-]{2,}[.][a-zA-Z]{2,5}$
  let er = new RegExp(motif);
  let mdp2Test = er.test(mdp2);
  if (!mdp2Test) {
    repMdp2 =
      "Le mot de passe doit contenir 8 caractères minimum dont au moins une majuscule, une minuscule, un chiffre et un caractère spécial";
  } else if (mdp != mdp2) {
    repMdp2 = "les mots de passe doivent être identiques";
  } else {
    repMdp2 = "Mot de passe 2 ok";
  }
  console.log(repMdp2);
}
/*------------------------Ctrl adresse-----------------------------------*/
function isAdress() {
  let adress = document.getElementById("adress").value;
  if (adress == "") {
    repAdress = "le champ adresse est obligatoire";
  } else {
    repAdress = adress;
  }
  console.log(repAdress);
}
/*------------------------Ctrl code postal-----------------------------------*/
function isCp() {
  let cp = document.getElementById("cp").value;
  if (cp == "") {
    repCp = "le champ CP est obligatoire";
  } else {
    repCp = cp;
  }
  console.log(repCp);
}
/*------------------------Ctrl ville-----------------------------------*/
function isCity() {
  let city = document.getElementById("city").value;
  if (city == "") {
    repCity = "le champ Ville est obligatoire";
  } else {
    repCity = city;
  }
  console.log(repCity);
}
/*------------------------Ctrl pays-----------------------------------*/
function isCountry() {
  let country = document.getElementById("country").value;
  if (country == "") {
    repCountry = "le champ Pays est obligatoire";
  } else {
    repCountry = country;
  }
  console.log(repCountry);
}
