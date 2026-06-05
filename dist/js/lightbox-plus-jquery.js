function pickImage(){
    options = ["alvin.png", "christian.png", "dennis.png", "forrest.jpg", "korg.png","robert.png"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src",randomImg)
    img.setAttribute("alt","")

}


function setImages(){
    options = ["alvin.png", "christian.png", "dennis.png", "forrest.jpg", "korg.png","robert.png"]

    currentImages = document.querySelectorAll("img")
    for (var i = 0; i < currentImages.length; i++) { 
        console.log("image "+i)

        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
       currentImages[i].src=randomImg
       currentImages[i].setAttribute("tabindex","0")
    }

}
