$(function() {
    var characters = []
    
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {
            console.log(data)
            characters = data
        }
    })
    
    $('form').submit(function(e) {
        e.preventDefault()
        
        var inputValue = $('#characterInput').val()
        console.log(inputValue)
        
        var filteredCharacters = characters.filter(function(character) {
            return character.fullName.toLowerCase().includes(inputValue.toLowerCase())
        })
        
        if (inputValue === '') {
            return null
        }
        
        displayCharacters(filteredCharacters)
        $('#characterInput').val('')
    })
    
    function displayCharacters(array) {
        $('character').empty()
    
        array.forEach(function(character) {
            $('.character').append(`
                <div class="card col-4 shadow-lg" >
                    <img class="img-fluid" src="${character.imageUrl} style="height: 100px" alt="personnage"/>  
                    <div class="card-body">
                        <h4 class="card-title">${character.fullName}</h4>
                        <h5 class="card-title">${character.title}</h5>
                    </div>
                </div>
            `
            )
        }) 
    
    }

    // $(".shuffle").click(function() {
    //     var shuffledCharacters = .shuffle(characters)
    //     displayList(shuffledCharacters)
    // })

})

