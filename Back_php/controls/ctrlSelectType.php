<?php

declare(strict_types=1);
// TestProjectDAO.php
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");

require_once '../entities/Project.php';
require_once '../DAOS//ProjectDAO.php';


try {
    //Création d'un objet pour notre connexion
    //$pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=punchstarter;", "root", "");
    $pdo = new PDO("mysql:host=mysql-pothier.alwaysdata.net;port=3306;dbname=pothier_punchstarter;", "*", "*");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("SET NAMES 'UTF8'");
} catch (PDOException $e) {
    echo $e->getMessage();
}
$type = filter_input(INPUT_GET, "categorie");
//echo $type;


$dao = new ProjectDAO($pdo);
$t = $dao->selectType($type);
$array = array();
foreach ($t as $objet) {

    //Pas d'espace dans les clé
    $element = array("nomDeProjet" => $objet->getProjectName(), "typeDeProjet" => $objet->getProjectType());
    $array[] = $element;
}
echo json_encode($array);
// echo "<pre>";
// var_dump($t);
// echo "</pre>";
//$array = array();




//foreach ($t as $objet) {


//$element = array("nomDeProjet" => $objet->getProjectName(), "typeDeProjet" => $objet->getProjectType());
//$array[] = $element;
//}



//echo json_encode($array);
//include '../../Front-PunchStarter/GameTypeAction.php';
