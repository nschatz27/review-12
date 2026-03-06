"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Noah Schatz
   Date:   03/06/2026

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
   var articleElement = document.getElementById("doc");
   var h2 = document.getElementsByTagName("h1")[0];
}

var asideElement = document.createElement("aside");
asideElement.setAttribute("id", "keywords")

var h1Element = document.createElement("h1");
var h1Text = document.createTextNode("Keyword List");

h1Element.appendChild(h1Text);
asideElement.appendChild(h1Element);
articleElement.insertBefore(asideElement, h2);

var orderedListElement = document.createElement("ol");
asideElement.appendChild(orderedListElement);

var keywordElems = document.querySelectorAll("dfn");
var keyWords = [];

for (var i = 0; i < keywordElems.length; i++) {
   keyWords.push(keywordElems[i].textContent);
}

keyWords.sort();

keywordElems.forEach((elem) => {
   elem.setAttribute("id", "keyboard_" + replaceWS(elem.textContent));
});

for (var i = 0; i < keyWords.length; i++) {
   var listItemElement = document.createElement("li");
   var keyWordLink = document.createElement("a");
   keyWordLink.innerHTML = keyWords[i];

   keyWordLink.setAttribute("href", "#keyword_" + replaceWS(keyWords[i]));
   listItemElement.appendChild(keyWordLink);
   orderedListElement.appendChild(listItemElement);
}

function makeKeyStyles() {
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords { " + 
      "border: 3px solid rgb(101, 101, 101);" + 
      "float: right;" + 
      "margin: 20px 0px 20px 20px;" + 
      "padding: 10px;" + "width: 320px;" + 
      "}" , 0
   );

   document.styleSheets[document.styleSheets.length -1].insertRule(
      "aside#keywords h1 { " + 
      "font-size: 2em;" + 
      "margin: 5px;" + 
      "text-align: center;" + " } ", 1
   ); 

   document.styleSheets[document.styleSheets.length -1].insertRule(
      "aside#keywords ol { " + 
      "font-size: 1.2em;" +
      "margin-left: 20px;" +
   "}" , 2
   );

   document.styleSheets[document.styleSheets.length -1].insertRule(
      "aside#keywords ol li { " +
      "line-height: 1.5em;" +
      "{" , 3
   );

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol li a { " +
      "color: rgb(101, 101m 101);" +
      "text-decoration: none;" +
      "}" , 4
   );
}

/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
