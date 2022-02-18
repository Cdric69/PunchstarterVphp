/*let select = document.getElementById("list");
select.onchange = getSelectValue;
function getSelectValue() {
  let selectedValue = document.getElementById("list").value;
  console.log(selectedValue);
}
//Pour selectionner le premier type au chargement de la page
getSelectValue();*/

let select = document.getElementById("list");
select.onchange = getSelectValue;
function getSelectValue() {
  //l'option dans le select=>index selectionné dans mmon select==>le texte
  let text = select.options[select.selectedIndex].text;
  console.log(text);
}
//Pour selectionner le premier type au chargement de la page
getSelectValue();
