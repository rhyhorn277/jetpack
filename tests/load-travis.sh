#!/bin/bash

if [ "$WP_TRAVISCI" != "phpunit" ]; then
    gem install sass
    gem install compass
    source ~/.nvm/nvm.sh
    nvm install 5.11
    nvm use 5.11
    npm install -g npm
    node --version
    npm --version
    nvm --version
    npm install -g gulp-cli
    npm install
fi
