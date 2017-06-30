# kladrapi react

Get the AMD module located at `kladrapi-react.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'KladrapiReact': 'kladrapi-react'
  }
});

require(['react', 'KladrapiReact'], function(React, KladrapiReact) {

  React.render(React.createElement(KladrapiReact), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
