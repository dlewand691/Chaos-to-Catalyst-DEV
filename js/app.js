// @codekit-prepend "js/cognizant-framework-2020.js"

var figure = $(".accordion-title").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}