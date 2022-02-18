<?php

declare(strict_types=1);
// TestProjectDAO.php
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");


require_once '../entities/Project.php';
require_once '../DAOS/ProjectDAO.php';


try {
    //Création d'un objet pour notre connexion
    //$pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=punchstarter;", "root", "");
    $pdo = new PDO("mysql:host=mysql-pothier.alwaysdata.net;port=3306;dbname=pothier_punchstarter;", "*", "*");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("SET NAMES 'UTF8'");
} catch (PDOException $e) {
    echo $e->getMessage();
}
$dao = new ProjectDAO($pdo);
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
