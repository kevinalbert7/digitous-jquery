var array = []

$(function() {
    
    
    function displayPersonnages(array){
        
        array.forEach(function(personnage) {
            
            $(".perso").append(`
                <div class="element col-4">
                <div><img src="${personnage.imageUrl}"></div>
                <div class="fontName">${personnage.fullName}</div>
                <div class="fontTitle">${personnage.title}</div>
                </div>
            `
            )
        })
    }
        
        $.ajax({
            url: 'https://thronesapi.com/api/v2/Characters',
            success: function(data) {
                
                displayPersonnages(data)
                array = data
                
            }
        })
        
        console.log("array début:", array)

// ---------------Fonction recherche----------------//
                
    var champs = document.getElementById("champs")
                
    champs.addEventListener("keyup", function() {
        var input = champs.value
        console.log("array dans keyup:", array)

    //    array.filter(function(params) {
           
    })

    var result = array.filter(personnage => personnage.fullName.toLowerCase().includes(personnage.toLowerCase()) )
   
    console.log(result)

    let perso = ""

        if (array !== "") {
                result.forEach(resultItem =>
                    perso +=`
                            <div class="element col-4">
                                <div><img src="${personnage.imageUrl}"></div>
                                <div class="fontName">${personnage.fullName}</div>
                                <div class="fontTitle">${personnage.title}</div>
                            </div>
                            `
            )
        }
    document.getElementById("perso").innerHTML = perso
})





