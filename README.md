# Plugin mathjax pour tinymce 

Ce plugin pour l'éditeur tinymce (<http://www.tinymce.com/>) utilise mathjax (<http://www.mathjax.org/>) afin de permettre l'édition et l'affichage de formules mathématiques dans l'éditeur.
![plugin en fonctionnement](http://moodle.albert-thomas.org/file.php/1/demo.png)
## Installation :

- dans le dossier `plugins` de tinymce, créer un dossier 'mathjax' et y déposer les fichiers de ce dépôt.
- dans la page html contenant l'éditeur, ajouter `mathjax` à la ligne `plugins:`' du tinymce.config({... plugins: autres plugins,mathjax', ...});

## Utilisation basique :

- dans tinymce, le raccourci clavier `ctrl+m` active/désactive les principales fonctionnalités du plugin
- lorsqu'il est activé, l'appui sur la touche `$` insère une «zone de saisie»,
- on y tape une formule en latex qui est rendu au fur et à mesure de la saisie dans le coin supérieur droit de la fenêtre
- une fois arrivé au résultat souhaité, il suffit de sortir de la «zone de saisie» pour que celle-ci soit remplacée par la formule correspondante
- si on place le curseur (ou qu'on clique) sur la formule, la zone de saisie réapparait permettant ainsi de modifier/adapter la formule.
- astuces :
    * complétion de formule LaTeX : `ctrl+ESPACE` (peut s'utiliser plusieurs fois successivement pour faire défiler les commandes)
    * dans une zone de saisie, l'appui sur la touche $ fait passer d'un mode inline à un mode displaystyle et vice versa.

## Mise en garde : 

- ce plugin est loin d'être rôdé ...
- il ne fonctionnera pas sous ie (en l'état, il fera planter tinymce sous ce navigateur :-(),
- il n'a été testé que sous firefox (3 ou +) et chrome.

## Démo : à venir ...
