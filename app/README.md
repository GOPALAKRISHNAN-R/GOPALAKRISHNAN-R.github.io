# Acodeidea

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [NPM dependencies](#npm-dependencies)
- [Customization](#customization)
- [Project Setup](#project-setup)
- [Team](#)
- [More Updates](#more-updates)
- [Copyright and License](#copyright-and-license)

## Introduction

[Live Demo](https://acodeidea.github.io/)

## Architecture

<b>Frontend:</b> HTML, CSS, Bootstrap 4, JavaScript, Vue.js

<b>Icon Library:</b> Font Awesome v5.8.1

<b>Fonts Family:</b> Montserrat, Roboto, Roboto slab, Droid Serif, Helvetica Neue

<b>Colors used:</b>

<ul>
<li><b>Primary:</b> #377dff</li>
<li><b>Primary Light:</b> #2e6ad8</li>
<li><b>Secondary:</b> #ed1d24</li>
<li><b>Dark:</b> #1f2749</li>  
</ul>

<b>Storage:</b> Browser LocalStorage

## NPM dependencies:

| #  | NPM Package        | Version |
|----|--------------------|---------|
| 1  | axios              | 0.18.1  |
| 2  | d3                 | 3.5.17  |
| 3  | jquery             | 2.2.4   |
| 4  | moment             | 2.27.0  |
| 5  | moment-range       | 4.0.2   |
| 6  | nprogress          | 0.2.0   |
| 7  | popper.js          | 1.16.1  |
| 8  | bootstrap          | 4.5.2   |
| 9  | tabulator-tables   | 4.7.2   |
| 10 | vee-validate       | 2.2.15  |
| 11 | vue-html-to-paper  | 1.3.1   |

## Customization

The customization of this application is based on the JSON data, which is located in the [public folder](https://github.com/acodeidea/acodeidea.github.io/tree/master/public). 
The [main_data.json](https://github.com/acodeidea/acodeidea.github.io/blob/master/public/main_data.json) file has the Expense Claim, Teams Finder, and Spinner data, which is used on the home page for navigation.

<b>Expense Claim:</b>
If you want to add new expense categories or modifying the existing categories, you can directly edit into this [expense_static_data.json](https://github.com/acodeidea/acodeidea.github.io/blob/master/public/expense_static_data.json) file.

<b>Teams Finder & Spinner:</b>
Like the expense claim, you're able to edit the team lists in the [teams_list.json](https://github.com/acodeidea/acodeidea.github.io/blob/master/public/teams_list.json) file.

Note: Only the active data is visible for both Teams Finder and Spinner. 

## Project setup

After cloning the repo, do
```
npm install
```

### Compiles and hot-reloads for development

To run this application in development server, do
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## More Updates

Follow us on [LinkedIn](https://www.linkedin.com/company/acodeidea) to get the latest update about features, code, and more. If you like this project give a star to this repo.

## Thanks

Thanks to all contributors and their support.

If you have an idea or you want to do something, tell us.

we're always happy to hear your feedback!

## Copyright and license
  
Code and documentation copyright 2020 the authors. Code released under the [MIT License](https://github.com/acodeidea/acodeidea.github.io/blob/master/LICENSE).
