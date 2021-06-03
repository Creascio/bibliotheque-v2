# Polymorphisme

## Prérequis

+ [Abstraction et Héritage]()

## Introduction

Lorsqu'un programme contient des liens d'héritages, cela implique un lien entre les **implémentations des méthodes de la classe mère dans les classes filles**. Le polymorphisme est une mécanique de l'orientée objet qui permet d'encore plus réduire la **redondance** et la **dépendance entre les classes**.

## Principe

Pour utiliser le polymorphisme entre les méthodes d'une classe mère et d'une classe fille, il faut que les méthodes possèdent **le même prototype** c'est à dire le même nom, les mêmes paramètres d'entrée **dans le même ordre** et la même valeur de retour (la première ligne doit être identique).

**Exemple** :

```java
public class Animal {
    public void cri(){
        System.out.println("owo");
    }
}
```

```java
public class Chien extends Animal {
    @Override
    public void cri(){
        System.out.println("ouaf");
    }
}
```

```java
public class Chat extends Animal {
    @Override
    public void cri(){
        System.out.println("miaou");
    }
}
```

```java
public class Cochon extends Animal {

}
```

```java
public static void main(String[] args){
    Animal clubbo = new Animal();
    Animal pito = new Chien();
    Animal malo = new Chat();
    Animal porky = new Cochon();

    clubbo.cri();
    pito.cri();
    malo.cri();
    porky.cri();
}
```

*Output* :

`owo`

`ouaf`

`miaou`

`owo`

L'annotation `@Override` indique au compilateur de préférer la version de la méthode appelée plutot qu'une autre. Lorsqu'une classe ne contient pas de spécification de la méthode appelée, comme par exemple la classe `Cochon`, la version de la méthode la plus proche dans la hierachie sera utilisée, ici la version de la classe mère `Animal`.

## Exercices

+

## Suivants

+ [Abstraction et Interface]()
