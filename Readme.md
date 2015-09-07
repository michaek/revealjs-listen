# revealjs-listen

Sets up a nodejs callback for reveal.js slide changes, when your presentation uses [server-side speaker notes](https://github.com/hakimel/reveal.js#server-side-speaker-notes).

## Installation

```bash
npm install --save revealjs-listen
```

## Example

```js
listen = require('revealjs-listen');

listen(function(data){
    console.log(data.state);
});
```
