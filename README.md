# Développement de la bibliotheque Creascio

## Méthode de travail

Cette branche est lié au projet : Bibliotheque

Chaque issue est ajouté à la colonne **To do**

Lorsque vous choisissez de travailler sur une issue, passez la dans la colonne **In progress** puis créez une branche à partir de **develop** avec le numéro de l'issue et une description très rapide de la tache (exemple: `1-UpdateReadMe`)

Une fois que vous pensez avoir terminé votre travail, créez une **pull request** relié à l'issue que vous traitez.

Une fois approuvé, vous devez merge la pull request dans develop, supprimer votre branche et close l'issue.

## Deploiement

Pour déployer vos modifications, écrivez dans un terminal de commande :

- **quasar build** : Permet de créer ou mettre à jour le dossier dist qui représente votre projet coder en html, css, js
- **yarn deploy** : Permet de mettre à jour master et donc la github page
