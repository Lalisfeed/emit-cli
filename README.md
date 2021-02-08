 # emit-cli
 
 > A template generation cli for all languages and frameworks.

[![npm version](https://img.shields.io/npm/v/emit-cli.svg?style=flat-square)](https://www.npmjs.org/package/emit-cli)
[![install size](https://packagephobia.now.sh/badge?p=emit-cli)](https://packagephobia.now.sh/result?p=emit-cli)
[![npm downloads](https://img.shields.io/npm/dt/emit-cli.svg?style=flat-square)](http://npm-stat.com/charts.html?package=emit-cli)


 ## Installation

 Install and access anywhere.
 
 ```
 npm i emit-cli -g
 ```
 
## Help

For Help use this command
```
emit --help
```
or 
```
emit -h
```

 ## Usage

To generate a simple file, use the following command.
 
 ```
 emit [filetype]... [filename]... 
 ```
 
 > Note: This command can & will overwrite existing files.

 For Example:
 * Generate a file  `Unicorn.html` with:
 
 ```
 emit html Unicorn
 ```

 > Note : default name is ```Index```  

 * Generate a file for a framework

```
 emit [filetype]... [filename]... [framework]... 
 ```

 For Example:
 * Generate a file  `Header.js` for react framework with:
 
 ```
 emit js Header --rafc
 ```

 > Note: Frameworks command is additionally designed for frameworks.

## Contribution

- Pull Requestes will be accepted for good changes.

 ## License
 
 > MIT License
 