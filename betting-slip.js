const kupon = [
    {
        macno: 474,
        takimlar: "Kashima - Cerezo Osaka",
        oran1: 2.30,
        oranX: 3.10,
        oran2: 2.35
    },
    {
        macno: 475,
        takimlar: "K. Sanuki - Machida Zelvia",
        oran1: 3.60,
        oranX: 3.20,
        oran2: 1.65
    },
    {
        macno: 477,
        takimlar: "Jeonnam Dragons - Daegu",
        oran1: 2.50,
        oranX: 3.10,
        oran2: 2.10
    },
    {
        macno: 478,
        takimlar: "Ulsan - Suwon Sb",
        oran1: 1.85,
        oranX: 3.20,
        oran2: 2.90
    }
];

kupon.map((mac) => {
    $('.container').append('<div class="musabaka">' + mac.macno + ' &nbsp; ' + ' <b>' + mac.takimlar + '</b> </div>');

    $('.container').append('' +
        '<div class="buttons"> ' +
        '<div class="button"><button value="' + mac.oran1 + '" onclick="diziyeAt(this.value)">1</button>' + ' ' + mac.oran1 + '</div>' +
        '<div class="button"><button value="' + mac.oranX + '" onclick="diziyeAt(this.value)">X</button>' + ' ' + mac.oranX + '</div>' +
        '<div class="button"><button value="' + mac.oran2 + '" onclick="diziyeAt(this.value)">2</button>' + ' ' + mac.oran2 + '</div>' +
        '</div><hr>'
    );
});

$(".button").click(function(){
    $(this).css('background-color', '#ffe40e');
});

var oranlar = [];


function diziyeAt(oran) {
    oran = parseFloat(oran);
    oranlar.push(oran);
    hesapla(oranlar);
}


function hesapla(oranlar) {
    var oranToplami = 0;
    for (var i = 0; i < oranlar.length; i++) {
        oranToplami += oranlar[i];
    }

    var misliler = document.getElementById('misliler_id');
    var misli = misliler.options[misliler.selectedIndex].text;

    kazanc = oranToplami * misli;
    kazanc = Number(kazanc.toFixed(2));

    document.getElementById("kuponBedeli").innerHTML = misli;
    document.getElementById("kazanc").innerHTML = kazanc;
}


function misliSec() {
    var misliler = document.getElementById('misliler_id');
    var misli = misliler.options[misliler.selectedIndex].text;
    document.getElementById("kuponBedeli").innerHTML = misli;
    hesapla(oranlar)
}
