$("button").click(function() {
    var inputValue = $("input").val()
    
    if (inputValue.length < 5 ) {
        $("input").addClass("is-invalid")
    } else {
        $("input")
        .removeClass("is-invalid")
        .addClass("is-valid")
    }

    console.log($("input").val())
})