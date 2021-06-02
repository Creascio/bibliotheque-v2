# Les bibliothèques

## Prérequis

+ []()

## Introduction

En Java comme dans bon nombre d'autres langages de programmation, il est possible d'exploiter du **code externe** a votre programme afin d'eviter de recoder des
fonctionnalitées qui existe deja. Cela se fait via l'**importation de bibliothèques** en plus de la bibliothèque java standard. Les bibliothèques contiennent des **classes** avec leurs attributs et leurs méthodes.

## Importer des bibliothèques

Il y a une syntaxe précise à respecter pour importer une bibliothèque dans un projet : `[nomDeLaBibliotheque].[nomDuPackage].[nomDeLaClasse];`

Les imports se situe toujours au dessus du bloc classe qui souhaite les utiliser.

Ainsi, pour importer la classe `ArrayList` on écrit : `import java.util.ArrayList;`

Ici `java` fait référence à la bibliothèque java standard. On recherche la classe `ArrayList` se trouvant dans le package `util`.

On peut importer tout le contenu d'une bibliothèque ou d'un package en utilisant *.

**Exemple** :

```java
import java.util.*;
```

Cet import permet de récupérer toutes les classes contenu dans le package `util` de la bibliothèque `java`.

## Exercices

+ []()

### Suivants

+ []()
