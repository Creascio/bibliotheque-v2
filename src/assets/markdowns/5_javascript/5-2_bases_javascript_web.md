# Bases de Javascript pour le Web

## Introduction

Le Javascript est une pièce maitresse du développement Web, c'est le **langage de compilation** de **tous les navigateurs existants**, c'est à dire que c'est ce langage qui permet au navigateur de produire des **pages web** sous la forme à laquelle nous sommes habitués.

Le Javascript permet également de rendre le contenu d'une page web **dynamique**, d'y injecter de l'**algorithmie** et du **traitement de donnée**, d'intéragir avec des **API**, bref, la liste est longue.

Historiquement le Javascript était reservé à la construction de la partie **front-end** d'une application Web, c'est à dire le contenu visible et les interactions avec l'utilisateur.

Ce n'est aujourd'hui plus le cas et de plus de nombreux outils modernes, des frameworks, permettent de créer des applications web très puissantes de A à Z et bien plus facilement qu'auparavant.

Dans ce cours nous allons découvrir le **fonctionnement de base** du Javascript et de son interaction avec le contenu d'une page Web. Chaque interaction sera accompagnées d'exemples mais il est impossible et inutile de couvrir tous les cas possibles dans ce cours.

Ainsi il est fortement conseillé de consulter la documentation en ligne sur [Developper Mozilla](https://developer.mozilla.org/fr/)

## La compilation web

Lorsqu'on déploie une application Web composé notamment d'éléments **HTML** (ou de balises) accompagnées de style **CSS** et éventuellement de script **JS** (Javascript), tout ce contenu est d'abord réuni en **un seul fichier** pour faciliter la compilation auprès du navigateur.

Le fichier à compiler produit ensuite est bien sur absolument illisible pour un être humain mais bien pratique pour le navigateur de votre choix.

Tout est mis en oeuvre pour que cette compilation soit **la plus rapide possible** car tout le monde sait qu'une page web qui ralentit fait fuir les utilisateurs et peut entraîner des bugs.

Il existe de nombreux outils, couplés aux fonctionnalités du Javascript, qui permettent d'optimiser au maximum la compilation comme les linters par exemple.

## Le DOM

Le **Document Object Model**, ou **DOM**, pose les fondations de l'architecture d'une application Web, c'est ce modèle qui explique **les interactions entre les balises HTML** et c'est auprès de celui-ci que les scripts JS se réfère pour **accéder à des éléments** dans la page web.

On se réfère au DOM dans le Javascript via le mot clé `document`. On verra des exemples d'utilisations par la suite.

## Les interactions avec la page

Les interactions de bases possibles entre un script JS et une page web sont les suivantes :

+ récupérer un élément HTML et son contenu
+ modifier un élément HTML
+ modifier le style d'un élément
+ écouter des évènements sur un élément

_Remarque : un évènement est une action qui s'effectue sur la page, un évènement peut être un changement d'état d'un élément de la page (ex: chargement de l'élément terminé) ou bien une intervention de l'utilisateur (ex: clic sur un bouton, un Link)._

### Recuperer un élément HTML

Les balises HTML sont caractérisées par differentes **propriétés** qui permettent de facilement récupérer ce que l'on souhaite dans une page.

Toute balise possède un **type** et eventuellement une **classe**, ces deux caractéristiques permettent d'isoler des groupes de balise dans la page.

Une balise peut également posséder un **identifiant** ou `id` qui va alors permettre d'identifier une balise de manière **unique**.

Le Javascript permet d'exploiter ces caractéristiques avec différents sélécteurs :

+ `getElementsByTagName('tag')` : retourne un tableau contenant **tous les éléments** de type `tag` (nom de la balise)
+ `getElementsByClassName('class')` : retourne un tableau contenant **tous les éléments** possèdant la classe `class`
+ `getElementById('id')` : retourne l'élément identifié par `id`

Voici quelques exemples d'utilisation :

```js
const monTableau = document.getElementById("tableau");
const cellules = monTableau.getElementsByTagName("td");
```

Il est possible d'effectuer une recherche plus pointue avec le `querySelector` qui permet de combiner différents outils de recherche :

Voici un exemple de page HTML :

```html
<div id="myId">
  <p>
    <span><a href="#">Link 1</a></span>
    <a href="#">Link 2</a>
    <span><a href="#">Link 3</a></span>
  </p>
  <p class="toto">
    <span><a href="#">Link 4</a></span>
    <span><a href="#">Link 5</a></span>
    <a href="#">Link 6</a>
  </p>
  <p>
    <a href="#">Link 7</a>
    <span><a href="#">Link 8</a></span>
    <span><a href="#">Link 9</a></span>
  </p>
</div>
```

Un exemple de récupération d'élément par `querySelector` :

```js
const preciseElement = document.querySelector("#myId p.toto > a");
```

On recherche dans un élément ayant pour `id` "myId", les éléments de type `<p>` ayant pour classe `toto` afin de récupérer l'enfant direct de type Link `<a>`.

`preciseElement` contient donc "Link 6".

On peut également récupérer des éléments liés **hierarchiquement** avec d'autres :

+ `element.children` : retourne un tableau contenant **tous les éléments enfants** de `element`
+ `element.parentElement` : retourne **l'élément parent** de `element`
+ `element.nextElementSibling / element.previousElementSibling` : retourne **l'élément suivant ou précédent** `element` au même niveau hierarchique.

Voici un exemple, encore une fois avec une page HTML :

```html
<div id="parent">
  <div id="toto">Previous</div>
  <div id="main">
    <p>Text 1</p>
    <p>Text 2</p>
  </div>
  <div id="titi">Next</div>
</div>
```

Et une récupération d'élément par hierachie :

```js
const elt = document.getElementById("main");
```

Dans cet exemple, `elt.children` renvoient les éléments `<p>` enfants de la div ayant pour id `main`. `elt.parentElement` renvoie la div ayant pour id `parent`. Enfin `elt.nextElementSibling` renvoie la div ayant pour id `titi`.

_Remarque : Toutes ces méthodes de recherche renvoie un élément `null` si la recherche ne porte pas ses fruits, le programme ne plante pas nécessairement._

### Modifier un élément

Une fois que l'on a récupéré un élément du DOM on peut **modifier ses propriétés**. La modification la plus courante est celle du **contenu HTML** lui même de cet élément. Plusieurs méthodes existent :

+ `innerHTML` : remplace le contenu actuel de l'élément par un nouveau contenu **HTML**
+ `textContent` : remplace le contenu actuel de l'élément par un nouveau contenu **textuel**

_Remarque : Il existe d'autres façons, celles-ci sont les plus courantes. `textContent` ne peut pas interpréter la syntaxe html et est donc beaucoup moins utile._

Voici un exemple :

```js
let elt = document.getElementById("toto");
elt.innerHTML = "<ul><li>Ligne 1</li><li>Ligne 2</li></ul>";
```

On obtient alors en HTML :

```html
<div id="toto">
  <ul>
    <li>Ligne 1</li>
    <li>Ligne 2</li>
  </ul>
</div>
```

Une autre modification possible est le changement de **classe** d'un élément grâce à la propriété `classList` :

```js
elt.classList.add("nouvelleClasse"); // Ajoute la classe nouvelleClasse à l'élément

elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter

elt.classList.contains("nouvelleClasse"); // Retournera false car on vient de la supprimer

elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément
```

_Remarque : il est possible d'ajouter et de retirer plusieurs classes à la fois._

On peut modifier le **style** d'un élément sans passer par une feuille de style CSS grâce à la propriété `style` :

```js
elt.style.color = "#fff"; // Change la couleur du texte de l'élément à blanche

elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir

elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras
```

Si un élément peut posséder des attributs, on peut les modifier également :

Voici un exemple pour un élément `elt` ciblant une balise de type `input` qui est un type HTML possédant des attibuts :

```js
elt.setAttribute("type", "password"); // Change le type de l'input en un type password

elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password

elt.getAttribute("name"); // Retourne my-password
```

### Créer un élément

Il est possible de créer de nouveaux éléments depuis un script JS cependant pour que ces éléments soient visibles sur la page il faut impérativement les rattacher à des éléments **déjà existants dans le DOM**.

Pour créer un élément on utilise `createElement` puis `appendChild` pour le rattacher à la page via un autre élément.

Voici un exemple :

```js
const newElt = document.createElement("div"); // on créer un élément HTML
let parent = document.getElementById("toto"); // on cible un parent dans la page

parent.appendChild(newElt); // on rattache le nouvel élément au parent
```

Tout comme il est possible de créer, il est également possible de supprimer un élément si celui-ci est **enfant** d'un élément du DOM, pour cela on utilise `removeChild` ou bien `replaceChild`.

Voici un exemple :

```js
const newElt = document.createElement("div"); // création d'élément
let elt = document.getElementById("main"); // on cible un parent

elt.appendChild(newElt); // on ajoute newElt comme enfant

elt.removeChild(newElt); // Supprime l'élément newElt des enfants de elt
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article
```

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
