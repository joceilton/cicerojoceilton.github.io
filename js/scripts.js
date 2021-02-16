$(function() {

    function abre_menu() {
        $(".menu a").slideToggle('slow')
    }

    $(".btn_menu").on("click", function() {
        abre_menu()
    })

})