# Abstraction et Héritage

## Introduction

Le but principal du Java est de pouvoir produire du code **le plus généraliste possible** pour pouvoir **faciliter la maintenance** et les **modifications ultérieures**.

Ainsi on essaye toujours de coder en partant du **cas le plus général** vers **les spécialisations éventuelles** de ce cas en gardant toujours en tête que le but est de supprimer la **redondance de code**.

Cette façon de coder tend à entraîner une **hiérarchie entre les classes** d'où la notion d'héritage.

## Principe

L'héritage repose sur une relation **"mère-fille"** entre les classes. Cette relation est representée par le mot clé `extends` dans la signature d'une classe.

Voici un exemple :

```
public class Chien extends Animal {
    // code goes here
}
```

Ce qu'il faut comprendre ici c'est que la classe `Chien` hérite de la classe `Animal`. Un chien **EST UN** animal.

En Java une classe ne peut hériter au maximum que d'**une seule autre classe**. Ce n'est pas le cas en C++ par exemple où l'on peut créer des liens d'héritages multiples entre les classes.

Cependant les relations sont **infinies en profondeur**, c'est à dire qu'une classe peut hériter d'une classe qui elle même hérite d'une autre classe et ainsi de suite sans limite.

Un lien d'héritage implique que la classe fille **possède les attributs de sa classe mère**. Elle peut également posséder **ses propres attributs en plus** de ceux de sa mère.

_Remarque : la classe mère ne possède pas les attributs de la classe fille. Les liens d'héritage se font toujours de la mère vers la fille._

La classe fille peut également **faire appel aux méthodes de la classe mère**. Elle peut également avoir ses propres méthodes en plus.

_Remarque : la classe mère ne peut pas utiliser les méthodes de la classe fille. Les liens d'héritage se font toujours de la mère vers la fille._

Pour faire appel à des éléments de la classe mère on utilise le mot clé `super`. `super` représente l'**objet père** la où `this` représente l'objet courant.

Voici un exemple :

La classe mère `Animal`

```
public class Animal {
  private String nom;
  private int age;

  public Animal(String nom, int age) {
    this.nom = nom;
    this.age = age;
  }

  public void manger() {
    System.out.println("MIAM MIAM");
  }
}
```

La classe fille `Chien` qui hérite de `Animal`

```
public class Chien {

  // un chien possède implicitement
  // un nom et un age en plus
  // de sa race car c'est
  // un animal
  private String race;

  // on indique tous les
  // attributs explicitement
  // dans le constructeur
  public Chien(String nom, int age, String race) {

    // super() fait appel
    // au constructeur de
    // la classe Animal
    super(nom, age);
    // on s'occupe de l'attribut
    // race propre aux chiens
    // ici
    this.race = race;
  }

  public void aboyer() {
    System.out.println("OUAF OUAF");
  }
}
```

et enfin un exemple de programme manipulant un objet de type `Chien`

```
public static void main(String[] args) {
  Chien doggo = new Chien("paf", 4, "Labrador");
  doggo.aboyer();
  doggo.manger();
}
```

Voici ce que l'on obtient dans la console après execution du code ci-dessus :

`OUAF OUAF`

`MIAM MIAM`

On observe que l'objet `doggo` de type `Chien` possède une race mais également un nom et un age.

Il peut utiliser la méthode `aboyer()` ce qui est tout a fait normal puisque cette méthode est définie dans la classe `Chien`.

Il peut également utiliser la méthode `manger()` qui est définie dans la classe `Animal`.

Ici la classe `Animal` représente **le cas général** et doit regrouper toutes les **caractéristiques** (attributs) et les **comportements** (méthodes) commun(es) à **tous les types d'animaux**.

Rien n'empêche ensuite les **spécifications** de la classe `Animal`, comme `Chien` (ou bien `Chat`, `Souris`, etc.) d'ajouter à ces propriétés communes de nouvelles propriétés qui les définissent de manière **plus précise**.

## Abstraction

Lorsqu'on développe une classe représentant le cas général et ses spécifications, la norme veut que le cas général serve de **point de concentration des éléments en commun des spécifications** (attributs et méthodes).

La classe mère ne représente alors généralement pas **des objets qui pourraient exister** en tant que tel. Si on reprend l'exemple du dessus, dans la nature il y a des chiens, des chats, des oiseaus mais pas des "Animal". Aucun animal dans la nature n'est de l'espèce "Animal".

Ainsi la classe mère, généralement **ne doit pas instancier des objets de son propre type**. C'est ce que l'on appelle l'**abstraction**. Pour rendre une classe abstraite on utilise le mot clé `abstract`.

L'abstraction **force la présence de classes filles** car la classe mère ne peut rien faire seule. Elle sert uniquement de point de concentration.

Le mot clé `abstract` peut également être utilisé pour **les méthodes** d'une classe abstraite. Ce sont alors des méthodes **sans code** qui doivent être **redéfinies** par les classes filles.

_Remarque : cette pratique peut sembler n'avoir aucun interêt pour le moment mais nous verrons plus tard son utilité._

Voici un exemple :

```
// la classe Animal est abstraite
// on ne peut donc pas créer des
// objets de type Animal
public abstract class Animal {

  // la classe possède les
  // attributs utiles à
  // toutes les classes filles
  private String nom;
  private int age;

  // une classe abstract peut quand
  // même avoir un/des constructeur(s) qui
  // seront utilisés via le mot clé super
  // dans les classes filles
  public Animal(String nom, int age) {
    this.nom = nom;
    this.age = age;
  }

  public String getNom(){
    return nom;
  }

  public abstract void crier();
}
```

Ici la classe `Animal` est abstract ce qui veut dire qu'**on ne peut pas directement créer des objets** de type `Animal`, on est contraint à créer une spécification de la classe `Animal`.

`getNom()` est un getter sur un attribut de la classe `Animal` ainsi, **peu importe le type d'objet** qui appelera cette méthode, elle fera toujours la même chose que ce soit pour un `Animal` ou pour un objet d'une classe fille.

Pour la méthode `crier()`, comme un objet de type `Animal` n'a pas de cri la classe `Animal` n'a **pas de raison de spécifier cette méthode**. Cependant il est sensé de la placer ici quand même car **tous les animaux ont en commun d'avoir un cri**.

Ainsi la méthode est `abstract` et ne possède pas de **corps de méthode**. La spécification sera à la charge des classes filles car **chaque espèce d'animal a son propre cri spécifique**.

Voici un exemple d'implémentation de la classe `Animal` :

```
public class Chien extends Animal {
  private String race;

  public Chien(String nom, int age, String race){
    super(nom, age);
    this.race = race;
  }

  public void crier(){
    System.out.println("OUAF OUAF");
  }
}
```

et un exemple de programme utilisant nos classes

```
public static void main (String[] args) {
  // la variable toto
  // est de type Chien et non pas
  // de type Animal
  Animal toto = new Chien("Polux", 7, "Skye Terrier");

  System.out.println(toto.getNom());
  toto.crier();
}
```

Voici ce que l'on obtient dans la console après execution du code ci-dessus :

`Polux`

`OUAF OUAF`

Dans cet exemple on voit l'un des premiers réels interêt de l'abstraction et l'héritage.

Il est possible d'instancier un objet de type abstrait dans notre programme, ici `Animal`, en y **injectant un objet concret** qui hérite de ce type abstrait, ici `Chien`.

Cette façon de faire permet de grandement réduire la **dépendance du programme principal vers les autres classes** et surtout la **redondance**.

Une variable de "type" `Animal` peut contenir des objets de types totalement différents tant que ces types hérite du type `Animal`.

## Réduire les relations

En structurant notre code en faisant l'usage des **classes mères plutot que directement leurs spécifications**, comme on l'a fait dans l'exemple du `main` au dessus, on peut **réduire les dépendances entre les classes** de notre code et le rendre plus **durable** et **modulable**.

Voici un exemple :

On veut représenter une animalerie qui pourrait contenir différents types d'animaux à savoir des chiens, des chats et des oiseaux. Sans notion d'héritage il faudrait faire ainsi :

```
public class Animalerie {
  // l'animalerie stocke
  // des animaux de chaque type
  // sous forme de liste
  private List<Chien> chiens;
  private List<Chat> chats;
  private List<Oiseau> oiseaux;
}
```

Il y a un gros problème avec cette solution. Si l'on souhaite un jour pouvoir rajouter de **nouveaux types d'animaux** (comme des poissons par exemple) ou en enlever de ceux déjà présent, il va falloir **modifier le code de toutes les classes qui utilises ces types d'animaux**, ici il n'y a que `Animalerie` mais dans un vrai programme il pourrait y en avoir bien plus.

Les classes manipulant des animaux **ne doivent pas dépendre des classes filles** de `Animal`.

Ainsi pour réduire les dépendances on préfèrera **manipuler en priorité la classe mère** c'est à dire le type le plus **général** et **abstrait**.

Le code de `Animalerie` deviendrait donc le suivant :

```
public class Animalerie {
  // une liste d'objet de
  // type Animal
  private List<Animal> animaux;
}
```

Ici, en partant du principe que les classes `Chien`, `Chat` et `Oiseau` héritent de la classe `Animal`, la liste `animaux` peut contenir des objets de **tous ces types**.

Si à l'avenir on **rajoute** ou bien on **enlève** des spécifications de la classe `Animal` donc des classes filles, le code de la classe `Animalerie` et des autres classes manipulant des animaux (comme le `main par exemple) **n'aura pas besoin d'être modifié**.

C'est en ça que l'abstraction et l'héritage permettent de produire du code modulable c'est à dire facilement modifiable.

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
