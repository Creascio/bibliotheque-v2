# Abstraction et Interface

## Introduction

Il existe d'autres mécaniques que les liens d'héritage pour rendre plus durable et modulable du code Java.

On peut établir des **contrats** avec les classes pour qu'elles implémente des **comportements** donc des méthodes. Cela se fait au travers des **interfaces** qui permettent de réunir les comportements en commun entre plusieurs classes.

_Remarque : il ne faut pas confondre les interfaces de programmation avec des interfaces graphiques._

## Principe

Une interface **n'est pas une classe**, elle contient uniquement les **prototypes des méthodes** qui devront être implémenté par la classe qui signe un "contrat" avec l'interface.

On représente ce contrat par le mot clé `implements`. Une classe qui **implémente une interface** doit **obligatoirement** spécifié les méthodes du contrat de l'interface. Cette spécification se repose sur le **polymorphisme**.

Voici un exemple :

L'interface `Machine` décris un comportement composé de trois méthodes

```
public interface Machine {
  public void démarrer();
  public void veille();
  public void arrêter();
}
```

_Remarque : une interface peut contenir n'importe quelles méthodes sauf des constructeurs._

La classe `Ordinateur` possède le comportement d'une machine, elle implémente donc `Machine`

```
public class Ordinateur implements Machine {
  private int id;

  public Ordinateur(int id) {
    this.id = id;
  }

  // la classe Ordinateur doit obligatoirement
  // implémenter les méthodes démarrer,
  // veille et arrêter
  @Override
  public void démarrer() {
    System.out.println("Démarrage en cours...");
  }

  @Override
  public void veille() {
    System.out.println("Mise en veille...");
  }

  @Override
  public void arrêter() {
    System.out.println("Arrêt en cours...");
  }
}
```

Dans cet exemple, la classe `Ordinateur` est contrainte à spécifier les méthodes de l'interface `Machine`. Il en irait de même pour **n'importe qu'elle autre classe** implémentant l'interface `Machine`, le but étant, de **réunir du code** derrière une seule entité pour éviter encore et toujours la **redondance**.

Une interface **ne peut pas contenir d'attributs**, comme ce n'est pas une classe **on ne peut pas instancier des objets du type de l'interface**. Il n'y pas de constructeur pour les interfaces.

Une classe peut implémenter **plusieurs interfaces à la fois**. Une classe peut hériter d'une classe et en même temps implémenter une ou plusieurs interfaces.

Voici un exemple de formulation d'une telle classe :

```
public classe Voiture extends Vehicule implements Machine, Transport {
  // la classe Voiture hérite de la classe Vehicule
  // et implémente les interfaces Machine et Transport
}
```

_Remarque : il est obligatoire de placer la notion d'héritage éventuelle donc `extends` avant les implémentations d'interface donc le `implements`. On met toujours une virgule entre les interfaces implémentées s'il y en a plusieurs._

Bien qu'il ne soit pas possible de manipuler des objets du type d'une interface, les interfaces peuvent quand même être utilisées pour réduire les dépendandes tout comme l'héritage.

Voici un exemple :

```
public class Usine {
  // cette liste peut contenir des objets de n'importe
  // quel type qui implémente l'interface Machine
  // comme Ordinateur par exemple
  private List<Machine> machines;
}
```

La même mécanique dans un `main`

```
public static void main(String[] args){
  // on ne peut pas instancier d'objet
  // de type Machine mais on peut
  // s'en servir pour instancier
  // des objets de type implémentant
  // cette interface
  Machine machine = new Ordinateur(42);
}
```

## Héritage ou Interface ?

L'héritage et l'interface sont des mécanismes qui **ne sont pas incompatibles**, ils ne répondent juste pas aux mêmes problématiques.

On choisira l'héritage lorsqu'on a besoin pour des objets de **représenter un cas général** dont les propriétés pourront être **spécifiées dans des classes filles**. L'héritage est d'autant plus utile pour éviter la redondance pour les **attributs**. Il est possible d'utiliser l'**abstraction** pour les méthodes en communs qui n'ont pas besoin d'un cas général.

On choisira l'interface pour décrire **les comportements abstraits** d'une catégorie d'objets. Les interfaces sont utiles tout particulièrement pour éviter la redondance sur des méthodes entre plusieurs classes. De plus contrairement à l'héritage, elles **forcent les classes** à implémenter les méthodes là où une classe mère n'oblige en rien une classe fille à spécifier des méthodes.

## Exercices

_Coming soon..._
