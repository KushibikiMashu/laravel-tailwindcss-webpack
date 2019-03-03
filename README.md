# Laravel - Tailwind CSS - webpack	
Build assets without using laravel-mix.	

## Installation	

```
$ composer create-project --prefer-dist laravel/laravel laravel-tailwindcss
$ mv postcss.config.js webpack.config.js package.json ./laravel-tailwindcss 
$ cd laravel-tailwindcss
$ yarn install
```

## initialize tailwind CSS

Create Tailwind config file `tailwind.js`

```
$ yarn tailwind init
```

## Create CSS file

```
$ mkdir resources/css
$ touch resources/css/styles.css
```

Add Tailwind CSS preflight and utilities.

```resources/css/styles.css
@tailwind preflight;
@tailwind components;
@tailwind utilities;
```

## Build a CSS file	

Run `$ yarn webpack --mode development`. Webpack will produce `public/css/styles.bundle.css`. This file injects Tailwind CSS's base styles.	

```
                Asset      Size  Chunks             Chunk Names
css/styles.bundle.css  1.09 MiB  styles  [emitted]  styles
  js/styles.bundle.js  8.77 KiB  styles  [emitted]  styles
Entrypoint styles = css/styles.bundle.css js/styles.bundle.js
```

## Requiere bundled CSS in blade
```
<link href="{{ asset('css/styles.bundle.css') }}" rel="stylesheet">
```