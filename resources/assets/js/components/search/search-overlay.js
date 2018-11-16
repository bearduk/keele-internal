const vh = require('../../utils/vanilla-helper');

function init(){

    const searchButton = document.querySelector('.js-ki-search-overlay');
    const closeOverlay = document.querySelector('.closebtn');

    const overLay = document.getElementById("myOverlay");
    // Open the full screen search box 
    function openSearch() {
        overLay.style.display = "block";
        overLay.style.opacity = ".95";
        vh.addClass(overLay, 'testerbod');
    }

    // Close the full screen search box 
    function closeSearch() {
        overLay.style.display = "none";
        overLay.style.opacity = "0";
        vh.removeClass(overLay, 'testerbod');
    }

    searchButton.addEventListener('click', function(e){
        openSearch();
        e.preventDefault();
    });

    closeOverlay.addEventListener('click', function(e){
        closeSearch();
        // e.preventDefault();
    });
}


module.exports = {
    init: init
}