//fetch pour afficher la liste

//mon formulaire
//document.getElementById("validate").onclick = ShowListPerType();
//let type = document.getElementById("select").value;

//let url = "http://localhost:8083/GameSelect";
let url =
  "http://localhost:3000/PunchStarter/Back_php/entities/ProjectDAOTest.php";
fetch(url).then((response) =>
  response.json().then(
    (data) =>
      //Englobe ma fonction pourquoi?
      {
        //console.log(data);

        showList();

        //Affciher ma liste
        function showList() {
          let table = document.getElementById("liste");
          let title = "<tr><td>Liste de jeux</td></tr>";

          let showGame = "";
          for (game = 0; game < data; game++) {
            if (data[game] != null) {
              showGame += `<tr onclick = test()><td>${data[game]["nomDeProjet"]}</td><td>${data[game]["typeDeProjet"]}</td></tr>`;
            }
          }
          table.innerHTML = title + showGame;
        }
      } ///fin de data
  )
);
document.getElementById("validate").onclick = ShowListPerType();
//console.log(data);
function ShowListPerType(type) {
  console.log("afficherUneVille");
  fetch(
    "http://127.0.0.1/PourFrontJS2022/controls/VillesCTRLSelectOne.php?project_type=" +
      type
  )
    .then((response) => {
      console.log("response afficheliste");
      console.log(response);
    })
    .then((data) => {
      console.log("data");
      console.log(data);
    })
    .catch((error) => {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
}
