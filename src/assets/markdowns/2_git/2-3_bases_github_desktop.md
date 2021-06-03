# Base de GitHub Desktop

## Prérequis

+ [Base de Github]()

## Introduction

Github Desktop est un outil de bureau en lien avec Github et qui permet la gestion de repository git.

## Interface

Voici à quoi ressemble l'interface de **Github Desktop**.

<img src="https://cdn.discordapp.com/attachments/822839106001829908/825439994806140998/unknown.png"/>

## Gestion de repository

A droite, cliquer sur **Current repository**. Cela vous ouvrira un menu qui contient tout vos repository. Dans ce menu, cliquer sur le bouton **Add**. (Si vous n'avez jamais fait de projet Git, on vous proposera tout de suite d'ajouter un repository).

Lorsque vous cliquez sur **Add** trois choix s'offrent à vous :

+ ``Clone repository`` : Copier votre projet Git sur votre pc (ou un repository public). Lorsque vous cliquez, cela vous ouvrira une fenêtre qui vous proposera soit de choisir parmi les repository auquels vous avez accès, soit d'insérer l'url ou nom d'un repository. Dans tout les cas vous devez aussi insérer l'endroit où vous voulez sauvegarder ce repository.

+ ``Create new repository`` : Créer un repository de 0. Lorsque vous cliquez, cela vous ouvrira une fenêtre qui vous demandera le nom, la potentielle description, le chemin où vous voulez stocker votre projet et si vous voulez ajouter un README. Vous aurez en plus le choix d'ajouter un .gitignore (choisissez simplement le langage que vous allez utiliser).

+ ``Add existing repository`` : Ajoutez un repository git déjà présent localement sur votre pc (il doit avoir le fichier .git). Lorsque vous cliquez, cela vous ouvrira une fenêtre qui vous demandera le chemin du repository sur votre pc.

## gitignore

Un .gitignore est un fichier qui permet au repository d'ignorer certains types de fichiers comme de lourdes bibliothèques (par exemple node-modules).

## Gestion de branches

Il est important de créer des branches afin de stocker plusieurs versions d'un même projet.

Pour créer un branche depuis Github Desktop, cliquer sur **Current branch**. Cela vous ouvrira un menu où vous pourrez naviguer de branches en branches.

Depuis ce menu, cliquez sur **New branch** pour créer un nouvelle branche. Cela vous ouvrira une fenêtre qui vous demandera le nom de votre nouvelle branche (celui-ci ne doit pas être le même qu'une autre branche). Il vous demandera aussi, si vous n'êtes pas sur la branche **main**, depuis quel branche vous voulez créer la nouvelle. Si vous sélectionner **main**, il prendra alors la version du projet de main et la mettra sur votre branche. Si vous sélectionner une autre branche, il prendra la version de la branche sélectionner.

N'oubliez pas une fois la branche créée de cliquer sur **Publish Branch**, sinon cette branche ne sera créé que localement sur votre pc.

Si vous faites clic droit sur une des branches depuis le menu de navigation de branches, vous pourrez renommer une branche ou en supprimer une. ATTENTION, si vous le faites, n'hésiter pas à recloner votre projet et à demander à vos collaborateurs de le faire aussi. Sinon vous risquez de vous retrouver avec des branches fantômes.

Pour recloner un projet, supprimer le dossier de votre projet local puis aller sur Github Desktop et cliquer sur **Clone Again**. N'oubliez pas de **Push** vos changements AVANT sinon ils seront perdus !

## Commit

Lorsque vous allez effectuer des changements sur vos fichiers, Github Desktop
rempliera la gauche de l'écran comme ci-dessous.

<img src="https://cdn.discordapp.com/attachments/822839106001829908/825442599301152818/unknown.png" />

Dans le screen, nous pouvons voir que 7 fichiers ont été modifié. Le carré jaune signifie que le contenu du fichier à changer, le carré vert signifie que le fichier a été créé ou ajouté et le carré rouge signifie que le fichier a été supprimé.

En cliquant sur l'un des fichiers, vous pouvez voir les modifications en détails. Les lignes surlignées en vert sont les lignes ajoutées et les lignes surlignées en rouge sont les lignes supprimées du fichier.

Lorsque vous voulez sauvegarder votre travail, vous devrez alors donner un nom à votre **Commit** dans le champs **Sumarry (required)**. Ce nom doit normalement représenter les changements que vous avez fait comme "Update ... file", celui-ci est obligatoire pour commit. Vous pouvez aussi ajouter un description. Une fois que vous avez donner un nom à votre commit cliquer sur **Commit to [nom-de-la-branche-actuelle]**.

Un commit est une sauvegarde uniquement locale à votre pc.

## Push, Pull, Fetch

Le bouton **Fetch origin** permet de comparer votre version et celle du cloud, il détecte donc quand vous devez **push** ou **pull**.

Lorsque vous effectuez un commit le bouton qui se nommait à l'origine **Fetch origin** se transformera en **Push**. Cet action permet
de mettre à jour votre commit sur le cloud de Git afin que vos collaborateurs voient vos changements.

Lorsque vos amis **push** quelque chose, vous pourrez alors cliquer sur **Fetch origin**, une fois cela fait ce bouton se transformera en **Pull** ce qui permettra de mettre à jour votre version depuis le cloud.

Lorsque vous voulez **push** un commit, il faudra vérifier que votre version est bien à jour avec le cloud et donc sivous n'avez pas à **pull** avant. Dans notre cas, Github Desktop vous préviendra.

## Exercices

``(Q1) Créer un projet``

```txt
Créer un projet sur Github Desktop, appeler le "First-Project" vous pouvez mettre la description que vous voulez.
```

``(Q2) Créer une branche``

```txt
Créer une branche qui vous nommerez "develop"
```

``(Q3) Faire un commit``

```txt
Dans la branche develop, créer un fichier texte avec n'importe quel texte dessus. Puis appeler votre commit "Create a text file" puis commiter !
```

``(Q4) Push le commit``

```txt
Enfin n'oubliez pas de push !
```

## Suivants

+ [Merge Request]()
