// ==UserScript==
// @name         Zhihu Accessibility Toolbar Full Toggle
// @namespace    https://github.com/RtYkk/ModdedUserjs
// @version      0.1
// @description  Toggle visibility of the entire toolbar area including space on Zhihu
// @author       GPT-4 & RtYkk
// @match        https://www.zhihu.com/aria/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the document to load completely
    window.addEventListener('load', function() {
        // Check if the toolbar container exists
        var toolbar = document.querySelector('.Sticky');
        if (!toolbar) {
            console.log('Toolbar container not found!');
            return;
        }

        // Create toggle button
        var toggleButton = document.createElement('button');
        toggleButton.innerHTML = '▲'; // Initial icon indicating that the toolbar is visible
        toggleButton.style.position = 'fixed';
        toggleButton.style.top = '20px';
        toggleButton.style.right = '20px';
        toggleButton.style.zIndex = '1000';
        toggleButton.style.padding = '5px 10px';
        toggleButton.style.backgroundColor = '#f9f9f9';
        toggleButton.style.border = '1px solid #ccc';
        toggleButton.style.cursor = 'pointer';

        // Append button to the body
        document.body.appendChild(toggleButton);

        // Add click event to toggle the display of the toolbar
        toggleButton.addEventListener('click', function() {
            if (toolbar.style.display === 'none') {
                toolbar.style.display = 'block'; // Show the toolbar
                toggleButton.innerHTML = '▲'; // Change icon to indicate the toolbar is visible
            } else {
                toolbar.style.display = 'none'; // Hide the toolbar
                toggleButton.innerHTML = '▼'; // Change icon to indicate the toolbar is hidden
            }
        });
    });
})();
