# Interface Utilisateur

## Prérequis

+ [Collection et Iterable]()

## Introduction

Un scanner est un objet permettant de récupérer des informations provenant d'un flux. En java il existe différents types de flux :

+ le flux de **sortie** : la console
+ le flux d'**entrée** : la saisie clavier
+ le flux d'**erreur** : réservé aux messages d'erreurs
+ les fluxs **externes** : un fichier, une requête API ou HTTP, etc.

On peut positionner un scanner sur certains de ces flux pour en récupérer le contenu. Ici c'est uniquement le flux d'entrée qui va nous intéresser.

Un objet de type Scanner s'instancie de cette manière :

```java
Scanner sc = new Scanner(System.in);
```

Ici on vient de créer un Scanner s'appelant `sc` sur le flux d'entrée `System.in`.

On peut ensuite récupérer des informations depuis le scanner. La récupération de la saisie possède des règles qui varie selon la méthode de récupération. De manière général un scanner possède un **separator** qui indique où **découper les informations**. De base le séparator est l'**espace** ou le white space.

Lorsqu'on appelle une méthode de Scanner, l'utilisateur est alors ammené à écrire dans la console. Le fait d'appuyer sur la touche `Enter` exécute la méthode de récupération. Ce fonctionnement diffère dans le cadre de la récupération d'information depuis une autre source qu'un utilisateur.

Voici différentes méthodes pour récupérer des informations :

+ `next()` : permet de récupérer une chaîne de caractères. Attention ! Il ne doit pas y avoir d'espace à l'intérieur de la chaîne
+ `nextLine()` : permet de récupérer la saisie entière sans faire de distinction sur les types de données récupérés.
+ `hasNext()` : retourne vrai ou faux en fonction de si le scanner a encore du contenu à lire dans sa source.
+ `nextInt()` : permet de récupérer une valeur entière. Attention ! Plante si la saisie clavier ne contient pas de nombre.

*Remarque* : Tout comme pour les int, il existe des méthodes pour récupérer tous les types primitifs.

## Construire une interface utilisateur

Une des règles d'or de la programmation est de ne jamais faire confiance à l'utilisateur. Il faut coder en partant du principe que l'utilisateur ne vas pas nous donner l'information que l'on recherche. Ainsi il existe de nombreuses astuces pour que notre programme soit parés à la majeure partie des éventualités. Le but est d'éviter à tout prix que le programme plante.

Les deux notions importantes d'une interface utilisateur sont que :

+ on **sait à l'avance** ce qu'on attend de l'utilisateur
+ on souhaite recevoir la bonne information et ainsi on devra **retenter jusqu'a l'obtenir**

En sachant ça, deux boucles de contrôles nous seront très utiles et fonctionnent de pairs :

Le **while** nous permet via l'utilisation d'une condition booléenne de "bloquer" l'utilisateur jusqu'a ce qu'il est indiqué l'information souhaitée.

Le **switch** nous permet d'indiquer le **comportement de notre application** en fonction du résultat de la requête auprès de l'utilsateur. Il permet aussi de gérer facilement le cas ou **l'utilisateur s'est trompé**.

**Exemple** :

```java
Scanner sc = new Scanner(System.in);
Boolean isValid = false; // le choix de l'utilisateur est il bon ?

while (!isValid){
    // print au lieu de println pour que l'utilisateur écrive
    // sur cette ligne
    System.out.print("Tapez 1 pour les mails, Tapez 2 pour les SMS >");
    // on récupère une chaîne et pas un int car on veut éviter de
    // faire planter le programme
    String choix = sc.next();
    switch(choix){
        case "1" :
            System.out.println("MAILS");
            // la saisie de l'utilisateur correspond à un cas valide
            isValid = true;
            break; // on ne veut rentrer que dans un seul case !
        case "2" :
            System.out.println("SMS");
            isValid = true;
        default :
            System.out.println("Saisie invalide");
            // isValid reste a false car la saisie n'est pas valide
            // on repart au début du while
            break;
    }
}
System.out.println("Fin du programme");
```

*Output* :

`Tapez 1 pour les mails, Tapez 2 pour les SMS >`*salade*

`Saisie invalide`

`Tapez 1 pour les mails, Tapez 2 pour les SMS >`*2*

`SMS`

`Fin du programme`

*Remarque* : le code au dessus est seulement un exemple qui peut et doit être adapté en fonction de la situation

## Fichier externe

Dans cette partie nous allons voir comment utiliser le Scanner pour **lire** des données **textuelles** dans un fichier externe.

Tout d'abord il faut récupérer le fichier de texte grâce à un objet de type File.

On doit instancier un objet de type File avec en paramètre le chemin (relatif ou absolu) du fichier. Le plus simple est, si vous le pouvez, de placer le fichier à la racine du projet c'est à dire au même niveau que le dossier `src`. Le scanner doit ensuite être placé sur le fichier.

**Exemple** :

```java
File file = new File("toto.txt");
Scanner sc = new Scanner(file);
// tant que le scanner n'est pas arrivé au bout du fichier
while(sc.hasNext()){
    // affiche le fichier ligne par ligne
    System.out.println(sc.nextLine());
}
```

*Remarque* : bien qu'on ne puisse pas écrire dans un fichier avec un Scanner il y a bien d'autres façons de traiter un fichier que dans cet exemple.

## Exercices

### Exercice 1 : Rézo zocial

On souhaite créer un réseau social miniature. Chaque utilisateur pourra soit :

+ Entrer son nom pour pouvoir ensuite écrire un post
+ Entrer le nom d'un autre utilisateur pour voir ses posts, à la condition que l'utilisateur existe

*Remarque* : il n'est pas question ici de faire une sauvegarde des utilisateurs et de leurs posts entre plusieurs éxécutions du programme, tout sera géré en interne.

Le but de cet exercice est de créer une interface utilisateur qui permettent au maximum de couvrir les erreurs de saisie.

***TODO : à compléter***

## Suivants

+ [Valeurs Aléatoires]()
