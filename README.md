## noncon.org

this is the noncon.org homepage, built using the [@magic](https://github.com/magic/core) framework.

it is hosted at [noncon.org](https://noncon.org) using github pages.


### sanity
to play around:

fork the page somewhere on your personal profile,
setting up github pages for that repository,
then changing config.mjs to reflect your path.

``` javascript
// /config.mjs:
export default {
  ROOT: 'src',
  THEME: 'noncon',
  PUBLIC: 'docs',

  WEB_ROOT: 'YOUR_REPOSITORY_NAME',
  URL: 'YOUR_USER.github.io',
  CNAME: 'noncon.org', <- delete this line.

  HOIST: 'Gdpr',
}

```

### getting started
```
# first get the git repository
git clone https://github.com/nonconorg/noncon.org

# go to the noncon.org directory that just got created
cd noncon.org

# install @magic and other dependencies
npm install

# see all available tasks
npm run

# run dev env
npm run dev

# build to /docs dir
npm run build

# add files to git staging
git add .
git add src/pages/index.mjs

# commit changes with message
git commit -m "commit message"

# publish page on noncon.org (after comitting all changes to src and docs)
git push
```
