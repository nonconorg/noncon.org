## noncon.org

this is the noncon.org homepage, built using the [@magic](https://github.com/magic/core) framework.

it is hosted at [parallele.at](https://parallele.at) using github pages.


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
git clone git@github.com:nonconorg/noncon.org

cd noncon.org

npm install

# see all available tasks
npm run

# run dev env
npm run dev

# build to /docs dir
npm run build

# publish page on noncon.org (after comitting all changes to src and docs)
git push

```
