var clicked = false;


for (var a = 0; a < document.querySelectorAll(".btn").length; a++) {    
    document.querySelectorAll(".btn")[a].addEventListener("click", function(){        
        $(".s").toggleClass("arrow");
    });
}

