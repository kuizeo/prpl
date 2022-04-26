# `prpl`

`prpl` is a little library I made in around May of 2021 to help with a script I
was writing. As I added more external dependencies, I expanded it to work with
`.catch()` and `.finally()`. (I still use it internally in my projects today.)

Basically, it allows you to pass extra arguments to promise reject and resolve
functions. Assume the following promise and callback:

```javascript
function add(x, y) {
  return x + y;
}

const promise = new Promise((re, reject) => {
  request(1);
});
```

Without `prpl`, you'd need to do something like this:

```javascript
const other_value_in_scope = 2;
promise.then((value) => add(value, other_value_in_scope));
```

This is inefficient (it creates an anonymous function for no reason) and is very
verbose. However, with `prpl`, this is simplified to:

```javascript
const other_value_in_scope = 2;
prpl(promise).then(value, other_value_in_scope);
```

This is still imperfect (it creates a new function behind the scenes), but is
more flexible and most definitely simpler.

---

Copyright 2022 kuizeo

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
