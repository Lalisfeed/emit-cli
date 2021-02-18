#!/usr/bin/env node

const fs = require('fs')
const args = process.argv.slice(2)
const ppp = require("./package.json")
// args type : emit filename filetype

// (fileType, fileName, fileContent)
const fsWrite = (foo,bar,baz) => {
    fs.writeFileSync(process.cwd() + "/" + bar + "." + foo, baz)
    console.log(":) Created " + bar + "." + foo + " file.") 
    console.log(" ")
}

// print error
const filedError = () => {
    console.log("Usage: emit [filetype]... [filename]... [framework]...")
    console.log(" ")
    console.log("Try 'emit --help' to know more.")
}

const fileHelp = () => {
    console.log("Hello! from `emit`- a command line cli ")
    console.log("I'm here to help you create new files.")
    console.log(" ")
    console.log("> Usage: emit [filetype]... [filename]... [framework]...")
    console.log("Note: filetype is the file extension")
    console.log(" ")
    console.log("filetypes that I can recognize are as follows.")
    console.log("   [filetype]...   [About]")
    console.log("   html            - create a (.html) Html file.")
    console.log("   css             - create a (.css) Css file.")
    console.log("   js              - create a (.js) Javascript file.")
    console.log("   pjson           - create a package.json file. (used for `npm`)")
    console.log("   vue             - create a (.vue) Vue file.")
    console.log("   py              - create a (.py) Python file.")
    console.log("   java            - create a (.java) Java file.")
    console.log("   go              - create a (.go) Go file.")
    console.log("   php             - create a (.php) Php file.")
    console.log("   swift           - create a (.swift) Swift file.")
    console.log("   sh              - create a (.sh) Bash file.")
    console.log("   c               - create a (.c) C file.")
    console.log("   cpp             - create a (.cpp) C++ file.")
    console.log("   cs              - create a (.cs) C# file.")
    console.log("   r               - create a (.r) R file.")
    console.log("   rb              - create a (.rb) Ruby file.")
    console.log("   pl              - create a (.pl) Perl file.")
    console.log("   pas             - create a (.pas) Pascal file.")
    console.log(" ")
    console.log("[Frameworks]...")
    console.log("   --rfce            - create a (.js) ReactJS file with .")
    console.log("   --rafc            - create a (.js) ReactJS file.")
    console.log("   --rafce           - create a (.js) ReactJS file.")
    console.log("   --rafcp           - create a (.js) ReactJS file.")
    console.log("   --vue             - create a (.vue) VueJS file.")
    console.log(" ")
    console.log("Note: If filename is not given, `Index` will be used as default.")
    console.log("      Existing files will be overwritten!!!")
    console.log(" ")
    console.log("Report Issues at https://github.com/Lalisfeed/emit-cli/issues/new.")
}
// All pages

//  bash page .sh
const shPage = (argx) => {
    return `echo "${argx}";
`
}

//  c page .c
const cPage = (argx) => {
    return `#include <stdio.h>

int main()
{
    printf("Hello ${argx}!");

    return 0;
}
`
}

// cpp page .cpp
const cppPage = (argx) => {
    return `#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello, ${argx}!";

    return 0;
}
`
}

// c# page .cs
const cshPage = (argx) => {
    return `using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}
`
}

// html page .html
const htmlPage = (argx) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${argx}</title>
</head>
<body>
    
</body>
</html>
`
}

//  css page .css
const cssPage = (argx) => {
    return `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
}

const jsPage = (argx) => {
    return `console.log("${argx}");
const func = (x) => {
    return x;
}

export default func;
`
}


// pjson page .json
const pjsonPage = (argx) => {
    return `{
  "name": "dev",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}
`
}

const vuePage = (argx) => {
    return `<template>
  <div class="${argx}">
      <h1>Hello World!</h1>
  </div>
</template>

<script>
export default {
  name: '${argx}',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.${argx}{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
`
} 
// py page .py
const pyPage = (argx) => {
    return `print ('Hello World')
`
}


// java page .java
const javaPage = (argx) => {
    return `public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}
`
}

// php page .php
const phpPage = (argx) => {
    return `echo "Hello World";
`
}

// swift page .swift
const swiftPage = (argx) => {
    return `print("Hello World")
`
}

// ruby page .rb
const rubyPage = (argx) => {
    return `puts "Hello World"
`
}

// R page .r
const rPage = (argx) => {
    return `print("Hello World")
`
}

// go page .go
const goPage = (argx) => {
    return `package main

import "fmt"

func main() {
	fmt.Println("Hello, ${argx}!")
}
`
}

// perl page .pl
const perlPage = (argx) => {
    return `print "Hello World";`
}

// pascal page .pas
const pascalPage = (argx) => {
    return `program Hello;
begin
  writeln ('Hello World')
end.
`
}

// functions for web frameworks

const rfcePage = (argx) => {
    return `import React from 'react'

function ${argx}() {
  return (
        <div>
            
        </div>
    )
}

export default ${argx}`
}

const rafcPage = (argx) => {
    return `import React from 'react'

export const ${argx} = () => {
    return (
        <div>
            
        </div>
    )
}
`
}


const rafcePage = (argx) => {
    return `import React from 'react'

const ${argx} = () => {
    return (
        <div>
            
        </div>
    )
}

export default ${argx}`
}


const rafcpPage = (argx) => {
    return `import React from 'react'
import PropTypes from 'prop-types'

const ${argx} = props => {
    return (
        <div>
            
        </div>
    )
}

inde.propTypes = {

}

export default ${argx}
`
}

const vueFrPage = (argx) => {
    return `<template>
  <div class="${argx}">
      
  </div>
</template>

<script>
export default {
  name: '${argx}',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.${argx}{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
`
}



if (args.length == 1 || args.length == 2){
    if(!args[1]) {
        args[1] = "Index"
    }
    if ((args[0] === "--help") || (args[0] === "-h")){
        fileHelp()
    }
    else if ((args[0] === "--version") || (args[0] === "-v")){
        console.log("version " + ppp.version)
    }
    else if(args[0] === "html"){
        fsWrite(args[0], args[1], htmlPage(args[1]))
    }
    else if (args[0] === "css"){
        fsWrite(args[0], args[1], cssPage(args[1]))
    }
    else if (args[0] === "js"){
        fsWrite(args[0], args[1], jsPage(args[1]))
    }
    else if (args[0] === "pjson"){
        args[1] = "package"
        fsWrite(args[0], args[1], pjsonPage(args[1]))
    }
    else if (args[0] === "vue"){
        fsWrite(args[0], args[1], vuePage(args[1]))
    }
    else if (args[0] === "py"){
        fsWrite(args[0], args[1], pyPage(args[1]))
    }
    else if (args[0] === "java"){
        fsWrite(args[0], args[1], javaPage(args[1]))
    }
    else if (args[0] === "php"){
        fsWrite(args[0], args[1], phpPage(args[1]))
    }
    else if (args[0] === "swift"){
        fsWrite(args[0], args[1], swiftPage(args[1]))
    }
    else if (args[0] === "go"){
        fsWrite(args[0], args[1], goPage(args[1]))
    }
    else if (args[0] === "sh"){
        fsWrite(args[0], args[1], shPage(args[1]))
    }
    else if (args[0] === "c"){
        fsWrite(args[0], args[1], cPage(args[1]))
    }
    else if (args[0] === "cpp"){
        fsWrite(args[0], args[1], cppPage(args[1]))
    }
    else if (args[0] === "cs"){
        fsWrite(args[0], args[1], cshPage(args[1]))
    }
    else if (args[0] === "r"){
        fsWrite(args[0], args[1], rPage(args[1]))
    }
    else if (args[0] === "rb"){
        fsWrite(args[0], args[1], rubyPage(args[1]))
    }
    else if (args[0] === "pl"){
        fsWrite(args[0], args[1], perlPage(args[1]))
    }
    else if (args[0] === "pas"){
        fsWrite(args[0], args[1], pascalPage(args[1]))
    }
    else {
        console.log("file of type `" + args[0] + "` not found.")
        filedError()
    }
}
else if (args.length == 3) {
    if(!args[1]) {
        args[1] = "Index"
    }
    if (args[0] == "js" && args[2] == "--rfce") {
        fsWrite(args[0], args[1], rfcePage(args[1]))
    }
    else if (args[0] == "js" && args[2] == "--rafc") {
        fsWrite(args[0], args[1], rafcPage(args[1]))
    }
    else if (args[0] == "js" && args[2] == "--rafce") {
        fsWrite(args[0], args[1], rafcePage(args[1]))
    }
    else if (args[0] == "js" && args[2] == "--rafcp") {
        fsWrite(args[0], args[1], rafcpPage(args[1]))
    }
    else if (args[0] == "vue" && args[2] == "--vue") {
        fsWrite(args[0], args[1], vueFrPage(args[1]))
    }
    else {
        console.log("could not recognize filetype or framework.") 
        filedError()
    }
}
else {
    console.log("Invalid options.")
    filedError()
}
