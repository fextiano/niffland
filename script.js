const fullImgBox = document.getElementById('fullImgBox'),
fullImg = document.getElementById('fullImg');

function closeImg(){
    fullImgBox.style.display="none";
}

function openFullImg(reference){
  fullImgBox.style.display="flex";
  fullImg.src = reference;
}

