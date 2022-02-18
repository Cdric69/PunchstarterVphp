<?php

//Project.php

declare(strict_types=1); // Facultatif en PHP 8
//DTO==> Data Transfert Object, sont les objets de ma table Project. Il y autant d'attribut que de colonne dans ma table.
class Project
{

    // PROPRIETE avec des ATTRIBUTS autant que de colonnes dans notre bdd
    private int $idProject;
    private string $ProjectName;
    private string $ProjectType;
    private int $idUser;
    /*
$this->testProjectName = $testProjectName;
this->testProjectName===>mon attribut et mes return dans get/set
= $testProjectName=====>mon paramètre dans mon constructeur
*/
    // CONSTRUCTEUR autant de paramètre que d'attributs
    public function __construct(string $ProjectName = "", string $ProjectType = "", int $idUser = 0, int $idProject = 0)
    {

        $this->idProject = $idProject;
        $this->ProjectName = $ProjectName;
        $this->ProjectType = $ProjectType;
        $this->idUser = $idUser;
    }


    // SET
    //l'attribut $this->idTestProject prend la valeur $idTestProject qui est mise dans le paramètre de la fonction*
    //Mes set me permette de paramétrer mes requettes.
    public function setIdProject(int $idProject): void
    {
        $this->idProject = $idProject;
    }

    public function setProjectName(string $ProjectName): void
    {
        $this->ProjectName = $ProjectName;
    }

    public function setProjectType(string $ProjectType): void
    {
        $this->ProjectType = $ProjectType;
    }
    public function setIdUser(string $idUser): void
    {
        $this->idUser = $idUser;
    }
    // GET
    //Je retourne la valeur de $this->idTestProject suite à la fonction setIdProject*
    //Mes get me permettent de récupérer mes différents attributs
    public function getIdProject(): int
    {
        return $this->idProject;
    }

    public function getProjectName(): string
    {
        return $this->ProjectName;
    }

    public function getProjectType(): string
    {
        return $this->ProjectType;
    }
    public function getIdUser(): int
    {
        return $this->idUser;
    }
}
