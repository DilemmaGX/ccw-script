// ==UserScript==
// @name         CCW 额外描述
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  为CCW作品详情页添加额外描述（仅限已支持的项目）
// @author       官方小傲娇
// @match        https://www.ccw.site/detail/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const moreInfo = () => {
        // Create a fixed position element in the top right corner
        const dataElement = document.createElement('div');
        dataElement.style.position = 'fixed';
        dataElement.style.top = '10%';
        dataElement.style.right = '2%';
        dataElement.style.backgroundColor = '#20202a';
        dataElement.style.padding = '10px';
        dataElement.style.borderRadius = '10px';  // Rounded rectangle style
        dataElement.style.outline = '1px solid #5cff6d';
        dataElement.style.maxWidth = '80%';  // Set maximum width to 20% of the page width
        dataElement.innerHTML = '📂';
        dataElement.style.color = '#ffffff';  // Set appropriate color for innerHTML
        dataElement.style.whiteSpace = 'pre-wrap';  // Apply automatic line breaks to innerHTML
        dataElement.style.fontSize = '1.5vw';  // Set font size to be responsive to viewport width
        document.body.appendChild(dataElement);

        // Extract the oid code from the current URL
        const oid = window.location.pathname.split('/').pop();

        // Save the json key and values in a global variable named vsp
        const moreInfo = {
            "6565bc8681873073325bf3f9": "<h1>Brainfuck++ UI</h1><p>该项目为一个Brainfuck++的编辑器+运行器</p>"
        };

        // Add custom CSS for the dataElement
        const customCSS = `
            h1 { font-size: 24px; color: #5cff6d; }
            h2 { font-size: 20px; }
            h3 { font-size: 18px; }
            h4 { font-size: 16px; }
            h5 { font-size: 14px; }
            p { font-size: 16px; }
            a { text-decoration: underline; color: #5cff6d; }
            position: absolute;
            z-index: 9999;
        `;
        const style = document.createElement('style');
        style.innerHTML = customCSS;
        document.head.appendChild(style);

        dataElement.addEventListener('mouseenter', function () {
            if (typeof moreInfo[oid] === 'undefined') {
                dataElement.innerHTML = '<b>This page isn\'t supported!</b><br><i><a href="https://github.com/DilemmaGX/ccw-script">Pull Request To Add Stuffs</a></i>';
            } else {
                dataElement.innerHTML = moreInfo[oid];
            }
            dataElement.style.zIndex = '9999';
        });

        dataElement.addEventListener('mouseleave', function () {
            dataElement.innerHTML = '📂';
            dataElement.style.zIndex = 'initial';
        });
    };

    //main
    moreInfo();
})();
