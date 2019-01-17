
let imageArray = new Array();
let help;


for (i = 0; i < document.images.length; i++) {
    imageStart[i] = document.images[i].src;
}


function goRight() {


    for (var i = 0; i < document.images.length; i++) {
        imageArray[i] = document.images[i].src;
    }


    help = imageArray[document.images.length - 1];

    for (var i = document.images.length - 1; i >= 0; i--) {

        if (i == 0) {
            document.images[i].src = help;
        } else {
            document.images[i].src = imageArray[i - 1];
        }
    }
}


function goLeft() {

    for (var i = 0; i < document.images.length; i++) {
        imageArray[i] = document.images[i].src;
    }

    help = imageArray[0];

    for (var i = 0; i < document.images.length; i++) {

        if (i == document.images.length - 1) {
            document.images[i].src = help;
        } else {
            document.images[i].src = imageArray[i + 1];
        }

    }

    document.images[1].src.style.transform = "scale(0.5)"
    document.images[2].src.style.transform = "scale(0.7 , 0.7)"
    document.images[3].src.style.transform = "scale(1,1)"
    document.images[4].src.style.transform = "scale(0.7 , 0.7)"
    document.images[5].src.style.transform = "scale(0.5 , 0.5)"

}