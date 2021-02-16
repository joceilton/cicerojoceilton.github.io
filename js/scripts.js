$(function() {

	AOS.init({
	  duration: 1200,
	})

	setTimeout(function() {
		$(".loading").fadeOut('slow')
	}, 5000)

    function abre_menu() {
        $(".menu a").slideToggle('slow')
    }

    $(".btn_menu").on("click", function() {
        abre_menu()
    })

    $(".menu a").click(function() {
	if ($(window).width() <= 768) {
    		abre_menu()
	}
    })

})
