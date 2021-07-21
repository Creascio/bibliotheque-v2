# Interface Utilisateur

## Introduction

Dans tous types de programme et en Java également, il est toujours plus agréable pour un utilisateur de manipuler un programme via une **interface utilisateur**. Le but d'une interface utilisateur est de rendre le programme **plus intuitif pour un humain** en lui indiquant des informations de diverses manières, notamment **visuelles**.

Dans ce cours nous allons voir comment mettre en place les bases d'une interface utilisateur rudimentaire via la **console Java**. L'interface utilisateur sera donc **uniquement textuelle**, nous ne parlerons pas d'interface plus graphique dans ce cours car le Java n'est pas un langage bien équipé pour cela car ce n'est pas son but.

## Récupérer des informations : le Scanner

Un `Scanner` en Java est un objet permettant de **récupérer des informations provenant d'un flux**. En Java il existe différents types de flux :

- le flux de **sortie** : la console
- le flux d'**entrée** : la saisie clavier
- le flux d'**erreur** : réservé aux messages d'erreurs du programme
- les fluxs **externes** : un fichier, une requête API ou HTTP, etc.

On peut positionner un `Scanner` sur l'un de ces flux pour en **récupérer le contenu** et l'interpréter par la suite. Ici c'est uniquement le **flux d'entrée** qui va nous intéresser.

Un objet de type `Scanner` s'instancie de cette manière :

```
Scanner sc = new Scanner(System.in);
```

_Remarque : pour utiliser la classe `Scanner`, il est nécessaire de l'importer dans votre projet._

Ici on vient de créer un objet de type `Scanner` s'appelant `sc` sur le flux d'entrée indiqué par le mot clé `System.in`.

On peut ensuite récupérer des informations depuis ce `Scanner`. Depuis le flux d'entrée les informations que l'on souhaite recueillir sont les **saisies clavier** de l'utilisateur c'est à dire **ce qu'il écrit dans la console**.

### Saisie et récuperation d'information

Une saisie clavier se caractérise par **la chaîne de caractère rentrée par l'utilisateur** qui peut ou pas contenir des espaces. La **validation** de cette saisie clavier par l'utilisateur se fait pas l'utilisation de `Enter` (la touche Entrée) du clavier qui appelle la méthode de récupération.

_Remarque : la récupération se fait de manière différente pour les flux externes depuis des fichiers par exemple. Dans ce cas la récupération n'implique bien sur par la touche Entrée._

La récupération de la saisie clavier utilisateur possède des règles qui varie selon la méthode de récupération. De manière générale un `Scanner` possède un **separator** qui indique où **découper les informations** dans la saisie clavier. De base le séparator est l'**espace** ou le **white space**.

Donnons un exemple pour comprendre ce fonctionnement :

Si j'écris dans la console : `HelloWorld!` puis que j'appuie sur `Enter`...

Dans sa configuration de base, le `Scanner` récupère cette chaîne : `HelloWorld!`

Si j'écris dans la console : `Hello World !` puis que j'appuie sur `Enter`...

Dans sa configuration de base, le `Scanner` récupère cette chaîne : `Hello`

En effet la chaîne `Hello World !` contient des espaces et correspond donc à 3 saisies claviers distinctes :

`Hello`, `World` et enfin `!`

### Les méthodes usuelles

Voici différentes méthodes pour récupérer des informations via un `Scanner` :

- `next()` : permet de récupérer **une chaîne de caractères** (`String`). Cette méthode est sensible au **separator** du scanner.
- `nextLine()` : permet de récupérer **la saisie entière** sans ce soucier du separator et sans faire de distinction sur **les types de données récupérés**.
- `hasNext()` : retourne `true` ou `false` en fonction de si le scanner a encore du contenu à lire dans sa source.
- `nextInt()` : permet de récupérer une valeur entière. Attention ! Plante si la saisie clavier ne contient pas de nombre.

_Remarque : la méthode `hasNext` est principalement utilisée dans le cadre de la récupération de donnée dans un fichier externe car elle va permettre de lire tout le contenu du fichier._

_Remarque : Tout comme pour les `int`, il existe des méthodes pour récupérer tous les autres types primitifs (ex: `nextFloat`, `nextBoolean`, etc.)_

## Construire une interface utilisateur

Une des règles d'or de la programmation est de **ne jamais faire confiance à l'utilisateur**. Il faut coder son interface en partant du principe que l'utilisateur **ne vas pas nous donner l'information que l'on souhaiterait**.

Ainsi il existe de nombreuses astuces pour que notre programme soit **paré à la majeure partie des éventualités**. Le but est d'éviter à tout prix que le programme plante.

Les deux notions importantes d'une interface utilisateur sont que :

- on **sait à l'avance** ce que l'on attend de la part de l'utilisateur
- on souhaite recevoir la bonne information et ainsi on devra **recommencer jusqu'a l'obtenir**

En sachant ça, deux boucles de contrôles nous seront très utiles et fonctionnent de paires :

Le `while` nous permet via l'utilisation d'une condition booléenne de **bloquer l'utilisateur** jusqu'a ce qu'il est indiqué l'information souhaitée (toujours pour éviter les bugs, pas pour être méchant).

Le `switch` nous permet d'indiquer le **comportement de notre application** en fonction du résultat de la saisie utilisateur. Il permet aussi de gérer facilement le cas où **l'utilisateur s'est trompé**.

Voici une petite mise en situation :

```
Scanner sc = new Scanner(System.in);
// permet de stocker l'information
// le choix de l'utilisateur est il bon ?
Boolean isValid = false;

// tant que la saisie
// utilisateur n'est pas
// satisfaisante
while (!isValid){
    System.out.print("Tapez 1 pour les mails, Tapez 2 pour les SMS >");
    // on récupère une chaîne de caractère
    // et pas un int car on veut éviter de
    // faire planter le programme.
    // on stocke la saisie clavier
    // dans une variable String
    String choix = sc.next();

    // en fonction de ce qu'a
    // écrit l'utilisateur...
  switch(choix) {
    // si l'utilisateur
    // a écrit '1'
    case "1" :
      System.out.println("MAILS");
      // la saisie de l'utilisateur
      //correspond à un cas valide
      isValid = true;
      break;

    // si l'utilisateur
    // a écrit '2'
    case "2" :
      System.out.println("SMS");
      // cas valide également
      isValid = true;
      break;

    // si l'utilisateur
    // a écrit autre chose
    // que '1' ou '2'
    default :
      System.out.println("Saisie invalide, rééssayez");
      // isValid reste a false car la saisie n'est pas valide
      // on repart au début du while
      // et on redemande une saisie
      break;
  }
}
// si on arrive ici
// c'est qu'on a quitté le while
// et que l'utilisateur
// a saisie correctement
System.out.println("Fin du programme");
```

Un exemple d'utilisation de l'interface du dessus :

`Tapez 1 pour les mails, Tapez 2 pour les SMS > salade`

`Saisie invalide`

`Tapez 1 pour les mails, Tapez 2 pour les SMS > 2`

`SMS`

`Fin du programme`

_Remarque : le code au dessus est seulement un exemple qui peut et doit être adapté en fonction de la situation._

## Gestion des fichiers externes

Dans cette partie nous allons voir comment utiliser le `Scanner` pour **lire** des données **textuelles** dans un fichier externe `txt`.

Tout d'abord il faut récupérer le fichier texte grâce à un objet de type `File`.

On doit instancier un objet de type `File` dans notre programme avec en paramètre d'entrée le **chemin** (relatif ou absolu) du fichier.

_Remarque : pour les chemins relatifs, la racine de recherche est à la racine de votre projet c'est à dire au même niveau que le dossier `src`._

Voici un exemple :

```
// on va récupérer
// le fichier toto.txt
// à la racine du projet
File file = new File("toto.txt");

Scanner sc = new Scanner(file);

// tant que le scanner n'est pas arrivé
// à la fin du fichier
while(sc.hasNext()){
    // on affiche le fichier ligne par ligne
    System.out.println(sc.nextLine());
}
```

_Remarque : bien qu'on ne puisse pas écrire dans un fichier avec un Scanner il y a bien d'autres façons de traiter un fichier que dans cet exemple._

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
