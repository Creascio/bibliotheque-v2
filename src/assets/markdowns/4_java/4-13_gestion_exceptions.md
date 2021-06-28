# Gestion des Exceptions

## Introduction

Les exceptions font partie intégrante du développement d'un programme, sauf si vous êtes très doué.

Elles indiquent **le type et la provenance d'une erreur** durant l'exécution du programme. Heureusement on peut se prévenir de ces erreurs et les gérer correctement pour ne pas que le programme **plante**.

## Les Exceptions

Les `Exceptions` sont des classes très simples associée à un type d'erreur, à une cause d'un problème est sera levée lorsque les conditions seront remplies pour. Les exceptions existantes ont des noms évocants l'erreur qu'elle indique.

Ces exceptions stockent en attribut un **message** ou bien une **trace** qui sera inscrite dans le **flux d'erreur** de la console lorsque l'exception sera levée (lorsqu'elle sera provoquée).

Toutes exceptions possèdent les méthodes suivantes :

- `getMessage()` : retourne le **message** correspondant à l'erreur
- `printStackTrace()` : affiche l'exception ainsi que **l'état de la pile d'exécution** au moment de son appel

Pour gérer les exceptions dans notre programme on **lève** nous même une exception (on provoque son appel) dans du code qui pourrait remplir **les conditions de levée de celle-ci**. Il faut ensuite la **propager** en dehors du code émetteur vers le code capable de l'**attraper** pour pouvoir la traiter correctement, toujours pour éviter que le programme plante.

Toutes ces actions sur les exceptions sont rendues possibles par différents outils que nous allons voir maintenant.

### Lever une exception : throw

On peut lever une exception dans le bloc de code d'une méthode en utilisant le mot clé `throw`.

Lorsque le contenu du code d'une méthode **risque de lever une exception**, on doit l'indiquer dans son prototype grâce au mot clé `throws`.

On construit donc la méthode de cette façon :

```
// la méthode est susceptible de faire planter
// le programme dans des conditions spécifiques
// elle lèvera une exception sur le calcul arithmétique
// de la division d'où l'erreur ArithmeticException
public float division(int diviseur, int dividende) throws ArithmeticException {

    // le cas d'utilisation de la méthode
    // division posant problème est dans
    // le cas d'une division par 0
    // ce qui est impossible
    if (diviseur == 0){
        // on créer un objet de type ArithmeticException qui va levé une
        // exception avec le message passé en paramètre
        throw new ArithmeticException("On ne peut pas diviser par 0 !");
    }

    // sinon la méthode fonctionne correctement
    // dans tous les autres cas
    return dividende / diviseur;
}
```

_Remarque : l'exemple ci-dessus veut montrer la meilleure pratique pour l'usage des `throw`. Il est toujours préférable d'isoler le ou les cas d'utilisation de la méthode dans des conditions `if` qui vont levé une exception. Ensuite on code en dessous le fonctionnement normal de la méthode. C'est la solution la plus efficace pour traiter les erreurs ainsi._

Ainsi on peut **prévenir les risques** dans notre programme et provoquer des erreurs qui pourront être gérées plus tard(ce qui n'est pas encore le cas).

On peut également être ammené à créer nos **propres erreurs**.

### Exceptions customisées

Les exceptions customisées sont des classes de la famille `Exception` que l'on aurait codé soit même dans notre programme. Elles suivent les mêmes règles que les autres exceptions.

Par convention, leur nom se finit par `Exception` comme pour les autres exceptions.

Voici un exemple :

```
public class ErreurSaisieException extends Exception {

  // renvoie un objet de ce type
  // d'exception sans message
  // particulier
  public ErreurSaisieException(){
    super();
  }

  // renvoie un exception avec
  // un message customisable
  public ErreurSaisieException(String message){
    super(message);
  }
}
```

_Remarque : Nous ne nous atterderons pas dans ce cours sur le fonctionnement du mot clé `extends`, vous devez seulement savoir qu'il est nécessaire au fonctionnement de toute exception._

L'usage d'exceptions customisées est possible mais il n'est pas recommandé car il n'apporte **aucune fonctionnalité pratique**.

Il est possible de générer des exceptions existantes avec vos propres messages sans passé par des exceptions de votre création.

Le seul interêt des exceptions custom est que, sous certains IDE, elles **forcent à inscrire le** `throws` dans les méthodes qui lèvent ces exceptions ce qui peut permettre aux débutants de ne pas oublier de le faire.

Si vous n'êtes pas à l'aise avec les exceptions, l'usage le plus simple de celles-ci est de, en toutes circonstances, lever des exceptions de type `IllegalArgumentException` (l'exception la plus classique) avec ou sans des messages personnalisés.

### Capturer les exceptions : try catch finally

Une fois que notre programme est capable de lever des exceptions, on doit pouvoir les **capturer** pour faire en sorte que le code **s'exécute correctement si tout va bien**. Pour tout cela on utilise le bloc de code `try catch finally` :

- `try` : contient les appels de méthodes **suceptibles de lever des exceptions**
- `catch` : contient le code à executer **si une exception à préciser est levée**
- `finally` : contient le code qui sera executé **peu importe si une exception a été levée ou non** ensuite (facultatif)

Les clauses catch **ne devrait pas contenir d'algorithmie** et seulement des appels de méthodes liés aux exceptions.

_Remarque : par soucis de transparence, le cours montre l'existence du bloc `finally` mais honnêtement, il ne sert à rien puisqu'il ne dépend d'aucune condition pour s'éxécuter._

Voici un exemple :

```
// on tente d'éxécuter
// un morceau de code
try {
  // la méthode susceptible
  // de faire planter
  // le programme et qui
  // peut faire levé une
  // exception de type
  // ErreurSaisieException
  uneMethodeRisquée();
}
// dans le cas où le
// contenu du bloc try
// lève une exception du
// type indiqué
catch(ErreurSaisieException e){
  // on affiche le message
  // de l'exception levée
  // dans le flux d'erreur
  System.err.println(e.getMessage());
}
// si une exception de
// n'importe quel autre
// type venait à être
// levée
catch (Exception e){
  e.printStackTrace();
}
// dans tous les cas
// on éxécute le contenu
// de ce bloc
finally {
  resetApplication();
}
```

_Remarque : si aucune exception n'est levée par `uneMethodeRisquée()`, le programme passe directement au bloc `finally` en sautant les blocs `catch`._

Si les méthodes invoquées dans le bloc `try` peuvent lever plusieurs méthodes on pourra traiter les exceptions comme ici avec plusieurs catchs. Il est également possible, dans le cas où, peut importe l'erreur, on souhaite appliquer le même code, d'utiliser un `multicatch`.

Voici un exemple :

```
try {
  uneMethodeRisquée();
}
// un multicatch qui tente
// de capturer une
// multitude d'erreurs
// différentes
catch (IllegalArgumentException | NumberFormatException | ArithmeticException e) {
  e.printStackTrace();
}
```

_Remarque : il suffit qu'une seule exception d'un type présent dans le multicatch soit levée pour executer le code de celui-ci._

_Remarque : même si cela peut paraître lourd, il ne faut pas hésitez à utiliser un bloc try catch même pour un seul appel de méthode à risque lorsque cela est nécessaire._

### Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
