# Environnement de travail

## Introduction

Java est un langage de programmation **orienté objet**. Le but de ce langage est de produire un code **facilement maintenable et modulable**.

Ce langage est généralement utilisé dans des contextes **client-serveur**. Ils existent de nombreux langages et outils qui dérivent du Java comme [Spring](https://spring.io/).

Dans ce cours nous allons configurer notre environnement de travail Java.

## Setup

Pour le bien de ce cours nous aurons d'abord besoin d'installer :

- une version du [Java Development Kit](https://www.oracle.com/java/technologies/javase-downloads.html)
- l'environnement de travail [Eclipse](https://www.eclipse.org/downloads/)

Le JDK est l'ensemble des outils nécessaire à notre machine pour pouvoir **lire et exécuter** du code Java.

Nous avons choisi Eclipse comme IDE (integrated development environment) pour ce cours mais il en existe d'autres, notamment [IntelliJ](https://www.jetbrains.com/fr-fr/idea/)

## Architecture d'un projet Java

Pour coder en Java, on créer des **projets** qui sont stockés en tant que **dossier** sur votre PC. Les projets peuvent être arrangés dans ce qu'on appelle une **workspace**.

_Remarque : le concept de workspace ou d'espace de travail est présent et nécessaire sur Eclipse mais ce n'est pas le cas sur d'autres IDE notamment les plus récents._

Chaque projet contient un dossier `src` qui est le dossier source qui contiendra votre code.

_Remarque : le dossier de projet contient également un dossier `dist` ou `build` qui contient le code compilé du projet mais on ne modifie jamais soit même le contenu de ce dossier._

Le dossier src peut contenir des sous dossiers appelés **packages**. Les packages permettent d'organiser le code par "famille". Nous verrons plus tard sa vraie utilité lorsque nous aborderons le sujet des dépendances.

Enfin on retrouve les **classes** qui sont le modèle de définition de nos objets comportant des **attributs**, c'est-à-dire des **caractéristiques**, et des **méthodes** qui décrivent le **comportement** des objets.

## Créer un projet Java

Pour créer un projet Java sous Eclipse il faut tout d'abord lancer Eclipse sur une workspace existante ou bien en créer une nouvelle.

Une fois dans votre workspace vous pouvez créer un projet :

- via le menu : `File > New > Java Project`
- via l'interface : `Clic droit > New > Java Project`

Il vous sera ensuite demander de nommer votre projet, les autres options ne nous intéresse pas pour le moment et vous pouvez ensuite appuyer sur `Finish`.

Le projet et son architecture sont alors créés, il ne vous reste plus qu'a créer :

- vos packages : `src (clic droit) > New > Package`
- vos classes : `package (clic droit) > New > Class`

_Remarque : Eclipse créé un package de base lors de la création de la première classe de votre projet si vous n'aviez pas créer de package auparavant._

_Auteur : Léo SALLARD._
