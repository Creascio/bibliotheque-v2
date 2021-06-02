# Les interfaces

## Prérequis

+ []()

## Introduction

Il existe d'autres moyens que les liens d'héritage pour rendre durable du code java. On peut établir des **contrats** avec les classes pour qu'elles implémente des **comportements**. Cela se fait au travers des **interfaces**.

## Principe

Une interface n'est pas une classe, elle contient uniquement les **prototypes des méthodes** qui devront être implémenté par la classe qui signe le contrat. On représente ce contrat par le mot clé `implements`.

**Exemple** :

```java
public interface Machine {
    public void démarrer();
    public void veille();
    public void arrêter();
}
```

```java
public class Ordinateur implements Machine {
    private int id;

    public Ordinateur(int id){
        this.id = id;
    }

    @Override
    public void démarrer(){
        System.out.println("Démarrage en cours...");
    }

    @Override
    public void veille(){
        System.out.println("Mise en veille...");
    }

    @Override
    public void arrêter(){
        System.out.println("Arrêt en cours...");
    }
}
```

Dans cet exemple, la classe `Ordinateur` est contrainte à spécifier les méthodes de l'interface `Machine`.

Une interface ne peut pas contenir d'attributs, **on ne peut pas instancier des objets du type de l'interface**. Une classe peut implémenter **plusieurs interfaces à la fois**. Une classe peut `extends` une classe et en même temps `implements` une interface. Une interface peut permettre de réduire les dépendances également :

**Exemple** :

```java
public class Usine {
    // cette liste peut contenir des objets de n'importe 
    // quel type qui implémente l'interface machine (ex: ordinateur, etc.)
    private List<Machine> machines; 
}
```

```java
public static void main(String[] args){
    // on ne peut pas instancier d'objet de type Machine mais on peut 
    // s'en servir pour instancier des implémentations
    Machine machine = new Ordinateur(42);  
}
```

## Héritage ou Interface ?

L'héritage et l'interface sont des mécanismes qui **ne sont pas incompatibles**, ils ne répondent juste pas aux mêmes problématiques. On choisira l'héritage lorsqu'on a besoin de **représenter un cas général** donc les propriétés pourront être spécifiées dans des classes filles. On choisira l'interface pour décrire **les comportements abstraits** d'une catégorie d'objets.

## Exercices

+ []()

## Suivants

+ []()
