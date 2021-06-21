# Abstraction et Héritage

## Introduction

Le but principal du java est de pouvoir produire du code **le plus généraliste possible** pour pouvoir **faciliter la maintenance** et les **modifications ultérieures**. Ainsi on essaye toujours de coder en partant du **cas le plus général** vers **les spécialisations éventuelles** de ce cas en gardant toujours en tête que le but est de supprimer la **redondance de code**. Cette façon de coder entraîne une notion de **hiérarchie entre les classes** d'où la notion d'héritage.

## Principe

L'héritage repose sur une relation **"mère-fille"** entre les classes cette relation est representée par le mot clé `extends` dans la signature d'une classe.

**Exemple** :

```java
public class Chien extends Animal {
    // code goes here
}
```

Ce qu'il faut comprendre ici c'est que la classe `Chien` hérite de la classe `Animal`. Un chien **EST UN** animal. En java une classe ne peut hériter au maximum que d'**une seule autre classe**. Ce n'est pas le cas en C++ par exemple où l'on peut créer des liens d'héritages multiples entre les classes. Cependant les relations sont **infinies en profondeur**, c'est à dire qu'une classe peut hérité d'une classe qui elle même hérite d'une autre classe et ainsi de suite sans limite.

Un lien d'héritage implique que la classe fille **possède les attributs de la classe mère** sans pour autant avoir besoin de les respécifier. La classe fille peut également **faire appel aux méthodes de la classe mère**. Pour faire appel à des éléments de la classe mère on utilise le mot clé `super`. `super` représente l'**objet père** la où `this` représente l'objet courant.

**Exemple** :

```java
public class Animal {
    private String nom;
    private int age;

    public Animal(String nom, int age){
        this.nom = nom;
        this.age = age;
    }

    public void manger(){
        System.out.println("MIAM MIAM")
    }
}
```

```java
public class Chien {
    private String race;

    // le chien a implicitement un nom et un age car c'est un animal
    public Chien(String nom, int age, String race){
        super(nom, age); // fait appel au constructeur de la classe mère
        this.race = race;
    }

    public void manger(){
        super.manger(); // fait appel à la méthode manger de la classe mère
    }
}
```

```java
public static void main(String[] args){
    Chien doggo = new Chien("paf", 4, "Labrador");
    doggo.manger();
}
```

*Output* :

`MIAM MIAM`

## Abstraction

Lorsqu'on développe nos classes représentant le cas général et ses spécifications, la norme veut que le cas général serve de **point de concentration des éléments en commun des spécifications** (attributs et méthodes) mais il n'a pas pour but d'être instancier lui même. Si on reprend l'exemple du dessus, dans la nature il y a des chiens, des chats, des oiseaus mais pas des animaux. Aucun animal dans la nature n'est de l'espèce Animal.

Dans ce cas on utilise l'abstraction pour **forcer à créer une relation d'héritage** entre les classes. Ainsi une classe peut être abstraite mais aussi ces méthodes. Pour cela on utilise le mot clé `abstract`.

**Exemple** :

```java
public abstract class Animal {
    private String nom;
    private int age;

    // une classe abstract peut quand même avoir des constructeurs qui
    // seront utilisés via super dans les classes filles
    public Animal(String nom, int age){
        this.nom = nom;
        this.age = age;
    }

    public String getNom(){
        return nom;
    }

    public abstract void crier(); // a spécifier dans les classes filles
}
```

Ici la classe `Animal` est abstract ce qui veut dire qu'**on ne peut pas directement créer des objets** de type `Animal`, on est contraint à créer une spécification de la classe `Animal`. Pour ce qui est des méthodes, `getNom()` est un getter sur un attribut de la classe ainsi peu importe quel objet l'appelera elle fera toujours la même chose que ce soit pour un `Animal` ou pour un objet d'une classe fille. Pour ce qui est de la méthode `crier()` comme un objet de type `Animal` ne peut pas exister, cet objet n'a pas de cri et ainsi la classe `Animal` n'a pas de raison de spécifier cette méthode. Ainsi la méthode est `abstract` et ne possède pas de **corps de méthode**. La spécification sera à la charge des classes filles car chaque espèce d'animal a son propre cri.

**Exemple** :

```java
public class Chien extends Animal {
    private String race;

    public Chien(String nom, int age, String race){
        super(nom, age);
        this.race = race;
    }

    public void crier(){
        System.out.println("OUAF !");
    }
}
```

```java
public static void main (String[] args){
    // on créé un animal de type Chien
    Animal toto = new Chien("Polux", 7, "Skye Terrier");
}
```

Ici on voit la puissance de l'héritage qui permet d'éviter la redondance de code pour les attributs et les méthodes.

## Réduire les relations

En structurant notre code avec l'usage des classes mères plutot que leurs spécification on peut **réduire les dépendances entre les classes** de notre code et le rendre plus durable.

**Exemple** :

On veut représenter une animalerie qui peut contenir tous types d'animaux, la mauvaise façon de faire serait la suivante :

```java
public class Animalerie {
    private List<Chien> chiens;
    private List<Chat> chats;
    private List<Oiseau> oiseaux;
}
```

Si on est ammené un jour à rajouter de nouveaux types d'animaux ou en supprimer certains. Il va falloir **modifier le code de toutes les classes qui utilises ces types d'animaux** (ici il n'y a que `Animalerie` mais le nombre peut très vite grimper). Ainsi pour réduire les dépendances on préfère utiliser les types les plus généraux si possible, comme ceci :

```java
public class Animalerie {
    private List<Animal> animaux;
}
```

Ici, en partant du principe que les classes `Chien`, `Chat` et `Oiseau` héritent de la classe `Animal`, la liste `animaux` peut contenir des objets de tous ces types. Si à l'avenir on rajoute ou bien on enlève des spécifications de la classe `Animal`, le code des classes utilisant des animaux n'aura pas besoin d'être modifié pour continuer de fonctionner... c'est magique !!

## Exercices

*Coming soon...*
