<?php

/*
 * PaysDAO.php
 */
//Le DAO==>Data Access Object est la représentation de mon CRUD dans une class et contient mon constructeur
//Il permet de passer mes ordre sql avec du code back. Ici avec du php
declare(strict_types=1);

require_once '../entities/Project.php';
//Même nom que le fichier
class ProjectDAO
{
    //Constructeur pour notre connexion
    //les attributs sont des variables d'instances
    private $pdo;
    //Constructeur de type PDO de valeur $pdo
    //this->pdo est l'attribut "private $pdo" et prend la valeur de "$pdo"
    //qui est en paramètre de la fonction

    /* On declare la methode constructeur avec un argument
    et le code affecte à l'attribut PDO la valeur de l'argument
    en règle generale, on execute une série de "setter"*/
    function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    //Création d'un fonction nommé "insert"
    //avec pour paramètre une variable "$game" typé par ma classe "ExoProject" qui renvoie un "int"
    //On déclare une fonction "insert":  input=>code=>outpout = objet=>code=>int
    /*public function insert(Project $game): int
    {
        $affected = 0;
        //Je sollicite la methode "prepare" (on compile un ordre SQL) de la class PDO déclaré plus haut
        //et valorisé dans le constructeur
        try {
            $lcmd = $this->pdo->prepare("INSERT INTO project(project_name, project_type) VALUES(?,?)");
            //On affecte aux parametres les différentes valeurs des attributs de l'obejt passé en parametres
            $lcmd->bindValue(1, $game->getProjectName());
            $lcmd->bindValue(2, $game->getProjectType());
            $lcmd->execute();
            $affected = $lcmd->rowCount();
        } catch (Exception $exc) {
            $affected = -1;
            echo $exc;
        }
        return $affected;
    }*/
    /*---------------------------DELETE------------*/


    /*
    public function delete(ExoProject $game): int
    {
        $affected = 0;

        try {
            $lcmd = $this->pdo->prepare("DELETE FROM project WHERE id_project = ?");
            $lcmd->bindValue(1, $game->getIdProject());
            $lcmd->execute();
            $affected = $lcmd->rowCount();
        } catch (Exception $exc) {
            $affected = -1;
            echo $exc;
        }
        return $affected;
    }

    /*------------------UPDATE-----------------*/
    //public function update(ExoProject=====>J'utiliserai donc ma classe ExoProject  $game): int

    /* public function update(Project $game): int
    {
        $affected = 0;

        try {
            $lcmd = $this->pdo->prepare("UPDATE project SET project_name = ? WHERE id_project = ?");
            $lcmd->bindValue(1, $game->getProjectName());
            $lcmd->bindValue(2, $game->getIdProject());
            $lcmd->execute();
            $affected = $lcmd->rowCount();
        } catch (Exception $exc) {
            $affected = -1;
            echo $exc;
        }
        return $affected;
    }*/


    /* public function selectOne($pk): Project
    {

        try {
            $cursor = $this->pdo->prepare("SELECT * FROM project WHERE id_project = ?");
            $cursor->bindParam(1, $pk);
            $cursor->execute();
            $record = $cursor->fetch();
            var_dump($record);
            if ($record != null) {
                //intval() transforme en un int (de base en base de 10)
                //SQL renvoie une chaine de caractère en php 8
                //Ordre à respecter par rapport à l'ordre dans SQL et constructeur
                //$record[0]==>1er dans SQL et 3e dans constructeur
                //$record["test_project_name"]===>Juste pour tester entre [1]/["test_project_name"]
                $game = new Project($record["project_name"], $record[2], intval($record[0]));
                var_dump($game);
            } else {
                $game = new Project("0", "Introuvable");
            }
            $cursor->closeCursor();
        } catch (Exception $exc) {
            $game = new Project("-1", $exc->getMessage());
        }
        return $game;
    }*/


    /*----------------------SELECT ALL---------------*/

    public function selectAll(): array
    {

        $tGame = array();
        try {
            $cursor = $this->pdo->query("SELECT * FROM project");
            //Tester le changement en fecth num
            $cursor->setFetchMode(PDO::FETCH_ASSOC);

            while ($record = $cursor->fetch()) {
                //var_dump($record);
                //Je créer un objet et je type mes arguments 
                $game = new Project($record["project_name"], $record["project_type"], intval($record["id_user"]));

                //var_dump($game);
                $tGame[] = $game;
                //var_dump($tGame);
            }
            //var_dump($tGame);

            $cursor->closeCursor();
        } catch (Exception $exc) {
            $tGame[] = new Project("-1", $exc->getMessage());
        }
        return $tGame;
    }
    /*-------------------------SELECT TYPE-----------*/
    public function selectType($type): array
    {

        $tGame = array();
        try {
            $cursor = $this->pdo->prepare("SELECT * FROM project WHERE project_type = ?");
            $cursor->bindParam(1, $type);
            $cursor->execute();
            //Tester le changement en fecth num
            $cursor->setFetchMode(PDO::FETCH_ASSOC);

            while ($record = $cursor->fetch()) {
                //var_dump($record);
                //Je créer un objet et je type mes arguments 
                $game = new Project($record["project_name"], $record["project_type"], intval($record["id_user"]));

                //var_dump($game);
                $tGame[] = $game;
                //var_dump($tGame);
            }
            //var_dump($tGame);

            $cursor->closeCursor();
        } catch (Exception $exc) {
            $tGame[] = new Project("-1", $exc->getMessage());
        }
        return $tGame;
    }
}
