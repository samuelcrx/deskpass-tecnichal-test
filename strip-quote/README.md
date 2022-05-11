 # Strip quote
A function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.

Quotation marks includes:
```js
 ' \u0022
 " \u0027
 ‘ \u2018    ’  \u2019
 “ \u201C    ”  \u201D
 ‹ \u2039    ›   \u203A
 « \u00AB    »   \u203A
```

Quotes that are part of the words includes:
 - Apostrophes `(event after the "s" (s'))`
 - Contractions


## Project setup
```
yarn install
```
## Start project
```
node index.js 'Your "String"'
```
## Launches the test runner
```
yarn start
```
## Project build
```
yarn build
```
## Format code
```
yarn prettier
```