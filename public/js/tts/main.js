function answer() {
    let jawaban = document.getElementById("ans").value;
    let input = document.getElementById("fname").value;
    input = input.toLowerCase();
    if (jawaban == input && jawaban == "takjil") {
        benar();
        for (i = 1; i <= 6; i++) {
            if (i == 2) {
                document.getElementById("dd4").style.visibility = 'visible';

            } else {
                document.getElementById("st" + i).style.visibility = 'visible';
            }
        }
    } else if (jawaban == input && jawaban == "tadarus") {
        benar();
        for (i = 1; i <= 8; i++) {
            if (i == 1) {
                document.getElementById("dd1").style.visibility = 'visible';
            } else if (i == 4) {
                document.getElementById("ed6").style.visibility = 'visible';
            } else if (i == 6) {
                document.getElementById("ld3").style.visibility = 'visible';
            } else {
                document.getElementById("dt" + i).style.visibility = 'visible';
            }
        }
    } else if (jawaban == input && jawaban == "taraweh") {
        benar();
        for (i = 1; i <= 7; i++) {
            document.getElementById("dd" + i).style.visibility = 'visible';
        }
    } else if (jawaban == input && jawaban == "eidulfitr") {
        benar();
        for (i = 1; i <= 9; i++) {
            if (i == 1) {
                document.getElementById("dd6").style.visibility = 'visible';
            } else if (i == 9) {
                document.getElementById("end5").style.visibility = 'visible';
            } else {
                document.getElementById("tt" + i).style.visibility = 'visible';
            }
        }
    } else if (jawaban == input && jawaban == "ramadan") {
        benar();
        for (i = 1; i <= 7; i++) {
            document.getElementById("ed" + i).style.visibility = 'visible';
        }
    } else if (jawaban == input && jawaban == "haus") {
        benar();
        for (i = 1; i <= 4; i++) {
            document.getElementById("ld" + i).style.visibility = 'visible';
        }
    } else if (jawaban == input && jawaban == "sahur") {
        benar();
        for (i = 1; i <= 5; i++) {
            document.getElementById("end" + i).style.visibility = 'visible';
        }
    } else {
        salah();
    }
}

function benar() {
    alert("Jawaban Anda Benar!")
}

function salah() {
    alert("Jawaban Anda Salah, Silakan coba lagi:)")
}