# *Design research team handbook* 


## Editing the documentation

The documentation uses [Jekyll](http://jekyllrb.com/) and the [DOCter](https://github.com/cfpb/DOCter) theme.

DOCter needs Jekyll and other dependencies to run locally. These can be installed with Bundler by running the following commands.

```
gem install bundler
bundle install
```

Run Jekyll:

```
bundle exec jekyll serve --watch --baseurl ''
```

Open it up in your browser: <http://localhost:4000/>


### _config.yml

Options within the `_config.yml` file allow you to control some of the site's
content and left column navigation.
