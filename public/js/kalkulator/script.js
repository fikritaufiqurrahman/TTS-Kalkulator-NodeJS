let i = 0;

function ins(num) {
    var hasil = document.formAngka.isiText.value;
    // buat tidak ada operasi pada awal perhitugan
    if (hasil[0] != "+" || hasil[0] != "*" || hasil[0] != "/") {
        // gaada duplikat operasi
        if (((hasil[hasil.length - 1] == "+" || hasil[hasil.length - 1] == "-" || hasil[hasil.length - 1] == "*" || hasil[hasil.length - 1] == "/") && (num == "+" || num == "-" || num == "*" || num == "/"))) {

        } else {
            document.formAngka.isiText.value += num;
            hasil = document.formAngka.isiText.value;
            if (hasil[0] == "+" || hasil[0] == "*" || hasil[0] == "/" || hasil[0] == "%") {
                hapusSemua();
            }
        }
    }
    hasil = document.formAngka.isiText.value;
    if ((hasil[0] == "0") && hasil[1] <= 9) {
        document.formAngka.isiText.value = num;
    }

    if ((hasil[0] == "0" && hasil[1] == "0") || hasil[0] == "00") {
        document.formAngka.isiText.value = "0";
    }
    if (hasil[hasil.length - 2] <= 9 && num == "%") {
        hapus();
        document.formAngka.isiText.value += "/100";
        samaDengan()
    } else if ((hasil[hasil.length - 2] == "+" || hasil[hasil.length - 2] == "*" || hasil[hasil.length - 2] == "/" || hasil[hasil.length - 2] == "-" || hasil[hasil.length - 2] == ".") && (num == "%")) {
        hapus()


    }
    if (hasil[hasil.length - 2] == "." && (num == "+" || num == "*" || num == "-" || num == "/")) {
        hapus()
    }
    if (num == ".") {
        if (hasil[0] == ".") {
            document.formAngka.isiText.value = "0.";
        }
        j = 0;
        if (hasil[0] == "-") {
            j++;
        }
        for (i = 0; i < hasil.length; i++) {
            if (hasil[i] == ".") {
                j++;
            }
            if (hasil[i] == "+" || hasil[i] == "-" || hasil[i] == "*" || hasil[i] == "/") {
                j--;
            }

        }
        if (j > 1) {
            hapus();
        }
    }

    console.log(hasil[hasil.length - 2])

}

function samaDengan() {
    let hasil = document.formAngka.isiText.value;
    document.formAngka.isiText.value = eval(hasil);
}

function hapusSemua() {
    document.formAngka.isiText.value = "";
}


function hapus() {
    var hasil = document.formAngka.isiText.value;
    document.formAngka.isiText.value = hasil.substring(0, hasil.length - 1);
}