// List of content: 
var list = [
    {'title': 'CSS Hex Colors', 
     'description': 'Here you can find different colors for CSS', 
     'url': 'https://www.color-hex.com/', 
     'color': '#3d8929'},
    {'title': 'CSS Properties', 
    'description': 'Here you can find different properties for CSS', 
    'url': 'https://www.w3schools.com/cssref/', 
    'color': '#8803b5'},
    {'title': 'Everything HTML, CSS, and JavaScript,', 
    'description': 'the most common languages used in making web pages.', 
    'url': 'https://htmldog.com/', 
    'color': '#d64d48'},
]

// Current: 
var current_item = 0;

console.log("Hello World!") 

function previous() {
    console.log("previous!");

    current_item--;
    if (current_item < 0)
        current_item = list.length - 1
    
    // Info of current item
    document.getElementById("tool_id").style.background = list[current_item].color;
    document.getElementById("tool_id").innerHTML = list[current_item].title;
    document.getElementById("desc_id").innerHTML = list[current_item].description;
    document.getElementById("url_id").href = list[current_item].url;
}

function next() {
    console.log("next!");

    current_item++;
    if (current_item >= list.length)
        current_item = 0
    
    // Info of current item
    document.getElementById("tool_id").style.background = list[current_item].color;
    document.getElementById("tool_id").innerHTML = list[current_item].title;
    document.getElementById("desc_id").innerHTML = list[current_item].description;
    document.getElementById("url_id").href = list[current_item].url;
}