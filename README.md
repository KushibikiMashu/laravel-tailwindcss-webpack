# Laravel - Tailwind CSS - webpack	
Build assets without using laravel-mix.	

Laravel 5.7
Tailwind CSS v0.7.4

## Installation	

```
$ git clone https://github.com/KushibikiMashu/laravel-tailwindcss-webpack.git
$ cd laravel-tailwindcss-webpack
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

Add Tailwind CSS preflight and utilities in `styles.css`.

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

## Require bundled CSS in blade
```blade
<link href="{{ asset('css/styles.bundle.css') }}" rel="stylesheet">
```
