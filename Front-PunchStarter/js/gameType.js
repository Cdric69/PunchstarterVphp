//fetch pour afficher la liste
let numberLine = 3;
first = 0;
let actualPage = 1;
document.getElementById("validate").onclick = ShowListPerType;
// document.getElementById("type").onchange = ShowListPerType;

let urlAll = "../Back_php/controls/ctrlSelectAll.php";
// let url2 =
//   "http://localhost:3000/PunchStarter/Back_php/controls/ctrlSelectType.php?categorie=" +
//   type;
function test(url) {
  fetch(url).then((response) =>
    response.json().then(
      (data) =>
        //Englobe ma fonction pourquoi?
        {
          let maxPage = Math.ceil(data.length / numberLine);
          document.getElementById("nextpage").onclick = nextPage;
          document.getElementById("previouspage").onclick = previousPage;
          document.getElementById("firstpage").onclick = firstPage;
          document.getElementById("lastpage").onclick = lastPage;
          if (url != urlAll) {
            firstPage();
          }
          showList();
          //console.log(urlAll);

          //Affciher ma liste
          function showList() {
            let table = document.getElementById("liste");
            let title = "<tr><td>Liste de jeux</td></tr>";

            let showGame = "";
            for (game = first; game < first + numberLine; game++) {
              if (data[game] != null) {
                showGame += `<tr onclick = test()><td>${data[game]["nomDeProjet"]}</td><td>${data[game]["typeDeProjet"]}</td></tr>`;
              }
            }
            table.innerHTML = title + showGame;
            showPageInfo();
          }

          //apage suivante
          function nextPage() {
            if (first + numberLine <= data.length - 1) {
              first += numberLine;
              actualPage++;
              showList();
            }
          } ///nextPage
          function previousPage() {
            if (first - numberLine >= 0) {
              first -= numberLine;
              actualPage--;
              showList();
            }
          } ///previousPage
          function firstPage() {
            first = 0;
            actualPage = 1;
            showList();
          } ///firstPage
          function lastPage() {
            first = maxPage * numberLine - numberLine;
            actualPage = maxPage;
            showList();
          }
          function showPageInfo() {
            document.getElementById(
              "pageinfo"
            ).innerHTML = `Page ${actualPage} sur ${maxPage}`;
          }
        } ///fin de data
    )
  );
}
test(urlAll);

function ShowListPerType() {
  let type = document.getElementById("select").selectedOptions[0].value;
  let urlType = "../Back_php/controls/ctrlSelectType.php?categorie=" + type;
  test(urlType);
}

/*document.getElementsByClassName("tr").onclick = function clickable() {
  console.log("hello");
};*/

///fin de la requête ne rien coder après concernant la requête. c'est dans response qu'il faut travailler.

/*function test(e) {
  console.log([e][0].childNodes[0].data);
}*/
//A revoir
/*
function test() {
  console.log(this.innerHTML);
}*/
//PunchStarter/Back_php/controls/ctrlSelectType.php?
/*
        function showList() {
          let table = document.getElementById("liste");
          for (game = first; game < first + numberLine; game++) {
            //console.log(data[game].project_name);
            console.log(game[0]);
            
            let tr = document.createElement("tr");
            let td = document.createElement("td");

            let newText = document.createTextNode(data[game].project_name);
            tr.appendChild(td);
            td.appendChild(newText);
            table.appendChild(tr);

            //création de mes li
            let li = document.createElement("li");
            li.setAttribute("onclick", "test(this)");
            //let newText = document.createTextNode(data[game].project_name);
            li.appendChild(newText);
            document.getElementById("liste").appendChild(li);
            
          }
          return table;
        }*/
