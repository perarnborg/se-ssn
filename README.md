# se-ssn

Validation for Swedish style organization numbers (organisationsnummer).

The validation checks that the first 6 chars are a representation of a valid date from the last 100
years (this behaviour can be configured, see Getting started) and that char 10 is a valid control
digit based on the other characters.

## Getting started

The library is available as an [npm package](https://www.npmjs.com/package/se-ssn).
To install the package run:

```bash
npm install se-ssn --save
```

Use like this:

```js
import {isValidSsn} from 'se-ssn'

isValidSsn('8101013608')
//=> true

isValidSsn('foo')
//=> false

// Optionally validate that a ssn is for a person of at least a certain age
isValidSsn('8101013608', {minYears: 80})
//=> false
```

If you are in a multinational context you can use the alias isValidSwedishSsn for clarity:

```js
import {isValidSwedishSsn} from 'se-ssn'

isValidSwedishSsn('8101013608')
//=> true
```

Alternatively with CommonJS:
```js
var seSsn = require("se-ssn")

seSsn.isValidSsn('8101013608')
//=> true
```

## Legacy support

IE8 is not supported.

## License

[MIT](LICENSE).
