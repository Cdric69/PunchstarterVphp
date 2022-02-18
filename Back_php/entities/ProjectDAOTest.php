<?php

declare(strict_types=1);
// TestProjectDAO.php
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");


require_once './Project.php';
require_once '../DAOS/ProjectDAO.php';


try {
    //Création d'un objet pour notre connexion
    //$pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=punchstarter;", "root", "");
    $pdo = new PDO("mysql:host=mysql-pothier.alwaysdata.net;port=3306;dbname=pothier_punchstarter;", "pothier", "gaillard");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("SET NAMES 'UTF8'");
} catch (PDOException $e) {
    echo $e->getMessage();
}
//Création d'un objet $game avc la classe ExoProject
//==>Paramètre sans le id car mis à la fin dans le constructeur avec =0 donc facultatif
//Création d'un objet $dao avc la classe ProjectDAO
//Les paramère peuvent être modifier grace aun "set"
//Je dois avoir le même nom de variable que les variable que je modifierai avec ste/get
$game = new Project("GameNewName01", "GameNewType01");
$dao = new ProjectDAO($pdo);
/*-------------------Insert-----------------*/
/*
echo "<hr>INSERT<br>";
$affected = $dao->insert($game);
echo "Insert ? $affected<br>";
*/
/*-----------------Delete---------------*/
/*
echo "<hr>DELETE<br>";
$game->setIdProject(2938);
$game->setProjectName("");
$affected = $dao->delete($game);
echo "Delete ? $affected<br>";
*/
/*---------------------SELECT ALL----------------*/

$t = $dao->selectAll();
$array = array();


/*
echo "<pre>";
var_dump($t);
echo "</pre>";
*/

foreach ($t as $objet) {

    //Pas d'espace dans les clé
    $element = array("nomDeProjet" => $objet->getProjectName(), "typeDeProjet" => $objet->getProjectType());
    $array[] = $element;
}
/*for ($i = 0; $i < count($array); $i++) {

    echo $array[$i]["nomDeProjet"];
    echo "<br>";
    echo $array[$i]["typeDeProjet"];
    echo "<br>";
}*/


echo json_encode($array);
/*-------------------SELECT TYPE---------------------*/
/*
$type = 'Sport';
$t = $dao->selectType($type);
echo '</pre>';
var_dump($t);
echo '</pre>';
$array = array();




foreach ($t as $objet) {


    $element = array("nomDeProjet" => $objet->getProjectName(), "typeDeProjet" => $objet->getProjectType());
    $array[] = $element;
}*/



//echo json_encode($array);

/*---------------------SELECT ONE-----------*/
/*echo "<hr>SELECT ONE<br>";
//J'utilise la methode "selectOne de la classe "ProjectDAO" donnée par "$dao"
$p = $dao->selectOne(2940);
echo $p->getIdProject() . ":" . $p->getProjectName();*/
/*---------------------UPDATE----------------*/
/*echo "<hr>UPDATE<br>";
//$tx->initialiser($pdo);
$game->setIdProject(2939);
$game->setProjectName("juhniujnh");
//J'envoie dans ma fonction "update" le nouveau paramètre "$game"
$affected = $dao->update($game);
echo "Update ? $affected<br>";*/
