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

var matcher = /{{(\\w+?)}}/g;
var raw = ${JSON.stringify(data)};

module.exports = function Markdown(iprops) {
  var replacements = iprops.replacements;
  var source = (replacements) ? raw.replace(matcher, (_, key) => replacements[key] || key) : raw;
  var rest = Object.keys(iprops).reduce((obj, key) => {
    if (key !== 'replacements') { obj[key] = iprops[key]; }
    return obj;
  }, {});
  var props = Object.assign({}, rest, { source });
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
