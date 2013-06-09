#!/bin/bash

# By default, the website is installed in dev mode.
# To change this behavior, please provide the argument "-prod"

#############################################################

# Check requirements
type wget > /dev/null
if [ $? -ne 0 ]; then echo >&2 "Please install \"wget\""; exit 1; fi
type unzip > /dev/null
if [ $? -ne 0 ]; then echo >&2 "Please install \"unzip\""; exit 1; fi
type lessc > /dev/null
if [ $? -ne 0 ]; then echo >&2 "Please install \"lessc\", the LESS CSS compiler: http://lesscss.org/"; exit 1; fi

# Bootstrap
rm -rf bootstrap && \
wget http://twitter.github.io/bootstrap/assets/bootstrap.zip && \
unzip bootstrap.zip && \
rm bootstrap.zip || exit 1

# JQuery
rm -f js/jquery.min.js && \
wget http://code.jquery.com/jquery.min.js && \
mv jquery.min.js js/ || exit 1

# JQuery JSONP
rm -f js/jquery.jsonp.js && \
wget https://raw.github.com/jaubourg/jquery-jsonp/master/src/jquery.jsonp.js && \
mv jquery.jsonp.js js/ || exit 1

# JQuery Cookie
rm -f js/jquery.cookie.js && \
wget https://raw.github.com/carhartl/jquery-cookie/master/jquery.cookie.js && \
mv jquery.cookie.js js/ || exit 1

function	dev() {
  # LESS CSS Javascript for development mode
  rm -f js/less.js && \
  wget https://raw.github.com/cloudhead/less.js/master/dist/less-1.3.3.min.js > /dev/null && \
  mv less-1.3.3.min.js js/less.js || exit 1
}

function	prod() {
    # compile LESS CSS files into CSS files
    rm -rf css && \
    mkdir css && \
    for file in `ls less/*.less | cut -d/ -f2 | cut -d. -f1`
    do
	lessc --yui-compress less/$file.less > css/$file.css
    done || exit 1
}

if [ $1 = "-prod" ]
then
    prod
else
    dev
fi
