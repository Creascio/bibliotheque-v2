# Gestion de branche

## Prérequis

+ []()

## Introduction

Lors d'un projet en équipe, la possibilité de merge différentes branches de travail est cruciale pour pouvoir **contrôler** que l'apport de **nouvelles fonctionnalités** dans la version principale du projet se fait correctement.

## Merge

L'action de merge se fait toujours d'une branche vers une autre, on dit qu'on merge la branche A dans la branche B. Ainsi le contenu de la branche A **va se retrouver dans la branche B** et la branche A peut être supprimé ensuite.

La bonne pratique veut que dans un projet en groupe ou chacun travaillerait sur une ou plusieurs tâches précises, une fois ces tâches accomplies on merge leurs branche vers la branche principale **main** (ou master).

Un merge peut entraîner des **conflits sur la branche qui reçoit les modifications** si les deux branches contenaient un fichier avec une **signature identique** (même nom et extension) et que la branche entrante n'est pas à jour avec la branche recevante.

## Conflits

En fonction du type de conflits, Github Desktop peut proposer de prendre en charge la gestion du conflit en proposant d'utiliser **Visual Studio Code** (un éditeur évolué de Microsoft). L'éditeur vous permet alors de choisir entre :

+ garder uniquement les modifications actuelles, c'est à dire l'état du fichier **avant merge**
+ garder uniquement les modifications entrantes, c'est à dire **remplacer le contenu** du fichier
+ garder toutes les modifications, l'éditeur va tenter de **fusionner les deux états** du fichier.

*Remarque* : les conflits restent très rare vous n'avez pas a trop vous inquietez mais il faut savoir quoi faire quand on tombe dessus.

## Exercices

## Suivants

+ []()
