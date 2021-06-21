# Tests Unitaires

## Introduction

La phase de test est une partie non négligeable de tout projet informatique. Les tests unitaires permettent de s'assurer du bon fonctionnement des méthodes de notre programme.

## Setup

Pour mettre en place des tests unitaires en Java, on utilise la bibliothèque **JUnit**. On peut rédiger un test unitaire dans un fichier prévu à cet effet appelé un **JUnit Test Case**. La création d'un test case entraîne généralement l'ajout de la bibliothèque JUnit dans le projet java. Généralement on place les test case dans un package de test à part. On peut aussi les créer dans un dossier de test en dehors du dossier src.

Pour créer un test case (sous Eclipse) : **Clic droit > New > JUnit Test Case**

Pour chaque classe que l'on souhaite tester, on créer un test case qui va contenir les tests nécessaires à la **couverture** des méthodes de la classe. La **couverture** d'une classe représente tous les cas de figure possible lors de l'appel des méthodes de la classe.

Un test case est alors une classe composée de tests qui sont des méthodes. Lors de l'exécution, chaque test indiquera s'il est validé ou non. S'il n'est pas validé une raison sera indiquée.

*Remarque* : un test case peut donc avoir des attributs

On utilise les annotations java pour faire marcher les tests case. Les annotations sont des indications au compilateur sur la nature du bloc de code annoté.

**Exemple** : on va ici créer une fausse classe à tester suivi du test case correspondant

```java
// une classe exemple
public class Toto {

    private int note;

    public Toto(){
        this.note = 0;
    }

    public int addition(int nombre1, int nombre2){
        return nombre1 + nombre2;
    }
}
```

```java
// par convention on nomme la classe de test [nom_classe_a_tester]Test
public class TotoTest {

    @Test // l'annotation indique que la méthode en dessous est un test
    // ce test va permettre de couvrir la méthode addition
    public void additionTest(){

    }
}
```

## Construction

Un test unitaire est divisé en trois parties :

+ l'initialisation ou l'arrangement est la section du test ou on instancie les objets donc on aura besoin (pas obligatoire)
+ l'action est la section qui contient les appels de méthodes ou les modifications de valeurs éventuelles (pas obligatoire)
+ l'assertion est la section qui contient la vérification que l'on souhaite faire pour valider le fonctionnement de la méthode

## Les assertions

Lorsqu'on veut tester des méthodes, on utilise les assertions pour comparer le résultat d'un morceau de code au résultat attendu. Il existe de nombreuses assertions pour tester différents cas de figure. Toutes sont des méthodes qui nécessite le résultat attendu et/ ou la variable, l'objet, la méthode a tester

Voici quelques exemples d'assertions :

+ `assertEquals()` : validé si les deux valeurs sont égales
+ `assertNotEquals()` : validé si les deux valeurs ne sont pas égales
+ `assertTrue()` : validé si la condition booléenne testée est vraie
+ `assertFalse()` : validé si la condition booléenne testée est fausse

*Remarque* : ces assertions sont les plus simples et les plus communes, il en existe bien d'autres

**Exemple** :

Un exemple d'usage des assertions

```java
public class TotoTest {

    @Test
    public void totoTest(){
        Toto toto = new Toto();
        // la note de toto a été initialisée à 0 dans le constructeur,
        // le test est validé
        // Premier paramètre = resultat attendu
        // Deuxième paramètre = élément a tester
        assertEquals(0 , toto.note)
        // une autre façon de tester la même égalité
        assertTrue(toto.note == 0)
    }
}
```

Un exemple plus complet

```java
public class TotoTest {

    @Test
    public void createTotoTest(){
        // Arrange
        Toto toto = new Toto();

        // Act
        toto.setNote(12);

        // Assert
        assertNotEquals(0, toto.getNote());
    }

    @Test
    public void additionTest(){
        // Assert
        assertEquals(13, addition(6, 7));
    }
}
```

## Les annotations

Il existe d'autres annotations qui peuvent être utiles lors de l'implémentation de tests unitaires. Certains bloc de code peuvent être éxecuté à des moments précis durant l'éxecution du test case.

Voici une liste d'annotations utiles et courantes :

+ `@BeforeAll` : le bloc de code est exécuté **une fois** au début de l'exécution avant tous les autres tests
+ `@BeforeEach` : le bloc de code est exécuté **avant chaque** test
+ `@AfterAll` : le bloc de code est exécuté à la toute fin après tout les tests.
+ `@AfterEach` : le bloc de code est exécuté **après chaque** test

**Exemple** :

```java
public class TotoTest(){

    private Toto toto;

    @BeforeAll
    public static void init(){
        // instancie l'objet toto avant qu'il soit utilisé ailleurs
        toto = new Toto();
    }

    @BeforeEach
    public void reset(){
        // remet la note de toto à 0 comme lors de sa création
        // pour éviter les confusions entre plusieurs tests
        toto.setNote(0);
    }

    @Test
    public void test1(){
        assertEquals(0, toto.getNote());
        // // avant de finir le test on modifie la note de toto
        toto.setNote(12);
    }

    public void test2(){
        // le test valide, même si on a changé la note de Toto à 12
        // dans le test précédent, la méthode reset a été appelée
        // avant test2 et ainsi la note de toto a été remise à 0
        assertEquals(0, toto.getNote());

        // juste pour montrer que pourquoi pas
        toto.setNote(addition(1, 5));
        assertFalse(0, toto.getNote()); // le test valide
    }
}
```

## Test paramétré

Grâce aux annotations, il est possible de créer des tests paramétrés qui pourront vérifier la même assertion pour plusieurs valeurs entrantes de manière plus élégante.
Pour cela on utilise l'annotation `@ParameterizedTest` à la place de `@Test`.

Il faut ensuite pouvoir donner la liste source des valeurs à tester.

+ Si le test ne prend qu'un seul paramètre d'entrée on utilise `@ValueSource`
+ Si le test prend plusieurs paramètres d'entrée on utilise `@CsvSource`

**Exemple** :

On part du principe qu'on a coder une méthode `multiplication(int, int)` qui permet de multiplier deux nombres entiers passés en entrée.

```java
public class CalculTest {

    @ParameterizedTest
    @ValueSource(ints = { 1, 2, 3, 4 })
    public void multiplicationTest1(int arg){
        // on multiplie un par un les valeur s de ints par 0
        // et on stocke le tout dans resultat
        int result = multiplication(0, arg);
        // on s'assure que multiplier par 0 rend toujours bien 0
        assertEquals(0, result);
    }

    @ParameterizedTest
    // un couple de valeur "x,y,z" tel que x * y = z
    @CsvSource({ "1,1,1", "2,2,4", "3,4,12"})
    public void multiplicationTest2(int firstNumber, int secondNumber,
       int expectedResult){
        int result = multiplication(firstNumber, secondNumber);
        // on s'assure qu'on obtient le résultat attendu
        assertEquals(expectedResult, result);
    }
}
```

## Exercices

*Coming soon...*
