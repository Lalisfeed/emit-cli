#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const args = process.argv.slice(2)
// args type : emit filename filetype


// html page .html
const htmlPage = (argx) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
}

//  css page .css
const cssPage = (argx) => {
    return `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`
}

//  c page .c
const cPage = (argx) => {
    return `#include <stdio.h>

int main()
{
    printf("Hello World");

    return 0;
}`
}

// cpp page .cpp
const cppPage = (argx) => {
    return `#include <stdio.h>

int main()
{
    printf("Hello World");

    return 0;
}`
}

// c# page .cs
const cshPage = (argx) => {
    return `using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`
}

// py page .py
const pyPage = (argx) => {
    return `print ('Hello World')`
}

// ruby page .rb
const rubyPage = (argx) => {
    return `puts "Hello World"`
}

// php page .php
const phpPage = (argx) => {
    return `echo "Hello World";`
}

// java page .java
const javaPage = (argx) => {
    return `public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}`
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

// R page .r
const rrPage = (argx) => {
    return `print("Hello World")`
}


// swift page .swift
const swiftPAge = (argx) => {
    return `print("Hello World")`
}

//  
//  # emit-cli
//  
//  > A template generation cli for all languages
//  
//  ## Installation
//  
//  ```
//  npm i emit-cli -g
//  ```
//  
//  ## Usage
//  
//  ```
//  emit filename filetype
//  ```
//  
//  For Example
//  ```
//  emit index html
//  ```
//  
//  ## License
//  
//  > MIT License