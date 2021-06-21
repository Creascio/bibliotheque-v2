# Bibliothèques

## Introduction

En Java comme dans bon nombre d'autres langages de programmation, il est possible d'exploiter du **code externe** a votre programme afin d'éviter de **recoder des fonctionnalitées qui existe déjà**.

Cela se fait via l'**importation de bibliothèques** qui contiennent des **classes** avec leurs attributs et leurs méthodes.

## Importer des bibliothèques

Il y a une syntaxe précise à respecter pour importer une bibliothèque dans un projet :

`[nomDeLaBibliotheque].[nomDuPackage].[nomDeLaClasse];`

Les imports se situe toujours au dessus du bloc classe qui souhaite les utiliser.

Ainsi, pour importer la classe `ArrayList` on écrit : `import java.util.ArrayList;`

Ici `java` fait référence à la bibliothèque Java standard. On recherche la classe `ArrayList` se trouvant dans le package `util`.

Grâce à cet import on peut dorénavant, dans le cadre de la classe qui fait l'import, créer et manipuler des objets de type `Arraylist`. On peut également utiliser ses attributs et méthodes.

Voici un exemple :

```
// on import la classe que l'on souhaite utiliser
import java.util.ArrayList;

public class Toto {
  // un attribut de type ArrayList
  // qui représente une liste de notes
  private ArrayList<Note> notes;

  public Toto() {
    // une ArrayList est un objet
    // donc on l'instancie avant emploi
    // à la création de l'objet Toto
    this.notes = new ArrayList<Note>();

    // un exemple d'utilisation
    // d'une méthode de la classe
    // ArrayList, ici removeAll
    this.notes.removeAll()
  }
}
```

*Remarque : on ne détaille pas le fonctionnement de la classe `ArrayList` ici. Cet exemple à pour but de montrer ce qu'il est possible grâce à un import*

On peut importer tout le contenu d'une bibliothèque ou d'un package en utilisant `*` :

```
import java.util.*;
```

Cet import permet de récupérer le contenu de toutes les classes contenu dans le package `util` de la bibliothèque `java`.

Vous pouvez également importer vos propres classes vers d'autres parties de votre programme si elle en ont besoin. Par exemple on import la classe à tester dans la feuille de tests unitaires.

*Remarque : la plupart des IDE permettent l'importation automatique des bibliothèques nécessaires au fonctionnement de votre code. Vous aurez donc rarement besoin de vous en soucier.*

*Remarque : Il existe d'autres outils permettant l'exploitation de code externe autre que l'import en brut dans le code mais nous n'en parlerons pas dans ce cours.*

## Exercices

*Coming soon...*
