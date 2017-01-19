#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'learn-graphql',
    title       : 'Learn GraphQL',
    subtitle    : '...',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
