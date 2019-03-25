# *CDS design research team handbook* 

[cds-snc.github.io/design-research-handbook](cds-snc.github.io/design-research-handbook/) 



## Purpose and audience
This handbook is for Canadian Digital Service researchers and other staff. Some of the links inside it may not be accessible to people outside CDS.

## Running the repo locally

This handbook uses [Jekyll](http://jekyllrb.com/) and the [DOCter](https://github.com/cfpb/DOCter) theme.

DOCter needs Jekyll and other dependencies to run locally. Install these dependencies with Bundler by running the following commands.

```
gem install bundler
bundle install
```

Run Jekyll:

```
bundle exec jekyll serve --watch --baseurl ''
```

Open it up in your browser: <http://localhost:4000/>