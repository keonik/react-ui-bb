# React UI Building Blocks

[![Build Status](https://travis-ci.org/keonik/react-ui-bb.svg?branch=master)](https://travis-ci.org/keonik/react-ui-bb)

I started a react component library to share components. Just like everyone else. It uses [typescript](https://www.typescriptlang.org/), [react-styleguidist](https://react-styleguidist.js.org/), [emotion](https://emotion.sh/docs/introduction), and [testing-library/react](https://testing-library.com/docs/react-testing-library/intro). I tried to build it on my own and got annoyed so I switched to using [tsdx](https://github.com/jaredpalmer/tsdx). Contribute. Give feedback. Do good things!

## [Docs](https://keonik.github.io/react-ui-bb/)

## Quick Start

```jsx
import React from 'react';
import { Button } from 'react-ui-bb';
// optionally react-ui-bb css variables
import 'react-ui-bb/dist/ui.cjs.development.css';

function Page({}) {
    return (
        <div>
            <Button variant="primary" onClick={(e) => console.log('Clicked') }>
                Click Me
            </Button>
        </div>
    );
```

### Overwriting css styles

Either import our css variables

```jsx
import 'react-ui-bb/dist/ui.cjs.development.css';
```

or override them! Put this in your root css or sass file

```css
:root {
  --primary-background: #006445;
  --secondary-background: #d0df63;
  --primary-color: #ffffff;
  --secondary-color: #ffffff;
}
```
