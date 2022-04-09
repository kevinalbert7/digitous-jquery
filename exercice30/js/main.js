$("input").keyup(function() {

    if ($(this).val().length < 5 ) {
        $(this).addClass("is-invalid")       
    } else {
        $(this)
        .removeClass("is-invalid")
        .addClass("is-valid")        
    }
})

