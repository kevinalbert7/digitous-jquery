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

    $(".shuffle").click(function() {
        var shuffledCharacters = _.shuffle(characters)
        displayList(shuffledCharacters)
    })

})
























// $(function() {
//     var characters = []
    
//     function displayPersonnages(characters){
        
//         characters.forEach(function(personnage) {
            
//             $(".perso").append(`
//                 <div class="element col-4">
//                 <div><img src="${personnage.imageUrl}"></div>
//                 <div class="fontName">${personnage.fullName}</div>
//                 <div class="fontTitle">${personnage.title}</div>
//                 </div>
//             `
//             )
//         })
//     }
        
//         $.ajax({
//             url: 'https://thronesapi.com/api/v2/Characters',
//             success: function(data) {
                
//                 displayPersonnages(data)
//                 characters = data
                
//             }
//         })
        
//         console.log("characters début:", characters)

// // ---------------Fonction recherche----------------//
                
//     var champs = document.getElementById("champs")
                
//     champs.addEventListener("keyup", function() {
//         var input = champs.value
//         console.log("characters dans keyup:", characters)

//     //    characters.filter(function(params) {
           
//     })

//     var result = characters.filter(personnage => personnage.fullName.toLowerCase().includes(personnage.toLowerCase()) )
   
//     console.log(result)

//     let perso = ""

//         if (characters !== "") {
//                 result.forEach(resultItem =>
//                     perso +=`
//                             <div class="element col-4">
//                                 <div><img src="${personnage.imageUrl}"></div>
//                                 <div class="fontName">${personnage.fullName}</div>
//                                 <div class="fontTitle">${personnage.title}</div>
//                             </div>
//                             `
//             )
//         }
//     document.getElementById("perso").innerHTML = perso
// })





