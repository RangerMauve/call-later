# call-later
Buffer calls to a function until the next tick and get all arguments at once. Use this when you have a function that gets called multiple times synchronously, but you only want to do something with the data once per tick asynchronously. This lets you make a function that will take variable amounts of arguments, and buffer them. On the next tick, your callback will be called with an array of arguments that were used.

```
npm install --save call-later
```

## Example

```js
var later = require("call-later");

var fn = later(function (args) {
    console.log("Shows up second");
    console.log(args);
    // [ ['foo'], ['bar'], ['baz'] ]
});

fn("foo");
fn("bar");
fn("baz");

console.log("Shows up first");
```

## API
### `later(Function<Array<Array<Any>>) -> Function<Any...>`
Takes a callback function which takes an array of argument arrays and returns a function that takes a variable number of arguments and buffers them until the next tick when the callback gets called.

**Note:** Make sure to handle errors yourself since they'll be thrown asynchronously. If needed, I might be adding promise support for handling errors in a simple way
