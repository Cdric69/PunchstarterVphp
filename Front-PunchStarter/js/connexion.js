document.getElementById("form").onsubmit = onValidate;
function onValidate(e) {
  e.preventDefault();
  isPseudo();
  isMdp();
  fetch(
    `http://localhost:8083/connexion?user_name=${repPseudo}&user_password=${repMdp}`
  )
    .then((response) => {
      console.log("RESPONSE");
      console.log(response);
      return response.json();
    })
    .then(
      (result) => {
        if (
          repMdp == result[0].user_password &&
          repPseudo == result[0].user_name
        ) {
          console.log("bravo vous êtes connecté");
        } else {
          //problème en cas d'erreur impossible d'afficher message ===> unchaught (in promise)blablabla
          console.log("erreur de mot de passe");
        }
        console.log(repMdp);
        // TestMdp-1234
        console.log(result);
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
      }
    );
}

/*------------------------Ctrl Email-----------------------------------*/
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
  return repPseudo;
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
    repMdp = mdp;
  }
  console.log(repMdp);
  return repMdp;
}
