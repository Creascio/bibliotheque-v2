# Base de GitHub

## Prérequis

+ [Environnement de travail]()

## Introduction

GitHub est un outil de gestion de projets git. C'est une plateforme en ligne qui permet à ses utilisateurs de stocker leur contenu sur le cloud pour facilier le versionning et la collaboration entre les membres d'une équipe. Il propose de nombreux autres outils qui facilitent la conception et la gestion de projet.

*Remarque : il existe d'autres plateformes du même genre mais nous utiliserons GitHub dans le cadre de ce cours.*

## Architecture

Lorsque vous créez un projet Git, vous créez un **repository**.

Un **repository** est divisé en **branches** qui peuvent stocker des contenus différents. Attention, les branches ne sont pas des sous dossiers ! Ce sont plutôt des bouts de projets ou bien des versions différentes d'un même projet.

Au départ, il n'existe qu'une seule branche, la branche **main**, qui est la branche principale. Vous pouvez créer autant de branches que vous voulez. Il faut juste faire attention au nommage. Deux branches ne peuvent pas avoir le même nom.

La branche **main** est la branche où sera votre projet final. En règle général, on créé une branche par collaborateur (donc même si vous êtes seul vous vous créez une branche). Cela permet, dès qu'une fonctionnalité marche, de la mettre sur la branche **main**. De plus, si vous faites des bétises sur votre branche, vous aurez une sauvegarde sur la branche **main**.

## Créer un repository

Depuis l'accueil de Github, cliquez sur le bouton **New** pour créer un repository.
Il faudra lui donner un nom, une potentielle description et choisir sa visibilité.

Vous pouvez ajouter un **README**. C'est un document que l'on utilise lorsque
l'on met en publique son code. Le but étant d'expliquer votre projet et comment le faire marcher. Cela peut être un .txt ou un .md.

Vous pouvez aussi ajouter un **.gitignore** si vous faites du node.js, du unity ou d'autres
technologies avec de lourdes bibliothèques.Un **.gitignore** est un fichier qui comme son nom l'indique ignorera toutes les bibliothèques. Ainsi sur le cloud, il n'y aura que votre code.

Lorsque vous créez une repository sur Github, il sera totalement vide. (sauf si vous avez créé un README ou un .gitignore)

## Interface repository

Lorsque vous cliquez sur l'un de vos repository ou lorsque vous en créez un, l'interface devrait
ressembler à ça. (si ce n'est pas le cas cliquer sur **<> Code** dans le menu)

<img src="https://cdn.discordapp.com/attachments/822839106001829908/825436230095077419/unknown.png" align="center"/>

Comme vous pouvez le voir vous tombez directement sur le code présent dans le main. Si vous avez un README, il est affiché en dessous de vos fichiers.

Depuis cette endroit, vous pouvez ajouter, modifier et supprimer des fichiers ou simplement naviguer dans vos fichiers.

Vous pouvez aussi cloner votre repository afin de l'importer sur votre ordinateur en
téléchargent un .zip. Pour cela cliquer sur le bouton vert **Code** puis **Download ZIP**

## Paramétrage

Il existe de nombreuses options de personnalisation de votre repository que ce soit pour en filtrer l'accès ou bien le contenu.

### Inviter des collaborateurs

Un collaborateur est quelqu'un qui a accès en lecture ET en écriture à votre code.

Pour ajouter des personnes à votre projet, aller dans **Settings** puis dans **Manage access**
puis cliquer sur **Invite a collaborator** enfin entrer le pseudo de la personne que vous souhaitez ajouter. Celui-ci recevra un mail qui l'invitera sur le repository avec un lien.

Vous pouvez à tout moment supprimer un collaborateur.

### Changer la visibilité

Dans **Settings** si vous revenez dans **Options** et que vous scrollez tout en bas,
vous pouvez changer la visibilité d'un repository.

Un repository publique permet à n'importe qui de voir le code et de le copier sur son ordinateur mais il ne peutpas être modifier. Un repository privé est totalement caché, on ne peux pas le voir ni le changer à mois d'etre un collaborateur.

### Archiver

Dans **Settings** si vous revenez dans **Options** et que vous scrollez tout en bas,
vous pouvez archiver un repository.

Lorsqu'un repository est archiver vous et vos collaborateur ne pouvez plus le modifier mais
vous avez toujours accès au code en lecture. Cette action est reversible.

### Supprimer

Dans **Settings** si vous revenez dans **Options** et que vous scrollez tout en bas,
vous pouvez supprimer un repository.

Cette action est irreversible donc attention !

## Exercices

``(Q1) Création de projet``

```txt
Créez un repository appelé "Test", mettez en description "Je suis un repository test", mettez le en privé et ajouter un README.
```

Après avoir cliqué sur ``<> Code`` voici ce que vous devriez avoir comme résultat :

<img src="https://cdn.discordapp.com/attachments/822839106001829908/828643996434956328/unknown.png" align="center"/>

``(Q2) Faire un commit``

```txt
Modifier le contenu de votre README : "Premier projet git, c'est beau !" (N'oubliez pas de commit)
Vous verrez son aperçu changer en revenant à la racine de votre branche
```

``(Q3) Ajouter un collaborator``

```txt
Inviter "Shiropetite" dans votre repository.
```

``(Q4) Supprimer votre repository``

```txt
Ce repository n'est pas très utile avec juste un README. Nous allons donc supprimer ce repository.
```

## Suivants

+ [Bases de Github Desktop]()
