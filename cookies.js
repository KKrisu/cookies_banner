(function () {
    'use strict';
    
    // configs
    var cookieName = 'c_cookies',
        cookieExDays = 365,
        cookieInfoBaner = '<div id="cookie_info" style="color: #444; background: #fff; width: auto; min-width: 750px; max-width: 50%; margin: 0 auto; font: 12px Tahoma sans-serif; padding: 0.5em; border: 2px solid #29f; position: fixed; bottom: 0; left: 0; z-index: 9999;">'
            +'<button style="float: right; margin: 5px; background-color: #29f; color: white; font-weight: bold; border-radius: 7px; cursor: pointer;" id="accept_cookies">Accept Cookies</button>'
            +'<div style="font-family: serif; font-size: 1.4em; background: #29f; float: left; padding: .25em .75em; border-radius: 50%; color: white; margin-right: .5em;">i</div>'
            +'<p style="margin: 0; overflow: hidden;"><strong>This website uses cookies.</strong> <a href="http://en.wikipedia.org/wiki/HTTP_cookie">What are cookies?</a></p>'
            +'<p style="margin: 0; overflow: hidden;">If you do not accept cookies leave our website or <a href="http://www.whatarecookies.com/enable.asp">Change your browser settings</a> to disable cookies.</p>'
        +'</div>';
    
    // functions to handle cookies taken from: http://www.w3schools.com/js/js_cookies.asp
    // with some improvements: escape/unescape functions changed to 
    function getCookie(c_name) {
        var i, x, y, ARRcookies=document.cookie.split(";");
        for (i=0; i<ARRcookies.length; i++)
        {
            x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x = x.replace(/^\s+|\s+$/g,"");
            if (x == c_name) {
                return decodeURIComponent(y);
            }
        }
    }
    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    }
    
    if(!getCookie(cookieName)) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = cookieInfoBaner;
        document.body.appendChild(wrapper);
        
        var cookieDiv = document.getElementById('cookie_info');
        document.getElementById('accept_cookies').onclick = function () {
            setCookie(cookieName, true, cookieExDays);
            cookieDiv.style.display = 'none';
            return false;
        };
    }
    
} () );
