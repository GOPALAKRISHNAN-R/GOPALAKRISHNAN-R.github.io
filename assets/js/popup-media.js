window.onload = function() {
    var modal = document.getElementById("myModal");

    var img1 = document.getElementById("image_1");
    var img2 = document.getElementById("image_2");
    var img3 = document.getElementById("image_3");
    var img4 = document.getElementById("image_4");


    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    img1.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img2.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img3.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img4.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
}