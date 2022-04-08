$(function() {
    $("input").keyup(function() {        
        if ($(this).val().length > 5 ) {
            $(this).addClass("is-valid")
            $(this).addClass("is-invalid")        
        } else {
            $(this).addClass("is-invalid")   
            $(this).addClass("is-valid")        
        }
    })
})
