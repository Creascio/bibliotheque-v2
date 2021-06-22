# Mode Debug

## Introduction

Lorsque notre programme plante ou ne produit pas le résultat attendu sans que l'on puisse facilement trouver la cause du problème, une bonne pratique est de lancer le programme en **mode Debug**.

Ce mode possède plusieurs fonctionnalités permettant de faire progresser le programme **pas à pas** c'est à dire **ligne par ligne**.

Nous allons voir dans ce cours comment se servir du mode Debug sous Eclipse.

## Setup

Avant de lancer le programme on doit déterminer des potentiels **points d'arrêts** dans notre code où le compilateur va s'arrêter et laisser la main à l'utilisateur pour poursuivre comme il le souhaite l'éxécution du programme.

Généralement on place des points d'arrêts avant **les instructions qui pourraient poser problème**. Si vous n'avez aucune idée d'où provient le problème vous pouvez placer le point d'arrêt **en haut du main**.

_Remarque : il existe d'autres points que les Breakpoints (points d'arrêts) mais leur usage spécifique ne sera pas couvert dans ce cours._

Il faut ensuite lancer le programme en mode Debug ce qui lance une configuration particulière.

Sur Eclipse, pour lancer le programme en mode débug on peut faire ceci :

- `Clic droit > Debug As > Java Application`
- `Icone d'insecte dans la barre d'actions > Debug As > Java Application`

Une fois le programme lancé de cette manière le compilateur ammène le programme **jusqu'au premier point d'arrêt** rencontré dans l'exécution.

_Remarque : si le programme nécessite des entrées utilisateurs avant ou apres un point d'arrêt il faudra les remplir comme normalement dans la console puis appuyer sur `Enter` pour continuer le debug._

## Mécaniques de debug

L'utilisateur à ensuite à sa disposition différentes fonctionnalités :

- `Step Into (F5)` : redirige vers le **code appelant** (la méthode généralement)
- `Step Over (F6)` : passe à la **ligne suivante** sans rentrer dans le code
- `Step Return (F7)` : retourne dans le **bloc de code précédent**

_Remarque : La fonctionnalité la plus utile reste le `Step Into` pour faire un parcours en profondeur de l'éxécution de votre programme._

En fonction de votre IDE vous pouvez également avoir une **vue Debug** qui permet de voir différentes informations comme **l'état de la pile d'execution** ou bien encore **la valeur de chaque variable de votre programme** au fil de l'éxécution.

_Remarque : en parallèle de l'utilisation du mode Debug, une pratique plus simple mais limité reviens à placer des `print` d'informations dans votre programme pour suivre comment l'éxécution se déroule et comment évolue vos variables._

## Exercices

_Coming soon..._
