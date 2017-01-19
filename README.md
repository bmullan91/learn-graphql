# learn-graphql

> _Looking for more interactive tutorials like this? Go to [nodeschool.io](http://nodeschool.io)._

## Get help
Having issues with learn-graphql? Get help troubleshooting in the [nodeschool discussions repo](http://github.com/nodeschool/discussions), or on gitter:

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/nodeschool/discussions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Install Node.js

Make sure Node.js is installed on your computer.

Install it from [nodejs.org/download](http://nodejs.org/download)

On Windows and using v4 or v5 of Node.js? Make sure you are using at least 5.1.0, which provides a fix for a bug on Windows where you can't choose items in the menu.

### Install `learn-graphql` with `npm`

Open your terminal and run this command:

```
npm install --global learn-graphql
```

The `--global` option installs this module globally so that you can run it as a command in your terminal.

#### Having issues with installation?

If you get an `EACCESS` error, the simplest way to fix this is to rerun the command, prefixed with sudo:

```
sudo npm install --global javascripting
```

You can also fix the permissions so that you don't have to use `sudo`. Take a look at this npm documentation:
https://docs.npmjs.com/getting-started/fixing-npm-permissions

## Run the workshop

Open your terminal and run the following command:

```
learn-graphql
```

You'll see the menu:

_TODO screenshot_

Navigate the menu with the up & down arrow keys.

Choose a challenge by hitting enter.

### Take a look at this gif that shows the first challenge:

_TODO gif_

You can use any editor you like.

[atom](http://atom.io) or [brackets](http://brackets.io/) are both good options.

## Need help with an exercise?

Open an issue in the nodeschool/discussions repo: https://github.com/nodeschool/discussions

Include the name `learn-graphql` and the name of the challenge you're working on in the title of the issue.

## Get Involved

Found an issue, is the documentation lacking in some areas? You can help out [TODO link goes here]()


## TODO

1. More challenges
  - Arguments
  - Custom Object types
  - Resolver methods and async demo with promises
  - Linking types and resolving them
  - DataLoader as a caching mechanism


## Development

To test and and run an exercise directly (when you've cloned the repo or installed locally) replace `learn-graphql` with `node index.js`.

If you're building a new exercise and want to test it run:

`node index.js verify exercises/<exercise-name>/solution/solution.js`
