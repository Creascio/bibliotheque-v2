# La gestion des exceptions

## Prérequis

+ []()

## Introduction

Les exceptions font partie intégrante du développement d'un programme. Elle indique le type et la provenance d'une erreur durant l'exécution du programme. Heuresement on peut se prévenir de ces erreurs et les gérer correctement pour ne pas que le programme plante.

## Les exceptions

Les exceptions sont des classes très simples qui stocke un **message** ou bien une **trace** qui sera inscrite dans le flux d'erreur de la console lorsque l'exception sera levée (lorsqu'elle sera provoquée). Elle stocke aussi la ou les **causes** potentielles qui pourraient se faire lever l'erreur. Si une exception est levée, un objet de sa classe sera créé puis traiter par le compilateur.
Pour gérer les exceptions dans notre programme on doit pouvoir les **lever nous même** si besoin, les **propager** puis les **capturer**.

Toutes exceptions possèdent les méthodes suivantes :

+ `getMessage()` : retourne le message correspondant à l'erreur
+ `printStackTrace()` : affiche l'exception ainsi que l'état de la pile d'exécution au moment de son appel

### Lever une exception : throw

On peut lever une exception dans le bloc de code d'une méthode en utilisant le mot clé `throw`.
Lorsque le contenu du code d'une méthode risque de lever une exception, on doit l'indiquer dans son prototype grâce au mot clé `throws`.
On construit donc la méthode de cette façon :

**Exemple** :

```java
// on indique quelles exceptions peuvent être levées
public float division(int diviseur, int dividende) throws ArithmeticException {
    // le cas d'utilisation de la méthode qui va poser problème
    if (diviseur == 0){  
        // on créer un objet de type ArithmeticException qui va levé une 
        // exception avec le message passé en paramètre
        throw new ArithmeticException("On ne peut pas diviser par 0 !"); 
    }
    return dividende / diviseur; // fonctionnement normal de la méthode
}
```

Ainsi on peut prévenir les risques de notre programme et provoquer des erreurs qui pourront être gérées plus tard. On peut également être ammené à créer nos propres erreurs. Par convention l'objet créer doit contenir "Exception" dans son nom.

**Exemple** :

```java
public class ErreurSaisieException extends Exception {

    public ErreurSaisieException(){
        super();
    }

    public ErreurSaisieException(String message){
        super(message);
    }
}
```

C'est de cette façon qu'on peut créer une exception customisée. Nous n'expliquerons pas dans ce cours comment cela fonctionne concrétement car cela implique des notions que nous verrons plus tard. Il faut savoir que l'on peut lever des exceptions existantes avec des messages customisés (comme dans l'exemple division) donc l'usage d'exception customisée est très spécifique et peu recommandé pour les débutants.

### Capturer les exceptions : try catch finally

Une fois que notre programme est capable de levé des exceptions, on doit pouvoir les capturer si besoin ou alors faire en sorte que le code s'exécute correctement si tou va bien. Pour tout cela on utilise le bloc de code `try catch finally`.

Le bloc `try` contient les appels de méthodes **suceptibles de lever des exceptions**
La clause `catch` contient le code à executer **si une exception à préciser est levée**
Le bloc `finally` contient le code qui sera executé **peu importe si une exception a été levée ou non** (facultatif)

**Exemple** :

```java
try {
    uneMethodeRisquée();
}
catch(ErreurSaisieException e){
    System.err.println(e.getMessage());
}
catch (IllegalArgumentException e){
    e.printStackTrace();
}
finally {
    resetApplication();
}
```

Si les méthodes invoquées dans le bloc `try` peuvent lever plusieurs méthodes on pourra soit traiter toutes les exceptions de la même façon dans un **multicatch** ou bien comme ici avec plusieurs catchs. Les clauses catch **ne devrait pas contenir d'algorithmie** et seulement des appels de méthodes liés aux exceptions.

**Exemple** : pour un multicatch

```java
try {
    uneMethodeRisquée();
}
catch (IllegalArgumentException | NumberFormatException | ArithmeticException 
  | IOException | FileNotFoundException | IndexOutOfBoundsException e) {
    e.printStackTrace();
}
```

*Remarque* : même si cela peut paraître lourd, il ne faut pas hésitez à utiliser un bloc try catch même pour un seul appel de méthode lorsque cela est nécessaire.

### Exercices

+ []()

### Suivants

+ []()
