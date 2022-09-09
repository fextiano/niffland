const fullImgBox = document.getElementById('fullImgBox'),
fullImg = document.getElementById('fullImg');

function closeImg(){
    fullImgBox.style.display="none";
}

function openFullImg(reference){
  fullImgBox.style.display="flex";
  fullImg.src = reference;
}

// SCROLL LINKS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

