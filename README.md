# [Git co commit](https://git-co-commit.github.io/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/git-co-commit/git-co-commit/blob/master/LICENSE) [![npm](http://img.shields.io/badge/npm-v1.0.8-brightgreen)](https://www.npmjs.com/package/git-co-commit) [![Known Vulnerabilities](https://snyk.io/test/github/git-co-commit/git-co-commit/badge.svg?targetFile=package.json)](https://snyk.io/test/github/git-co-commit/git-co-commit?targetFile=package.json)

## [Documentation ![Get started](http://img.shields.io/badge/Get%20started-Docs-green)](https://git-co-commit.github.io/#/get-started)

<img alt="Logo" align="right" src="https://git-co-commit.github.io/static/media/gitcocommit.0ea576b8.webp" width="20%" />

When a pair or multiple developers work on git projects, there is a convention that allows us to document our co-authors in the commit message. However, adding the co-authorship information on every single commit is painful.

Do a git commit in the same way it is usually done, with the pair members username, to make them get credit for the commit (if more than one member works on the same code, separate the username by comma). The author’s name(who writes the code - Driver) on the commit will be added automatically.

Each co-author will be added to the commit message, so that they are also credited in the github contributions view!

### Before pairing

![before pairing](https://git-co-commit.github.io/static/media/git-co-commit-before-gitpair.f280e555.webp)

### After pairing

![after pairing](https://git-co-commit.github.io/static/media/git-co-commit-after-gitpair.8b374657.webp)

<br>

## [Overview](https://git-co-commit.github.io/#/get-started/installing-using-git-co-commit)

1. To install git co commit run the following command in the cmd or bash

```bash
$ npm i -g git-co-commit
```

It will install the git-co-commit package and add all the dependencies to the root level of your computer. To use the installed git co commit package do the following

2. Create a folder and then open the folder in cmd or bash

```bash
$ mkdir demo
$ cd demo
```

3. Run git init

```bash
$ git init
```

4. Add index.html file

```bash
$ touch index.html
```

5. Run git add index.html

```bash
$ git add index.html
```

6. Run commit - it will ask for a commit message, once you add your commit message, it will ask for the pair’s username separated by comma (Author’s name doesn’t need to be included, it will be automatically added).

```bash
$ commit
```

![Use git co commit](https://git-co-commit.github.io/static/media/git-co-commit-use.b6f85d7f.webp)

To know more visit the documentation site of [git co commit](https://git-co-commit.github.io/)

## License

Git co commit is open source npm package [licensed as MIT](https://github.com/git-co-commit/git-co-commit/blob/master/LICENSE).
