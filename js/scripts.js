$(function() {

	AOS.init({
	  duration: 1200,
	})

	setTimeout(function() {
		$(".loading").fadeOut('slow')
	}, 1000)

    setTimeout(function() {
        $(".titulo").addClass('animate__animated animate__bounce animate__repeat-2')
    }, 2000)

    function abre_menu() {
        $(".menu a").slideToggle('slow')
    }

    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 200) {

        }
    })

    $(".btn_menu").on("click", function() {
        abre_menu()
    })

    $(".menu a").click(function() {
	if ($(window).width() <= 768) {
    		abre_menu()
	}
    })

})
