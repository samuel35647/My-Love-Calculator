var yourName = document.getElementById("yourName");
    theirName = document.getElementById("Lovername");
    calcBtn = document.querySelector("button");
    yourloverscoreis = document.getElementById("yourloverscoreis");
    loveScore = Math.random() * 100;
    loveinfo = document.getElementById("loveinfo");
    reloadBtn = document.getElementById("reload");
    loveScore = Math.floor(loveScore) + 1;

    var gradeA = new Audio("audio/Davido.mp3");
    var gradeB = new Audio("audio/Asake.mp3");
    var gradeC = new Audio("audio/Qdot.mp3");
    var gardeD = new Audio("audio/Portable.mp3");
    var gradeF = new Audio("audio/Seyi.mp3");
    var gradeNone = new Audio("audio/Seyiz.mp3");

    function playMusic() {
        gradeA.play();
        gradeB.play();
        gradeC.play();
        gardeD.play();
        gradeF.play();
        gradeNone.play();
    }


    function capitalize_Words(str) {
            return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


    function love() {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve,ms));
        }
        (async function () {
            var i = 0;
            while (i < loveScore) {
                document.getElementById("score").innerHTML = i + "%";
                await sleep(20);
                i++;
            }
        })();
    }


    calcBtn.addEventListener("click", function (e) {
        loveScore = Math.random() * 100;
        e.preventDefault();
        if (yourName.value == "" && theirName.value == "") {
            alert("You can't leave field empty");
            gradeNone.play()
        }
         else if (loveScore >= 0 && loveScore <= 39) {
            yourloverscoreis.innerHTML = "Your Score is";
            love();
            reloadBtn.style.display = "block";
            gradeF.play()
            loveinfo.innerHTML = 
            "<b>You</b> and " + 
            "<b>" +
            "love each other like Oil & Water. Am sorry, but this is not enough for a perfect relationship.";
        } else if (loveScore >= 40 && loveScore <= 49) {
            yourloverscoreis.innerHTML = "Your Love Score is";
            love();
            reloadBtn.style.display = "block";
            gardeD.play()
            loveinfo.innerHTML = 
            "<b>You</b> and " + 
            "</b>" +
            capitalize_Words(theirName.value) +
            "<b>" +
            "love each other like Bird & Sky. But it not enough";
        } else if (loveScore >= 50 && loveScore <= 59) {
            yourloverscoreis.innerHTML = "Your Love Score is "
            love();
            reloadBtn.style.display = "block";
            gradeC.play()
            loveinfo.innerHTML = 
            "<b>You</b> and " +
            "</b>" + 
            capitalize_Words(theirName.value) +
            "</b>" +
            "love each other like Tom and Jerry. That good";
        } else if (loveScore >= 60 && loveScore <= 69) {
            yourloverscoreis.innerHTML = "Your Love Score is";
            love();
            reloadBtn.style.display = "block";
            gradeB.play()
            loveinfo.innerHTML = 
            "<b>You</b> and " +
            "</b>" + 
            capitalize_Words(theirName.value) +
            "</b>" + 
            "love each other like Toye and Doyin";
        } else if (loveScore >= 70 && loveScore <= 100) {
            yourloverscoreis.innerHTML = "Your Love Score is ";
            love();
            reloadBtn.style.display = "block";
            gradeA.play()
            loveinfo.innerHTML = 
            "<b>You</b> and " + 
            "</b>" + 
            capitalize_Words(theirName.value) +
            "</b>" +
            "love each other like Idan Family"
        }
    });