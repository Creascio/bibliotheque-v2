import {creascio, git, c, java, javascript} from 'src/assets/markdowns'

const courses = [
  {
    id: "1",
    title: "Creascio",
    icon: "https://cdn.discordapp.com/attachments/822839106001829908/822839194099384360/discord_pdp.png",
    chapters: [
      {
        id: "1-1",
        title: "Présentation de Creascio",
        icon: "",
        markdown: creascio.presentation_creascio
      },
      {
        id: "1-2",
        title: "Devenir Helper",
        icon: "",
        markdown: creascio.devenir_helper
      }
    ]
  },
  {
    id: "2",
    title: "Git",
    icon: "https://cdn.discordapp.com/attachments/822839106001829908/850371933118791690/AdKzmNKdPeteAAAAABJRU5ErkJggg.png",
    chapters: [
      {
        id: "2-1",
        title: "Environnement de travail (Git)",
        icon: "",
        markdown: git.environnement_travail_git
      },
      {
        id: "2-2",
        title: "GitHub",
        icon: "",
        markdown: git.bases_github
      },
      {
        id: "2-3",
        title: "GitHub Desktop",
        icon: "",
        markdown: git.bases_github_desktop
      },
      {
        id: "2-4",
        title: "Merge Request",
        icon: "",
        markdown: git.merge_request
      },
      {
        id: "2-5",
        title: "Pull Request",
        icon: "",
        markdown: git.pull_request
      }
    ]
  },
  {
    id: "3",
    title: "Bases de la Programmation",
    icon: "https://cdn.discordapp.com/attachments/822839106001829908/850372098277900318/c-programming.png",
    chapters: [
      {
        id: "3-1",
        title: "Environnement de travail (C)",
        icon: "",
        markdown: c.environnement_travail_c
      },
      {
        id: "3-2",
        title: "Variables et Types primitifs",
        icon: "",
        markdown: c.types_primitifs_variables
      },
      {
        id: "3-3",
        title: "Affichage Console",
        icon: "",
        markdown: c.affichage_console
      },
      {
        id: "3-4",
        title: "Conditions Booléennes",
        icon: "",
        markdown: c.conditions_booleennes
      },
      {
        id: "3-5",
        title: "Boucles de contrôles",
        icon: "",
        markdown: c.boucles_controle
      }
    ]
  },
  {
    id: "4",
    title: "Programmation Orientée Objet",
    icon: "https://cdn.discordapp.com/attachments/822839106001829908/850372498871681034/226777.png",
    chapters: [
      {
        id: "4-1",
        title: "Environnement de travail (Java)",
        icon: "",
        markdown: java.environnement_travail_java
      },
      {
        id: "4-2",
        title: "Classes et Attributs",
        icon: "",
        markdown: java.classes_attributs
      },
      {
        id: "4-3",
        title: "Méthodes",
        icon: "",
        markdown: java.methodes
      },
      {
        id: "4-4",
        title: "Programme principal",
        icon: "",
        markdown: java.programme_principal
      },
      {
        id: "4-5",
        title: "Enumérations",
        icon: "",
        markdown: java.enumerations
      },
      {
        id: "4-6",
        title: "Bibliothèques",
        icon: "",
        markdown: java.bibliotheques
      },
      {
        id: "4-7",
        title: "Collection et Iterable",
        icon: "",
        markdown: java.collection_iterable
      },
      {
        id: "4-8",
        title: "Interface Utilisateur",
        icon: "",
        markdown: java.interface_utilisateur
      },
      {
        id: "4-9",
        title: "Valeur Aléatoire",
        icon: "",
        markdown: java.valeurs_aleatoires
      },
      {
        id: "4-10",
        title: "Dictionnaires",
        icon: "",
        markdown: java.dictionnaires
      },
      {
        id: "4-11",
        title: "Mode Debug",
        icon: "",
        markdown: java.mode_debug
      },
      {
        id: "4-12",
        title: "Tests Unitaires",
        icon: "",
        markdown: java.tests_unitaires
      },
      {
        id: "4-13",
        title: "Gestion des Exceptions",
        icon: "",
        markdown: java.gestion_exceptions
      },
      {
        id: "4-14",
        title: "Abstraction et Héritage",
        icon: "",
        markdown: java.abstraction_heritage
      },
      {
        id: "4-15",
        title: "Polymorphisme",
        icon: "",
        markdown: java.polymorphisme
      },
      {
        id: "4-16",
        title: "Abstraction et Interface",
        icon: "",
        markdown: java.abstraction_interface
      }
    ]
  },
  {
    id: "5",
    title: "Programmation Orientée Web",
    icon: "https://cdn.discordapp.com/attachments/822839106001829908/850373060645093406/javascript.png",
    chapters: [
      {
        id: "5-1",
        title: "Bases de Javascript",
        icon: "",
        markdown: javascript.bases_javascript
      },
      {
        id: "5-2",
        title: "Javascript pour le Web",
        icon: "",
        markdown: javascript.bases_javascript_web
      }
    ]
  }
]

export default courses
