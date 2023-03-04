var body = document.body;
var player = document.getElementById("playerr");
var bul = document.getElementById("bullet");
var shoot = document.getElementById("shoot");
var countup = 0;
var countleft = 0;

document.addEventListener('keydown', function (e) {
    if (e.code == "ArrowRight") {
        countleft += 100;
        player.style.left = countleft + 'px';
        bul.style.left = countleft + 'px';
        player.style.transition = "2s"
    }
    else if (e.code == "ArrowLeft") {
        countleft -= 100;
        player.style.left = countleft + 'px';
        bul.style.left = countleft + 'px';
        player.style.transition = "2s";
    }
    else if (e.code == 'ArrowDown') {
        countup += 50;
        player.style.top = countup + 'px';
        bul.style.top = countup + 'px';
        player.style.transition = "2s";

    }
    else if (e.code == 'ArrowUp') {
        countup -= 50;
        player.style.top = countup + 'px';
        bul.style.top = countup + 'px';
        player.style.transition = "2s";
    }

    else if (e.code == 'Space') {
        countup -= 300;

        bul.style.top = countup + 'px';
        bul.style.opacity = "1";
        bul.style.transition = ".5s";
        shoot.play();
    }
})
document.addEventListener("keyup", function () {

    bul.style.opacity = "0";
    bul.style.top = "0";
    bul.style.transition = "0s";
})

