function documentReady () {
    var imgHtml = document.querySelector('img');
    var imgHtml2 = document.querySelector('.grey');
    var titleH1 = document.getElementById('h1_id');
    var titleH2 = document.getElementById('h2_id');
    var h1Change = [];
    h1Change[0] = "Katarzyna Kowalska";
    h1Change[1] = "Lucjan Kowalski";
    h1Change[2] = "Robert Nowak";
    var h2Change = [];
    h2Change[0] = "web developer";
    h2Change[1] = "UI designer";
    h2Change[2] = "graphic designer";
    var imagesColor = [];
    imagesColor[0] = 'img/s1.png';
    imagesColor[1] = 'img/s2.png';
    imagesColor[2] = 'img/s3.png';
    var imagesColorG = [];
    imagesColorG[0] = 'img/s1a.png';
    imagesColorG[1] = 'img/s2a.png';
    imagesColorG[2] = 'img/s3a.png';
    var i = 0;

    function changeImage() {
        imgHtml.setAttribute('src', imagesColor[i])
        imgHtml2.setAttribute('src', imagesColorG[i])
        h1_id.innerHTML = h1Change[i]
        h2_id.innerHTML = h2Change[i]
        i = (i == imagesColor.length - 1) ? i = 0 : i = i + 1
    }
    changeImage();
    setInterval(changeImage, 4000);
}

window.onload = function () {
        documentReady();
}
