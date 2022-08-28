function changeImg(imgNumber)	{
    var myImages = ["assets/images/storage/BG.png", "assets/images/storage/BG2.png", "assets/images/storage/BG3.png", "assets/images/storage/BG4.png"]; 
    var imgShown = document.body.style.backgroundImage;
    var newImgNumber =Math.floor(Math.random()*myImages.length);
    document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
    }
    window.onload=changeImg;