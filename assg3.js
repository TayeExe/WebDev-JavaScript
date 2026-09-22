 /**********
Date: 09-12-2026
Author: Taylor Austin
Class: CITW 165
Exercise: Exercise 2
**********/  

var greeting = 'Hi there ';
var name = 'Taylor';
var message = ', Thank you for shopping with Press Start! Please confirm all of the information is correct before confirming payment:';
var welcome = greeting + name + message;

var gameboy = 129.99;
var color = 'Yellow'
var games = 2;
var subTotal = (games * 5.99) + gameboy;
var shipping = 2.99;
var divider = "-------------";
var grandtotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elGameboy = document.getElementById('userSign');
elGameboy.textContent = '$' + gameboy;

var elColor = document.getElementById('color');
elColor.textContent = color;

var elGames = document.getElementById('games');
elGames.textContent = games;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = ' $' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elDivider = document.getElementById('divider');
elDivider.textContent = divider;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$ ' + grandtotal;