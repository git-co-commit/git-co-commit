# git-co-commit

When a pair or multiple developers work on git projects, there is a convention that allows us to document our co-authors in the commit message. However, adding the co-authorship information on every single commit is painful. <br><br>
Install git-co-commit package to use just a single commit to add all the team members that worked in the project as co-authors. <br><br>
Each co-author will be added to the commit message, so that they are also credited in the github contributions view!

### Before pairing

![before pairing](https://raw.githubusercontent.com/bdo/gitpair/master/docs/before-gitpair.png)

### After pairing

![after pairing](https://raw.githubusercontent.com/bdo/gitpair/master/docs/after-gitpair.png)

<br>

## Install it globally,

```bash
npm i -g git-co-commit
```

#### Use it globally,

```bash
commit
```

## Install it locally,

```bash
npm i git-co-commit
```

#### For using it locally, specify following in scripts of package.json

```js
"commit": "commit"
```

#### For running it

```bash
npm run commit
```
