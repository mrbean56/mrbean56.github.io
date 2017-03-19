"use strict";


/* GLOBAL VARs              */

var $wrapper = document.getElementById('bdWrapper');
var $search = document.getElementById('bdSearch');
var $searchfield = document.getElementById('bdSearchField');
var $image = document.getElementById('bdImage');
var $fills = document.getElementsByClassName('bdFills');
var $customlinks = document.getElementById('bdCustomLinks');


/* FUNCTIONS                */

/* Event Blocker */
function eventblock() { event.preventDefault(); };


/* Search Box               */
function search(e) {
    var key = window.event ? e.keyCode : e.which;
    
/*  // ESC & Backspace      */
    if (key === 27 || (key === 8 && $searchfield.value === '')) {
        searchDefault();
    }
/*  // Enter                */
    else if (key === 13 && $searchfield.value) {
        urlFire();
    }
/*  // Any                  */
    else {
        searchOpen();
    }        
} 

/*  // search box helper    */

    function searchDefault() {
        $searchfield.blur();
        $search.style.display = 'none';
        $customlinks.style.display = 'block';
        $image.style.filter = 'none';
        $searchfield.value = '';
    }
    function searchFire() {
        if ($searchfield.value !== '') {
            window.location.replace('https://duckduckgo.com/?q=!g+' + $searchfield.value); 
        }
    }
    function urlFire() {
        if ($searchfield.value.includes('.' && 'http')) {
            window.location.replace($searchfield.value);
        }
        else if ($searchfield.value.includes('.')){
            window.location.replace('http://' + $searchfield.value);
        }
        else {
            searchFire();
        }
    }
    function searchOpen() {
        if (!$searchfield.matches(':focus')) {
            $search.style.display = 'block';
            $customlinks.style.display = 'none';
            $searchfield.focus();
            $image.style.filter = 'blur(40px)';
        }
    }
    
    
/* EVENT HANDLERS           */

/* Desktop                  */
if (document.attachEvent) { document.attachEvent('onkeydown', search) }
else { document.addEventListener('keydown', search) };

/* Mobile                   */
if ('ontouchstart' in document.documentElement) {

/* // event blocker         */
    if ($wrapper.attachEvent) { $wrapper.attachEvent('ontouchstart', eventblock) }
    else { $wrapper.addEventListener('touchstart', eventblock) };

/* // search box            */
/* // // open               */
    if ($wrapper.attachEvent) { $wrapper.attachEvent('ontouchmove', searchOpen) }
    else { $wrapper.addEventListener('touchmove', searchOpen) };

/* // // close              */
    if ($search.attachEvent) { $search.attachEvent('ontouchend', searchDefault) }
    else { $search.addEventListener('touchend', searchDefault) };

    if ($searchfield.attachEvent) { $searchfield.attachEvent('onblur', searchDefault) }
    else { $searchfield.addEventListener('blur', searchDefault) };
    
}

