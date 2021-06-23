# Polymorphisme

## Introduction

Dans un lien d'**héritage** entre **une classe mère et sa classe fille**, la classe fille peut accéder aux méthodes de la classe mère.

Il est possible de construire les **méthodes** d'une certaines façons dans des liens d'héritage permettant de rendre le code **encore plus modulable**. C'est le **polymorphisme**.

## Principe

Pour utiliser le polymorphisme sur une méthode entre une classe mère et une de ses classes filles, il faut que la méthode soit **implémentée de la même façon dans les deux classes** du point de vue du compilateur.

Pour cela il faut que les méthodes possèdent le même **prototype**. Elles doivent possèder exactement le même **nom**, la même **valeur de retour**, les mêmes **propriétés** et les mêmes **paramètres** d'entrée **dans le même ordre**.

Le **code à l'intérieur de la méthode** peut quand à lui être **différent** entre la version de la classe mère et la version de la classe fille, c'est justement la tout l'interêt du polymorphisme.

Si toutes ces conditions sont réunies, un lien **polymorphique** est établie entre la version de la méthode dans la classe mère et la classe fille. On dit que la version de la méthode de la classe fille `Override` la version de la méthode de la classe mère.

Voici un exemple :

Une classe mère `Animal`

```
// la classe mère abstraite
// représentant un animal
// standard qui peut crier
public class Animal {

  public void cri(){
    System.out.println("OWO");
  }
}
```

Différentes spécifications de la classe `Animal`

```
public class Chien extends Animal {

  // la méthode cri de la classe Chien
  // possède le même prototype que
  // la version de la classe Animal
  // cependant le code à l'intérieur
  // est différent
  @Override
  public void cri() {
    System.out.println("OUAF");
  }
}
```

_Remarque : l'annotation `@Override` permet d'indiquer au compilateur qu'un lien polymorphique est établi sur la méthode annoté mais cette annotation n'est plus obligatoire aujourd'hui._

```
public class Chat extends Animal {

  // de même pour l'implémentation
  // de la méthode cri dans cette
  // classe Chat
  @Override
  public void cri() {
    System.out.println("MIAOU");
  }
}
```

```
public class Cochon extends Animal {
  // la classe Cochon est vide
  // elle n'apporte aucune
  // spécification en plus de celles
  // présente dans la classe Animal
}
```

Un programme mettant en scène le fonctionnenement du polymorphisme :

```
public static void main(String[] args){
  Animal pito = new Chien();
  Animal malo = new Chat();
  Animal porky = new Cochon();

  pito.cri();
  malo.cri();
  porky.cri();
}
```

Voici ce que l'on obtient dans la console après execution du code ci-dessus :

`OUAF`

`MIAOU`

`OWO`

Le lien polymorphique sur la méthode `cri()` indique au compilateur de préférer la version de la méthode **la plus proche hierarchiquement du type de l'objet appelant** la méthode.

Lorsqu'une classe **ne contient pas de spécification de la méthode appelée**, comme par exemple la classe `Cochon` qui ne contient pas d'implémentation de la méthode `cri()`, la version existante de la méthode **la plus proche dans la hierachie** sera utilisée, ici la version de la classe mère `Animal`.

_Remarque : le compilateur remonte dans la hierarchie autant de fois qu'il le faudra jusqu'à trouver une version valide a la méthode appelée._

Le polymorphisme est une mécanique qui fonctionne de paire avec l'abstraction et l'héritage. Pour un **même code** il est donc possible grâce au polymorphisme de produire des **résultats différents**.

Dans l'exemple du `main` au dessus, si l'on changeait le type des objets `pito` ou bien `porky`, le code complilerait toujours mais on obtiendrait des résultats différents.

Si l'on rajoutait de nouveaux types d'animaux comme un `Oiseau`, cette nouvelle classe fille pour redéfinir sa méthode `cri()` et fonctionner **sans avoir besoin de modifier le reste du code du programme**.

## Exercices

_Coming soon..._
