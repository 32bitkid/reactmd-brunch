'use strict';

class ReactMDBrunch {
  constructor(config) {
    this.config = config.plugins.reactmd || {};
  }

  // file: File => Promise[File]
  // Transforms a file data to different data. Could change the source map etc.
  // Examples: JSX, CoffeeScript, Handlebars, SASS.
  compile({ path, data }) {
    const output = `'use strict';
var React = require('react');
var ReactMarkdown = require('react-markdown');
module.exports = function Markdown(iprops) {
  const props = Object.assign({}, iprops, { source: ${JSON.stringify(data)} })
  return React.createElement(ReactMarkdown, props);
};`
    return Promise.resolve(output);
  }
}

ReactMDBrunch.prototype.brunchPlugin = true;
ReactMDBrunch.prototype.type = 'template';
ReactMDBrunch.prototype.extension = 'md';
ReactMDBrunch.prototype.targetExtension = 'js';

module.exports = ReactMDBrunch;
