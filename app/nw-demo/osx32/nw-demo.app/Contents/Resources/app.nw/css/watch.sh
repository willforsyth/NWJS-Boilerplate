#!/bin/sh

# Change `style.css` or `style.min.css` to whatever you would like your compiled
# stylesheet to be called. Do not rename `style.scss` or alter references to it.

# No minification
sass --watch project.scss:../../public/css/style.css --style expanded

# Minification for production
sass --watch project.scss:../../public/css/style.min.css --style compressed

exit 0
