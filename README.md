# se-ssn

Validation for Swedish style organization numbers (organisationsnummer).

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

[MIT](LICENSE).
