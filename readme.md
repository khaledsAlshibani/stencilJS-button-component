# Custom Button Web Component

[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

## Table of Contents

- [Custom Button Web Component](#custom-button-web-component)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Using this component](#using-this-component)
    - [Node Modules](#node-modules)
    - [CDN](#cdn)
    - [Integration in HTML](#integration-in-html)
    - [Customization](#customization)
  - [Example Using CDN](#example-using-cdn)

## Overview

**Custom Button Web Component** is a simple and lightweight web component built with Stencil.js.

## Using this component

### Node Modules

Once installed, include the component directly from a CDN in your HTML file:

1. Install the component using NPM:

```bash
npm i stenciljs-button-component
```

2. Script tag: Add the script tag to your HTML file:

```html
<script type="module" src="/node_modules/stenciljs-button-component/dist/stenciljs-button-component/stenciljs-button-component.esm.js"></script>
```

### CDN

Alternatively, include the component directly from a CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/stenciljs-button-component@0.1.1/dist/stenciljs-button-component/stenciljs-button-component.esm.js"></script>
```

### Integration in HTML

After importing the component, use it in your HTML file:

```html
<kh-button text="Button text" link="button-link"></kh-button>
```

### Customization

Easily customize the button by updating the `text` and `link` attributes:

```html
<kh-button text="New Text" link="new-link"></kh-button>
```

Feel free to modify the button's behavior based on your specific needs.

## Example Using CDN

Here's a complete example of integrating and customizing the Custom Button Web Component in an HTML project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stencil Button Component Test</title>
    <script type='module' src='https://cdn.jsdelivr.net/npm/stenciljs-button-component@0.1.1/dist/stenciljs-button-component/stenciljs-button-component.esm.js'></script>
</head>
<body>
    <kh-button text="Visit Me On NPM" link="https://www.npmjs.com/package/stenciljs-button-component"></kh-button>
</body>
</html>
```