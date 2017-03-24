# reactmd-brunch

This brunch plugin will compile markdown files into a React component.

## Installation

```$ npm install reactmd-brunch```

## Usage

```js
import { Component } from 'react';
import MarkdownContent from './content.md'

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Heading</h1>
        <MarkdownContent />
      </div>
    );
  }
}
```

## Replacements

Given markdown file that looks like this:
```md
# Lorem ipsum dolor sit amet!

Lorem ipsum dolor sit amet, {{TOKEN1}} elit. Recusandae minus, doloremque [{{TOKEN2}}]({{TOKEN3}})
```

```js
import { Component } from 'react';
import MarkdownContent from './content.md'

const replacements = {
  TOKEN1: 'consectetur adipisicing',
  TOKEN2: 'adipisci assumenda dolore',
  TOKEN3: 'adipisci eligendi',
};

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Heading</h1>
        <MarkdownContent replacements={replacements} />
      </div>
    );
  }
}
```

