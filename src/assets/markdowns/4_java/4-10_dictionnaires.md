# Dictionnaires

## Introduction

Les dictionnaires ou `Map` sont des structures de données complexes qui permettent **d'associer une clé à une valeur**.
**Il ne peut pas y avoir plusieurs fois la même clé** cependant.

Cette structure fonctionne de manière identique à un vrai dictionnaire pour faire une comparaison pratique. On associe à la lettre 'A' (qui est la clé), tous les mots commençant par cette lettre (les valeurs)

Nous allons voir dans ce cours l'implémentation la plus courante de `Map` en Java : `HashMap`.

## Le dictionnaire HashMap

Une `HashMap` est un dictionnaire qui **hache les données** qu'il contient c'est à dire qu'il **crypte les données** pour les rendre **plus courtes en mémoire** et accélerer la recherche dans le dictionnaire.

L'**ordre de parution** des valeurs du dictionnaire n'est pas garanti lors d'un parcours c'est à dire qu'elles n'apparaitront **pas forcément dans l'ordre dans lequel elles ont été placé à la base**.

On peut parcourir **la liste des clés** d'un dictionnaire, ou bien **la liste des valeurs** ou bien encore une **liste des associations clé-valeur**.

_Remarque : un dictionnaire ne peut stocker que des objets que ce soit les clés ou les valeurs, ainsi si l'on souhaite stocker des valeurs de types primitifs on utilisera les classes correspondantes tout comme pour les listes (ex : Integer pour int, Boolean pour boolean, Character pour char, etc.)._

### Les méthodes usuelles

Voici une liste de quelques méthodes utiles de la classe `HashMap` :

- `put(key, value)` : ajoute une association `key` -> `value` dans le dictionnaire, si une valeur pour la clé `key` existe déja dans le dictionnaire alors elle sera écrasée par la nouvelle `value`
- `get(key)` : retourne la valeur associé à la clé `key` si cette clé existe dans le dictionnaire
- `remove(key)` : supprime la clé `key` ainsi que sa valeur du dictionnaire
- `size()` : retourne le nombre d'association clé-valeur dans le dictionnaire (ou plus simplement le nombre de clés)
- `clear()` : supprime complétement tout le contenu du dictionnaire

Pour parcourir le dictionnaire on utilise :

- `keySet()` : permet de parcourir la liste de clé du dictionnaire
- `values()` : permet de parcourir la liste de valeurs du dictionnaire

Voici un exemple d'utilisation :

```
// on créé un dictionnaire qui
// associe un mot a un caractère
Map<Character, String> dico = new HashMap<>();

// on ajoute la clé 'a' associée
// au mot 'abricot' qui sera sa valeur
dico.put('a', "abricot");
// on ajoute la clé 'c' associée
// au mot 'creascio' qui sera sa valeur
dico.put('c', "creascio");

// on parcourt toutes les clés
// du dictionnaire
for (Character c : dico.keySet()){
    // pour chaque clé dans le dictionnaire
    // on affiche cette clé et la valeur associée
    System.out.println("Key :" + c + " value : " + dico.get(c));
}
```

Dans l'exemple ci-dessus notre dictionnaire n'est pas très pratique car il ne peut associer **qu'un seul mot à une lettre**.

Pour pouvoir répresenter un dictionnaire plus fidèle on devrait faire en sorte que la valeur associée à une lettre soit **une liste de mots** comme dans l'exemple ci-dessous :

```
// une liste de mots
// commençant par
// la lettre 'c'
List<String> motsQuiCommenceParC = new ArrayList<>() {{
    // on ajoute directement quelques mots qui commencent
    // par la lettre c
    add("clubby");
    add("clubbo");
}};

// le dictionnaire
Map<Character, ArrayList<String>> dico = new HashMap<>();

// on créer une association
// clé valeur entre la lettre
// 'c' et notre liste de mots
// commençant par 'c' dans le dico
dico.put('c', motsQuiCommenceParC);
```

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
