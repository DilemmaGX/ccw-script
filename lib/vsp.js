// ==UserScript==
// @name         CCW Site Data Loader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load data from www.test.com/test.json based on the oid code of the current page and display it in the console
// @author       Your Name
// @match        https://www.ccw.site/detail/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // Create a fixed position element in the bottom right corner
    const dataElement = document.createElement('div');
    dataElement.style.position = 'fixed';
    dataElement.style.bottom = '20px';
    dataElement.style.right = '20px';
    dataElement.style.backgroundColor = 'white';
    dataElement.style.padding = '10px';
    dataElement.textContent = 'Loading...';
    document.body.appendChild(dataElement);

    // Extract the oid code from the current URL
    const oid = window.location.pathname.split('/').pop();

    // Make a request to www.test.com/test.json
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://dilemmagx.github.io/ccw-script/json/vsp.json',
        onload: function(response) {
            const data = JSON.parse(response.responseText);
            const value = data[oid];
            console.log('Value for oid ' + oid + ': ' + value);
            dataElement.textContent = 'Value for oid ' + oid + ': ' + value;
        }
    });
})();
