# react comments

Get the AMD module located at `react-comments.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactComments': 'react-comments'
  }
});

require(['react', 'ReactComments'], function(React, ReactComments) {

  React.render(React.createElement(ReactComments), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
