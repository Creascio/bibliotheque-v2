// creascio chapters
import presentation_creascio from 'src/assets/markdowns/1_creascio/1-1_presentation_creascio.md'
import devenir_helper from 'src/assets/markdowns/1_creascio/1-2_devenir_helper.md'

// git chapters
import environnement_travail_git from 'src/assets/markdowns/2_git/2-1_environnement_travail_git.md'
import bases_github from 'src/assets/markdowns/2_git/2-2_bases_github.md'
import bases_github_desktop from 'src/assets/markdowns/2_git/2-3_bases_github_desktop.md'
import merge_request from 'src/assets/markdowns/2_git/2-4_merge_request.md'
import pull_request from 'src/assets/markdowns/2_git/2-5_pull_request.md'

// c chapters
import environnement_travail_c from 'src/assets/markdowns/3_c/3-1_environnement_travail_c.md'
import types_primitifs_variables from 'src/assets/markdowns/3_c/3-2_types_primitifs_variables.md'
import affichage_console from 'src/assets/markdowns/3_c/3-3_affichage_console.md'
import conditions_booleennes from 'src/assets/markdowns/3_c/3-4_conditions_booleennes.md'
import boucles_controle from 'src/assets/markdowns/3_c/3-5_boucles_controle.md'

// java chapters
import environnement_travail_java from 'src/assets/markdowns/4_java/4-1_environnement_travail_java.md'
import classes_attributs from 'src/assets/markdowns/4_java/4-2_classes_attributs.md'
import methodes from 'src/assets/markdowns/4_java/4-3_methodes.md'
import programme_principal from 'src/assets/markdowns/4_java/4-4_programme_principal.md'
import enumerations from 'src/assets/markdowns/4_java/4-5_enumerations.md'
import bibliotheques from 'src/assets/markdowns/4_java/4-6_bibliotheques.md'
import collection_iterable from 'src/assets/markdowns/4_java/4-7_collection_iterable.md'
import interface_utilisateur from 'src/assets/markdowns/4_java/4-8_interface_utilisateur.md'
import valeurs_aleatoires from 'src/assets/markdowns/4_java/4-9_valeurs_aleatoires.md'
import dictionnaires from 'src/assets/markdowns/4_java/4-10_dictionnaires.md'
import mode_debug from 'src/assets/markdowns/4_java/4-11_mode_debug.md'
import tests_unitaires from 'src/assets/markdowns/4_java/4-12_tests_unitaires.md'
import gestion_exceptions from 'src/assets/markdowns/4_java/4-13_gestion_exceptions.md'
import abstraction_heritage from 'src/assets/markdowns/4_java/4-14_abstraction_heritage.md'
import polymorphisme from 'src/assets/markdowns/4_java/4-15_polymorphisme.md'
import abstraction_interface from 'src/assets/markdowns/4_java/4-16_abstraction_interface.md'

// javascript chapters
import bases_javascript from 'src/assets/markdowns/5_javascript/5-1_bases_javascript.md'
import bases_javascript_web from 'src/assets/markdowns/5_javascript/5-2_bases_javascript_web.md'

const courses = [
  {
    id: "1",
    title: "Creascio",
    icon: "",
    chapters: [
      {
        id: "1-1",
        title: "Présentation de Creascio",
        icon: "",
        markdown: presentation_creascio
      },
      {
        id: "1-2",
        title: "Devenir Helper",
        icon: "",
        markdown: devenir_helper
      }
    ]
  },
  {
    id: "2",
    title: "Git",
    icon: "",
    chapters: [
      {
        id: "2-1",
        title: "Environnement de travail",
        icon: "",
        markdown: environnement_travail_git
      },
      {
        id: "2-2",
        title: "GitHub",
        icon: "",
        markdown: bases_github
      },
      {
        id: "2-3",
        title: "GitHub Desktop",
        icon: "",
        markdown: bases_github_desktop
      },
      {
        id: "2-4",
        title: "Merge Request",
        icon: "",
        markdown: merge_request
      },
      {
        id: "2-5",
        title: "Pull Request",
        icon: "",
        markdown: pull_request
      }
    ]
  },
  {
    id: "3",
    title: "C",
    icon: "",
    chapters: [
      {
        id: "3-1",
        title: "Environnement de travail",
        icon: "",
        markdown: environnement_travail_c
      },
      {
        id: "3-2",
        title: "Types primitifs et Variables",
        icon: "",
        markdown: types_primitifs_variables
      },
      {
        id: "3-3",
        title: "Affichage Console",
        icon: "",
        markdown: affichage_console
      },
      {
        id: "3-4",
        title: "Conditions Booléennes",
        icon: "",
        markdown: conditions_booleennes
      },
      {
        id: "3-5",
        title: "Boucles de contrôles",
        icon: "",
        markdown: boucles_controle
      }
    ]
  },
  {
    id: "4",
    title: "Java",
    icon: "",
    chapters: [
      {
        id: "4-1",
        title: "Environnement de travail",
        icon: "",
        markdown: environnement_travail_java
      },
      {
        id: "4-2",
        title: "Classes et Attributs",
        icon: "",
        markdown: classes_attributs
      },
      {
        id: "4-3",
        title: "Méthodes",
        icon: "",
        markdown: methodes
      },
      {
        id: "4-4",
        title: "Programme principal",
        icon: "",
        markdown: programme_principal
      },
      {
        id: "4-5",
        title: "Enumérations",
        icon: "",
        markdown: enumerations
      },
      {
        id: "4-6",
        title: "Bibliothèques",
        icon: "",
        markdown: bibliotheques
      },
      {
        id: "4-7",
        title: "Collection et Iterable",
        icon: "",
        markdown: collection_iterable
      },
      {
        id: "4-8",
        title: "Interface Utilisateur",
        icon: "",
        markdown: interface_utilisateur
      },
      {
        id: "4-9",
        title: "Valeur Aléatoire",
        icon: "",
        markdown: valeurs_aleatoires
      },
      {
        id: "4-10",
        title: "Dictionnaires",
        icon: "",
        markdown: dictionnaires
      },
      {
        id: "4-11",
        title: "Mode Debug",
        icon: "",
        markdown: mode_debug
      },
      {
        id: "4-12",
        title: "Tests Unitaires",
        icon: "",
        markdown: tests_unitaires
      },
      {
        id: "4-13",
        title: "Gestion des Exceptions",
        icon: "",
        markdown: gestion_exceptions
      },
      {
        id: "4-14",
        title: "Abstraction et Héritage",
        icon: "",
        markdown: abstraction_heritage
      },
      {
        id: "4-15",
        title: "Polymorphisme",
        icon: "",
        markdown: polymorphisme
      },
      {
        id: "4-16",
        title: "Abstraction et Interface",
        icon: "",
        markdown: abstraction_interface
      }
    ]
  },
  {
    id: "5",
    title: "Javascript",
    icon: "",
    chapters: [
      {
        id: "5-1",
        title: "Bases de Javascript",
        icon: "",
        markdown: bases_javascript
      },
      {
        id: "5-2",
        title: "Javascript pour le Web",
        icon: "",
        markdown: bases_javascript_web
      }
    ]
  }
]

export default courses
