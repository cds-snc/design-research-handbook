# *CDS design research team handbook / Guide de recherche en conception du SNC*

[cds-snc.github.io/design-research-handbook](https://cds-snc.github.io/design-research-handbook/)

## Purpose and audience / Objectif et auditoire
This handbook is for Canadian Digital Service researchers and other staff. Some of the links inside it may not be accessible to people outside CDS.

Le présent guide est à l’intention des chercheurs et des employés du Service numérique canadien. Certains des liens qui s’y retrouvent peuvent ne pas être accessibles à des personnes à l’extérieur du SNC.

## Running the repo locally / Exécution locale du répertoire
This handbook uses [Jekyll](http://jekyllrb.com/) and the [DOCter](https://github.com/cfpb/DOCter) theme.  DOCter needs Jekyll and other dependencies to run locally. Install these dependencies with Bundler by running the following commands.

Ce guide se sert de Jekyll et du thème DOCter. DOCter a besoin de Jekyll et d’autres dépendances pour être exécuté localement. Installez ces dépendances avec Bundler en exécutant les commandes ci-dessous.

```
gem install bundler
bundle install
bundle exec jekyll serve --watch --baseurl ''
```
