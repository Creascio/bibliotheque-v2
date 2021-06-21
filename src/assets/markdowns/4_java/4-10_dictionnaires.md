# Dictionnaires

## Introduction

Les dictionnaires ou Map sont des structures de données plus complexes qui permettent **d'associer une clé à une valeur**. Il ne peut pas y avoir plusieurs fois la même clé cependant. Cette structure fonctionne de manière quasi identique à un vrai dictionnaire pour faire une comparaison pratique.
Nous allons voir dans ce cours l'implémentation la plus courante de Map en java : `HashMap`.

## HashMap

Une HashMap est un dictionnaire qui hache les données qu'il contient c'est à dire qu'il **crypte les données** pour les rendre **plus courtes en mémoire** et accélerer la recherche dans le dictionnaire. L'**ordre de parution** des valeurs du dictionnaire n'est pas garanti lors d'un parcours. On peut parcourir la liste des clés d'un dictionnaire, ou bien la liste des valeurs ou bien encore une liste des associations clé-valeur.

*Remarque* : un dictionnaire ne peut stocker que des objets que ce soit les clés ou les valeurs, ainsi si l'on souhaite stocker des valeurs de types primitifs on utilisera les classes correspondantes (ex : Integer pour int, Boolean pour boolean, Character pour char, etc.)

Voici une liste de quelques méthodes utiles :

+ `put(key, value)` : ajoute une association `key` - `value` dans le dictionnaire, si `key` existe déjà alors elle sera écrasée avec la nouvelle valeur
+ `get(key)` : retourne la valeur associé à la clé `key`
+ `remove(key)` : supprime la clé ainsi que sa valeur du dictionnaire
+ `size()` : retourne le nombre d'association clé-valeur dans le dictionnaire (ou plus simplement le nombre de clés)
+ `clear()` : supprime le contenu du dictionnaire

Pour parcourir le dictionnaire on utilise :

+ `keySet()` : permet de parcourir la liste de clé du dictionnaire
+ `values()` : permet de parcourir la liste de valeurs du dictionnaire

**Exemple** :

```java
// on créé un dictionnaire qui associe un caractère a un mot
Map<Character, String> dico = new HashMap<>();
// on ajoute la clé 'a' associé au mot 'abricot' qui sera sa valeur
dico.put('a', "abricot");
dico.put('c', "creascio");

for (Character c : dico.keySet()){
    // pour chaque clé dans le dico on affiche cette clé et
    // la valeur associée
    System.out.println("Key :" + c + " value : " + dico.get(c));
}
```

*Remarque* : comme les listes en java sont des objets, un dictionnaire peut avoir une liste en tant que clé ou bien en tant que valeur. Cela permettrait de mieux représenter notre dico de l'exemple précédent :

```java
// on créer une liste de mots
List<String> motsEnC = new ArrayList<>() {{
    // on ajoute directement quelques mots qui commencent
    // par la lettre c
    add("clubby");
    add("clubbo");
}};
Map<Character, ArrayList<String>> dico = new HashMap<>();
// on ajoute l'association entre la lettre c et notre liste
// de mot qui commence par c dans le dictionnaire
dico.put('c', motsEnC);
```

## Exercices

*Coming soon...*
