$(function() {
    $(".btn").click(function() {
        var inputValue = $("input").val()
        
        if (inputValue.lenght > 5 ) {
            $("input").addClass("is-valid")
        } else {
            $("input").addClass("is-invalid")
        }
        console.log(addClass)
    })
})