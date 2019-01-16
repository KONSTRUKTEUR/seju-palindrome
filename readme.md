# Phrase object (with palindrome detector)

This is a sample npm module for checking palindromes.

The module can be used as follows:

```
$ npm install --global seju-palindrome
$ vim test.js
let Phrase = require("seju-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```