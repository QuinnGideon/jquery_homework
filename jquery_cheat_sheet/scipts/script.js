// $(document).ready(function(){

// })

$(document).ready(function(){ // Code doesn't run until a ready event is fired. It // only fires after all DOM elements are loaded

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js">  // jQuery script tag

$('#username').val();  // How to get input contents of a form in jQuery... Search for jQuery CDN

$('#heading').text("message" + "heading") // How to change text in jQuery

$('#heading').html()  // Changes the contents of the HTML tags, like innerHTML would in JS

$("body").hide();  //  How to hide something
$("body").show();  //  How to show something
$("#section-one").fadeOut(); //  How to fade something out
$("#section-one").fadeIn(4000);  //  How to fade something in over 4 secs
$("#section-one").slideUp(1000); //Fade out over 1 second
$("#section-one").slideDown(4000); //Fade in over 4 seconds

$(".my-element").animate( {    // Use jQuery's animate() method to animate most CSS properties that are numeric
	opacity: 0.25,   
	width: "70%" 
} , 2000 );

<div class="main-section"> <h1>Hello World</h1> </div>  //Example
$(".main-section").html("<h3>Hello World Smaller</h3>") //With jQuery change

function(){   //  Anonymous functions
  alert("I am anonymous!");  //
} // 

var someOtherFunction = function(){ alert('hello world'); } // Callback functions

<h1>First Header</h1> <h1>Second Header</h1> // Example of 2 of the same elements
$("h1").first() // This gets the first element... last() gets the last
	
<h1>First Header<h1><h1>Second Header</h1><h1>Third Header</h1> // Example of more than 2 of the same elements
var secondHeader = $("h1")[1]; // Selecting the 2nd header in an array fashion
$(secondHeader).text("New Text"); // Changing that item 

====OR====

$($("h1")[1]) // Simplified


var main = function() {  //Toggling a dropdown menu
  $(".dropdown-toggle").click(function() {
    $(".dropdown-menu").toggle();
  });
};