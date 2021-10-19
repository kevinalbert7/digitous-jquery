
$(function() {
    
    function addPersonnages(array){
        
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
                addPersonnages(data)
                
                console.log(data);
            }
    });
    
    // ---------------Fonction recherche----------------//

    function search() {
        array.forEach(function(personnage) {
            
        });
    }

})



