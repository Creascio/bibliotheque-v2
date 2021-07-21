# Tests Unitaires

## Introduction

La phase de test est une partie non négligeable de tout projet informatique. Un développeur doit savoir utiliser les tests unitaires durant le développement d'un programme pour **s'assurer du fonctionnement de ces mécaniques**.

En Java les tests unitaires permettent notamment de s'assurer du **bon fonctionnement des classes d'un programme** en testant le fonctionnement des **méthodes** de ses classes dans **différentes circonstances**. Le but étant de soumettre le programme à **toutes les éventualités possibles**.

## Setup

Pour mettre en place des tests unitaires en Java, on utilise la bibliothèque `JUnit`. On peut rédiger un test unitaire dans un fichier prévu à cet effet appelé un `JUnit Test Case` (une fiche de test).

La création d'un Test Case entraîne automatiquement l'ajout de la bibliothèque `JUnit` dans le projet Java.

Généralement on place les Test Case dans **un package de test à part**. On peut aussi les créer dans **un dossier de test** en dehors du dossier `src`.

Pour créer un Test Case (sous Eclipse) : `Clic droit > New > JUnit Test Case`

## Utilisation des tests

Pour chaque classe que l'on souhaite tester, on créer un Test Case qui va contenir les tests nécessaires à la **couverture** des méthodes de la classe. La **couverture** d'une classe représente **tous les cas de figure possibles** lors de l'appel des méthodes de cette classe.

Un Test Case est alors une **classe** composée de tests qui sont eux-même des **méthodes**.

_Remarque : un Test Case peut donc, tout comme n'importe quelle classe avoir des attributs mais il n'est pas nécessaire d'avoir un constructeur pour celui-ci. Il faut voir le fonctionnement du Test Case comme assez proche d'un `main` qui peut avoir éventuellement des attributs `static`._

Pour fonctionner un Test Case se base sur des **annotations** que va interpréter le compilateur ce qui va lui permettre de comprendre que la méthode en question est un test. L'annotation en question est `@Test` (les annotations sont toujours précédées d'un `@` comme dans `@deprecated` ou `@Override`).

_Remarque : il existe d'autres annotations pour les tests que nous verrons plus loin dans ce cours._

Le principe de base d'un test et de comparer un **résultat attendu** au **résultat de la méthode** à tester.

Lors de l'exécution, chaque test sera lancé et indiquera s'il est **validé ou non**. S'il n'est pas validé le compilateur indiquera qu'elle a été **la valeur obtenue au lieu de celle attendue**.

Voici un exemple, on va ici créer une fausse classe à tester suivi du Test Case correspondant :

La classe à tester...

```
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

et le Test Case...

```
// par convention on nomme la classe de test "[nom_classe_a_tester]Test"
public class TotoTest {

    // l'annotation indique que la méthode
    // en dessous est un test
    // ce test va permettre de couvrir
    // la méthode addition de la classe Toto
    @Test
    public void additionTest(){

    }
}
```

Lors de l'éxécution de `TotoTest`, la méthode de test `additionTest` va être lancée, pour le moment elle ne fait rien mais nous allons voir maintenant comment construire un test efficace.

## Construction d'un test

Un test unitaire est divisé en trois parties :

- `Arrange`, **l'initialisation ou l'arrangement** : la section du test où l'on **instancie les objets** donc on aura besoin pour le test (cette phase n'est pas obligatoire)
- `Act`, **l'action** : la section qui contient les **appels de méthodes** ou les **modifications de valeurs éventuelles** nécessaire à la mise en situation du test (cette phase n'est pas obligatoire)
- `Assert`, **l'assertion** : la section qui contient la **vérification que l'on souhaite faire pour valider** le fonctionnement de la méthode.

_Remarque : nous mettrons en lumière cette organisation un peu plus tard avec un exemple._

## Les assertions

Lorsqu'on veut tester des méthodes, on utilise les **assertions** pour **comparer le résultat d'un morceau de code à un résultat attendu**. Il existe de nombreuses assertions pour tester différents cas de figure.

Toutes sont des méthodes qui nécessite le résultat attendu et/ ou la variable, l'objet, la méthode a tester.

Voici quelques exemples d'assertions :

- `assertEquals()` : validé si les deux valeurs sont **égales**
- `assertNotEquals()` : validé si les deux valeurs ne **sont pas égales**
- `assertTrue()` : validé si la condition booléenne testée est **vraie**
- `assertFalse()` : validé si la condition booléenne testée est **fausse**

_Remarque : ces assertions sont les plus simples et les plus communes, il en existe bien d'autres._

Voici un exemple d'usage des assertions avec la même classe à tester `Toto` :

```
// rappel de la classe à tester
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

Le Test Case :

```
public class TotoTest {

  // on souhaite tester que
  // l'objet Toto soit créé
  // correctement par le
  // constructeur
  @Test
  public void totoTest() {
    // on appelle le
    // constructeur qui
    // initialise la valeur
    // de la note
    Toto toto = new Toto();

    // deux façons de vérifier
    // que la note de l'objet toto
    // vaut bien 0
    assertEquals(0, toto.note);
    assertTrue(toto.note == 0);
  }
}
```

Voici un deuxième exemple un peu plus complet

```
public class TotoTest {

    @Test
    public void createTotoTest(){
      // Arrange
      // on instancie l'objet
      // toto.note = 0
      Toto toto = new Toto();

      // Act
      // on modifie une valeur
      // toto.note = 12
      toto.setNote(12);

      // Assert
      // 12 est bien
      // différent de 0,
      // le test valide
      assertNotEquals(0, toto.getNote());
    }

    @Test
    public void additionTest(){
        // Assert
        assertEquals(13, addition(6, 7));
    }
}
```

_Remarque : dans la pratique, on teste rarement le bon fonctionnement du constructeur ou bien encore des getters et des setters qui sont considérés comme acquis. On teste plutôt les méthodes propres aux programmes, qui contiennent de l'algorithmie._

_Remarque : il n'est pas vraiment possible de tester les méthodes impliquant de l'interface utilisateur et donc des attentes de saisie. De même pour les méthodes impliquant des valeurs aléatoires. Dans les deux cas on ne peut pas décider d'un résultat attendu pour faire une comparaison._

## Les annotations

Il existe d'autres annotations qui peuvent être utiles lors de l'implémentation de tests unitaires. Certains bloc de code peuvent être éxecuté **à des moments précis** durant l'éxecution du Test Case.

Voici une liste d'annotations utiles et courantes :

- `@BeforeAll` : le bloc de code est exécuté **une fois** au début de l'exécution du Test Case avant tous les autres tests
- `@BeforeEach` : le bloc de code est exécuté **avant chaque** test
- `@AfterAll` : le bloc de code est exécuté à la toute de l'éxécution fin après tout les tests.
- `@AfterEach` : le bloc de code est exécuté **après chaque** test

Ces annotations viennent remplacer l'annotation de base `@Test` et indique un fonctionnement différent au compilateur.

Voici un exemple :

```
public class TotoTest(){

    private Toto toto;

    @BeforeAll
    public static void init(){
      // instancie l'objet toto avant
      // qu'il soit utilisé ailleurs
      // dans d'autres tests
      toto = new Toto();
    }

    @BeforeEach
    public void reset(){
      // remet la note de toto à 0
      // comme lors de sa création
      // pour éviter les confusions
      // entre plusieurs tests
      toto.setNote(0);
    }

    @Test
    public void test1(){
      assertEquals(0, toto.getNote());
      // avant de finir le test on modifie la note de toto
      toto.setNote(12);
    }

    public void test2(){
      // le test valide, même si
      // on a changé la note de Toto à 12
      // dans le test précédent,
      // la méthode reset a été appelée
      // entre temps avant test2 et
      // ainsi la note de toto
      // a été remise à 0
      assertEquals(0, toto.getNote());

      // on modifie la note de toto
      // pour qu'elle vale 1+5
      toto.setNote(addition(1, 5));
      // 6 est bien différent de 0
      // test valide
      assertFalse(0, toto.getNote());
    }
}
```

_Remarque : l'exemple ci-dessus essaye de montrer la meilleure pratique de ces annotations, `BeforeAll` est très utile pour initialiser des éléments utiles à plusieurs tests comme des objets. `BeforeEach` (ou `AfterEach`) permet de remettre des éléments dans les mêmes conditions qu'avant un test, comme une réinitialisation._

## Les tests paramétrés

Grâce aux annotations, il est possible de créer des tests paramétrés qui permettent de soumettre **plusieurs valeurs au même test** en une seule fois. Le test va fonctionner alors similairement à une boucle `forEach` qui va éxécuter le **même code pour chaque valeur** donnée en paramètre.

Pour cela on utilise l'annotation `@ParameterizedTest` à la place de `@Test`.

Il existe plusieurs façons de fournir un ensemble de valeurs à tester au test paramétré :

- Pour tester **une valeur à la fois**, on utilise `@ValueSource` suivi d'un **tableau contenant les valeurs**
- Pour tester **une famille de valeur d'un coup**, on utilise `@CsvSource` suivi d'**un tableau contenant les familles** de valeurs (couples, triplets, etc.)

_Remarque : pour faire une comparaison avec une méthode traditionnelle, `@ValueSource` indique que la méthode nécessite un seul paramètre d'entrée pour fonctionner alors que `@CsvSource` indique qu'il en faut plusieurs._

Voici un exemple :

On part du principe qu'on a codé une méthode `multiplication(nombre1, nombre2)` qui permet de multiplier `nombre1` par `nombre2` et que l'on souhaite la tester sur plusieurs valeurs.

```
public class CalculTest {

  // un test paramétré avec
  // ValueSource qui indique qu'on
  // ne teste qu'une valeur en
  // entrée à la fois.
  // on va donc ici faire le test
  // pour chaque valeur dans ints
  // donc '1', puis '2', etc.
  @ParameterizedTest
  @ValueSource(ints = { 1, 2, 3, 4 })
  // on passe en paramètre de
  // la méthode un seul int à la fois
  public void multiplicationTest1(int arg){

    // on multiplie la valeur par 0
    // et on stocke dans result
    int result = multiplication(0, arg);

    // on s'assure que result
    // contienne bien 0
    assertEquals(0, result);
  }
}
```

Ici le test revient à vérifier que pour **n'importe quelle valeur de `ints`**, si on la multiplie par 0, le résultat de cette multiplication vaut bien 0.

Vous n'êtes pas sans savoir que 1x0 vaut 0, tout comme 2x0, etc. Le test valide pour toutes les valeurs.

_Remarque : pour qu'un test paramétré valide totalement il faut que toute les valeurs en entrée soient validées par le test._

Voyons maintenant un test paramétré similaire sur la méthode `multiplication` mais avec des familles de valeurs en entrée. Chaque famille est composée des deux nombres à multiplier ainsi que du résultat attendu de cette multiplication.

```
public class CalculTest {

  // un test paramétré avec
  // CsvSource qui indique qu'on
  // teste une famille entière
  // de valeurs (entre crochets)
  // à la fois.
  @ParameterizedTest
  @CsvSource({ "1,1,1", "2,2,4", "3,4,12" })
  // on passe en paramètre de
  // la méthode les trois
  // membres de la famille dans l'ordre
  public void multiplicationTest2(int firstNumber, int secondNumber, int expectedResult) {

    // on multiplie le premier par le deuxième
    // et on stocke dans result
    int result = multiplication(firstNumber, secondNumber);

    // on s'assure que le résultat
    // de la multiplication donc result
    // est égal au résultat attendu
    // donnée par la famille à tester
    assertEquals(expectedResult, result);
  }
}
```

Pour donner un exemple de comment se déroule `multiplicationTest2`, pour la famille de valeurs `"3, 4, 12"`, on souhaite s'assurer que `3 x 4 = 12` (ce qui est le cas je vous assure).

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
