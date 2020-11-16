$(function() {
    console.log( "ready!" );

    $("#search").click(function () {
        $("#search-input").show(100000);
        $(this).hide("slow");
    });

});