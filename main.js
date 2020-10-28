
//carica dom
$(document).ready(function() {

    // referenze
    var dropLinks = $(".with-dropdown > a");
    var dropMenu = $(".with-dropdown > .dropdown-menu")

    // mostrare e nascondere il menu dropdown

    dropLinks.click( function() {


        var activeMenu = $(this).next(".dropdown-menu");

        dropMenu.not(activeMenu).hide();

        activeMenu.toggle();


    });


















}) //end doc ready