<?php
echo "test";
try {

    //Création d'un objet pour notre connexion
    //$pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=punchstarter;", "root", "");
    $pdo = new PDO("mysql:host=mysql-pothier.alwaysdata.net;port=3306;dbname=pothier_cours;", "pothier", "gaillard");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("SET NAMES 'UTF8'");
    var_dump($pdo);
} catch (PDOException $e) {
    echo $e->getMessage();
}
