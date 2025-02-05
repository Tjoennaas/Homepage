





const navigateButtonEspen = document.querySelector(".navigate-button-espen");
const navigateButtonAdele = document.querySelector(".navigate-button-adele");
const frontpageForAdele = document.querySelector(".frontpage-for-adele");
const frontpageForEspen = document.querySelector(".frontpage-for-espen");
const filterAdele = document.querySelector(".filter-adele");
const filterEspen = document.querySelector(".filter-espen");
const artists = document.querySelector(".artists");
const linkToFrontpage = document.querySelector(".link-forntpage");
const linkFrontPageArtist = document.querySelector(".link-forntpage-artist");
const renderItemsAdele = document.querySelector(".render-items-adele");
const renderItemsEspen = document.querySelector(".render-items-espen");
const filterBiografi = document.querySelector(".filter-biografi");
const filterPainting = document.querySelector(".filter-painting");
const filterDga = document.querySelector(".filter-dga");
const mainContent = document.querySelector(".main-content");

let currentGallery = "";
let lastFilterAdele = "paintings";
let lastFilterEspen = "paintings";

function displayGalleryEspen() {
    currentGallery = "Espen";
    artists.style.display = "none";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "flex";
    filterAdele.style.display = "none";
    filterEspen.style.display = "flex";
    linkToFrontpage.style.display = "none";
    linkFrontPageArtist.style.display = "flex";

  
    document.querySelector(".filter-espen-painting").classList.remove("filter-active");
    document.querySelector(".filter-espen-print").classList.remove("filter-active");
    document.querySelector(".filter-espen-project").classList.remove("filter-active");
    document.querySelector(".filter-espen-biografi").classList.remove("filter-active");



    if (lastFilterEspen === "paintings") {
        renderEspenPaintings();
        document.querySelector(".filter-espen-painting").classList.add("filter-active");
    } else if (lastFilterEspen === "prints") {
        renderEspenPrints();
        document.querySelector(".filter-espen-print").classList.add("filter-active");
    } else if (lastFilterEspen === "projects") {
        renderEspenProjects();
        document.querySelector(".filter-espen-project").classList.add("filter-active");
    } else if (lastFilterEspen === "biografi") {
        renderEspenBiografi();
        document.querySelector(".filter-espen-biografi").classList.add("filter-active");
    }
      
}

function displayGalleryAdele() {
    currentGallery = "Adele";
    const itemDetails = document.querySelector(".item-details");
    if (itemDetails) {
        itemDetails.remove();
    }
    artists.style.display = "none";
    frontpageForAdele.style.display = "flex";
    frontpageForEspen.style.display = "none";
    filterAdele.style.display = "flex";
    filterEspen.style.display = "none";
    linkToFrontpage.style.display = "none";
    linkFrontPageArtist.style.display = "flex";

    
    filterBiografi.classList.remove("filter-active");
    filterPainting.classList.remove("filter-active");
    filterDga.classList.remove("filter-active");

    
    if (lastFilterAdele === "paintings") {
        renderCategoryOne();
        filterPainting.classList.add("filter-active");
    } else if (lastFilterAdele === "dga") {
        renderCategoryTwo();
        filterDga.classList.add("filter-active");
    }  else if (lastFilterAdele === "biografi") {
        renderCategoryTree();
        filterBiografi.classList.add("filter-active");
    }
}

function backToHomepage() {
    document.querySelector(".frontpage").style.display = "block";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "none";
    const itemDetails = document.querySelector(".item-details");
    if (itemDetails) {
        itemDetails.remove();
    }
    artists.style.display = "flex";
    linkToFrontpage.style.display = "flex";
    linkFrontPageArtist.style.display = "none";
}

linkFrontPageArtist.addEventListener("click", backToHomepage);
navigateButtonEspen.addEventListener("click", displayGalleryEspen);
navigateButtonAdele.addEventListener("click", displayGalleryAdele);

class Biografi{
    constructor(tekst){
        this.tekst = tekst
   }
}


class Item {
    constructor(img, title, technique, size, year, button) {
        this.img = img;
        this.title = title;
        this.technique = technique;
        this.size = size;
        this.year = year;
        this.button = button;
    }
}

class ItemPrint extends Item {
    constructor(img, title, technique, size, year, button, print) {
        super(img, title, technique, size, year, button);
        this.print = print;
    }
}



const itemsAdele = {
    
    category3: [
        new Biografi("Adele Tjønnås er født i Telemark i 1986, og bor og arbeider nå i Oslo. Utdannet Sykepleier, FrontEnd-programerer, og er under utdanning innen BackEnd-programmering. Hun har sin kunstutdannelse fra Christiania FriAkademi (2010-2013), og har i tillegg deltatt på diverse kurs innen klassisk maleri og har noe kursing og læretid hos bl a Jan Sæther og Bjørn Engkrog. I denne perioden var hun med på flere elev- og fellesutstillinger, og har i senere tid i tillegg til mindre fellesutstillinger blant annet blitt antatt til Sørlandsutstillingen (2020), Høstutstillingen i Horten (2020) og har fått vist malerier i Maison magazine. Soloutstilling hos Albin Upp i mars 2022.*Inspirasjonen bak maleriene er gjerne hentet fra reiser rundt om i verden, der opplevelsen av møtet med kulturer og store naturopplevelser står sentralt. Dette blir skildret gjennom et klassisk billedspråk, der fargebruk og form brukes både til å fortelle historien og sette atmosfæren i maleriet, men også rent estetisk for at det skal være behagelig å se på. Arbeidene har ofte en undertone av å ville fortelle om skjønnheten i naturen og omgivelsene, og forteller ofte en historie om hvor skjørt og forgjengelig dette er.*I de senere årene, i sammenheng med IT-utdanningen og en økende interesse for teknologi, har hun arbeidet stadig mer digitalt, da hovedsakelig digital tegning/ DGA (Digital Graphic Artwork). Tema i tegningene kretser rundt et slags humoristisk skråblikk på en tenkt kommende/ nært forestående (post-) apokalypse, og alt som måtte følge med det.")],

    category1: [
        new Item("../src/assets/adele1/a40.jpg", "BLUE#2", "Olje på lerret", "2014", "NOK 9000,- SOLGT", "Se mer"),
        new Item("../src/assets/adele1/a41.jpg",  "NU KOMMER BILEN", "Olje på lerret, 70x100cm", "2019", "NOK 6000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a42.jpg","KJØTTMEIS", "Olje på lerret, 24x18cm", "2017", "NOK 5000,- SOLGT", "Se mer"),
        new Item("../src/assets/adele1/a43.jpg", "SVARTKULP", "Olje på lerret, 60X60cm", "2022", "NOK 7.500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a44.jpg", "CREATION", "Olje på lerret, 70x90cm", "2021", "NOK 11.500,- SOLGT", "Se mer"),
        new Item("../src/assets/adele1/a45.jpg", "UT", "Olje på lerret, 80x100cm", "2021","NOK 12.500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a46.jpg", "DANUM VALLEY", "Olje på lerret, 100x80cm", "2016", "NOK 12.500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a47.jpg", "THAMEL", "Olje på lerret, 80x70cm", "2020", "NOK 11.500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a48.jpg", "APOKALYPSE", "Olje på lerret, 80X100cm", "2019", "NOK 9.500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a49.jpg", "TIRSDAG", "Olje på lerret, 50X60cm", "2021", "NOK 5000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a50.jpg", "VINTERBAD", "Olje på lerret, 40x50cm", "2021", "NOK 8000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a51.jpg", "HULDRA", "Olje på lerret, 70x90cm", "2022", "NOK 10.000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a52.jpg", "PILFINK", "Olje på lerret, 31x24cm", "2022", "NOK 3500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a58.jpg", "EN VANLIG DAG", "Olje på lerret, 50x60cm", "2019", "NOK 6000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a57.jpg", "BLUE", "Olje på lerret,", "2014", "SOLGT", "Se mer"),
        new Item("../src/assets/adele1/a55.jpg", "NÅR MØRKET KOMMER", "Olje på lerret, 70X90cm", "2016", "NOK 8000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a53.jpg", "SERMONI", "Olje på lerret, 90x70cm", "2021", "NOK 10 000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. ", "Se mer"),
        new Item("../src/assets/adele1/a54.jpg", "GRÅSPURV", "Olje på lerret, 31x24cm", "2022", "NOK 3500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/adele1/a56.jpg", "FUGLE LIV", "Olje på lerret", "2015", "NOK 9000,- SOLGT", "Se mer"),
    ],

    category2: [
        new ItemPrint("../src/assets/adele1/a22.jpg", "ROMMET",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a17.jpg", "REFLEKSJON",  " Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a23.jpg", "NEDERST I RULLETRAPPA",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a21.jpg", "CYCLOPES",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a16.jpg","BYGDØY", "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a30.jpg", "IN TO THE VOID#1",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a29.jpg", "IN TO THE VOID#2",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
       
        new ItemPrint("../src/assets/adele1/a26.jpg", "KOSMOS",  " Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "), 
        new ItemPrint("../src/assets/adele1/a31.jpg", "PÅ TOPPEN",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),  
        new ItemPrint("../src/assets/adele1/a27.jpg", "STILLEHAVET",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a18.jpg", "LEGOLAND",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a20.jpg", "HAPPY FAMILY","Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a25.jpg", "PORTRETT",  " Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/adele1/a28.jpg", "ET KRÅKE LIV",  "Digital tegning (DGA - Digital Graphic Artwork) trykket i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 50 eks. ", "2020", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
    ],
};


const itemsEspen = {
    
    biografi: [
        new Biografi("Espen (født 1984 i Stavanger) er vokst opp i Fredrikstad, men har tilbragt voksenlivet i Oslo. Etter Formgivingsfag på videregående skole utdannet ved Strykejernet Kunstskole (Torleif Gjedebo) aug2004-jun2006 og deretter Christiania FriAkademi (Jan Cato Bøtger) aug09-des12. *Har utover utstillinger ifbm utdanning deltatt på flere større og mindre fellesutstillinger, og deltatt- og organisert- flere utstillinger og visninger som del av mindre grupper, i samarbeid med partner osv. Innkjøpt av offentlig/ statlige etater i flere fylker og utført utsmykkingsoppdrag som del av gruppe i offentlig bygg og -rom. *Hovedvekt på figurativt maleri, med et formspråk basert på det klassiske, men med en fargebruk og idèverden nærmere det drømmeaktige og ofte psykedeliske handler det gjerne om å illustrere og uttrykke elementer fra eget indre, eller skildre inntrykk utover det som kan beskrives med ord, noe som gjør at arbeidene kan ses som å ha en i høy grad selvbiografisk undertone. *Ved siden, kontinuerlig små og store sideprosjekter, som prioriterer lekenhet og utforskning, ofte med materialer eller andre elementer lånt fra vitenskapen og forskningens verden, men kan spenne over alt fra eksperimentering med gamle FolkArt tradisjoner som Scrimshaw via Grafisk arbeide til Site-Spesific StreetArt, gjerne med et fokus på detaljer og oppdagerglede , og en sta overbevisning om å aldri gi slipp på leken.    ")
    ],

    paintings: [
        
        new Item("../src/assets/espen1/e25.jpg", "SELVPORTRETT", "Olje på lerret, 70x50cm ", "2016", "Privat eie", "Se mer"),
        new Item("../src/assets/espen1/e21.jpg", "TILBAKE HJEMME", "Olje på lerret, 60x50cm", "2022", "NOK 8000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse." , "Se mer"),
        new Item("../src/assets/espen1/e26.jpg", "MR ARAP`S BETHELNUT", "Olje på lerret, 70x70cm", "2017", "NOK 7000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. ", "Se mer"),
        new Item("../src/assets/espen1/e27.jpg", "POLAROID SERIE#3", "Olje på lerret, 80x100cm", "2019", "NOK 10.500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e35.jpg", "NOVEMBER", "Olje på lerret, 40x50cm", "2021", "NOK 7500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e36.jpg", "SENERE, SAMME DAG/ PRANA FLUTE", "Olje på lerret, 50x60cm ", "2021", "NOK 8500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e34.jpg", "ROBBY", "Olje på lerret, 50x60cm ", "2020", "8500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),  
        new Item("../src/assets/espen1/e38.jpg", "SISTE GANG", "Olje på lerret, 55x46cm ", "2021", "NOK 6000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e39.jpg", "JUNI", "Olje på lerret, 60x50cm", "2021", "NOK 8500,- SOLGT", "Se mer"),
        new Item("../src/assets/espen1/e24.jpg", "RANDOM GIRL FROM WWW", "Olje på lerret, 50x40cm ", "2018", " NOK 5500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e22.jpg", "RANDOM GIRL FROM WWW#4", "Olje på lerret, 50x40cm", "2018", "NOK 5500,- SOLGT", "Se mer"),
        new Item("../src/assets/espen1/e23.jpg", "RANDOM GIRL FROM WWW#3", "Olje på lerret, 50x40", "2018", "NOK 5500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e32.jpg", "STUDIE:FØR", "Olje på lerret, 50x60cm ", "2022", "NOK 7500,-(Samlet STUDIE FØR/ETTER NOK 12.500,-) Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. ", "Se mer"),
        new Item("../src/assets/espen1/e33.jpg", "STUDIE:ETTER", "Olje på lerret, 50x60", "2022", "NOK 7500,-(Samlet STUDIE FØR/ETTER NOK 12.500,-) Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),  
        new Item("../src/assets/espen1/e37.jpg", "HOTELROOM, BANKOK", "Olje på lerret, 50x60cm", "2021", "NOK 8000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e29.jpg", "INGRID", "Olje på lerret, 55x46cm", "2020", "NOK 6000,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. ", "Se mer"),
        new Item("../src/assets/espen1/e30.jpg", "MARY#3", "Spray/akryl og olje på lerret, 50x40cm", "2020", "NOK 6500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e31.jpg", "MARY#2", "Olje på lerret, 50x40cm", "2020", "NOK 6500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e28.jpg", "POLAROID SERIE #4", "Olje på lerret, 50x61cm", "2018", "NOK 6500,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "Se mer"),
        new Item("../src/assets/espen1/e20.jpg", "LANDEMERKE", "Olje på lerret, 50x100cm", "2017", "Bestilling/ SOLGT", "Se mer"),
    ],
    prints: [
        new ItemPrint("../src/assets/espen1/e1.jpg", "REALIZATION/ILLUSION#3", "Ubehandlet foto i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 25 eks. ", "2024", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/espen1/e2.jpg", "REALIZATION/ILLUSION#15", "Ubehandlet foto i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 25 eks. ", "2024", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/espen1/e3.jpg", "REALIZATION/ILLUSION#19", "Ubehandlet foto i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 25 eks. ", "2024", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/espen1/e4.jpg", "REALIZATION/ILLUSION#22", "Ubehandlet foto i Giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme.", "Papirstr: ca A4, Opplag: 25 eks. ", "2024", "Se mer", "NOK 850,-  Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.  "),
        new ItemPrint("../src/assets/espen1/e9.jpg", "ROBBY", "Reproduksjon av orginalt maleri med samme tittel, trykket som Giclee på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme ", "Papirstr ca. A3 ", "Opplag 25eks.", "Se mer", "NOK 1200,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
        new ItemPrint("../src/assets/espen1/e10.jpg", "SENERE, SAMME DAG/ PRANA FLUTE","Reproduksjon av orginalt maleri med samme tittel, trykket som Giclee på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme ", "Papirstr ca. A3 ", "Opplag 25eks.", "Se mer", "NOK 1200,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
        new ItemPrint("../src/assets/espen1/e11.jpg", "JUNI", "Reproduksjon av orginalt maleri med samme tittel, trykket som Giclee på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme ", "Papirstr ca. A3 ", "Opplag 25eks.", "Se mer", "NOK 1200,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
        new ItemPrint("../src/assets/espen1/e12.jpg", "NOVEMBER", "Reproduksjon av orginalt maleri med samme tittel, trykket som Giclee på Canson Etching Rag 310g papir med Lucia blekk, pris er per ark levert i syrefri plastlomme ", "Papirstr ca. A3 ", "Opplag 25eks.", "Se mer", "NOK 1200,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
    ],

    project: [
        new ItemPrint("../src/assets/espen1/e5.jpg", "REALIZATION/ILLUSION#10", "Enkeltstående, ubehandlet foto trykket i giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, påsydd objektglass. Leveres montert i enkel sort ramme med glass ", "Papirstr: ca. A4. Opplag: 1/1", "2024", "Se mer", "NOK 1850,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
        new ItemPrint("../src/assets/espen1/e6.jpg", "REALIZATION/ILLUSION#18", "Enkeltstående, ubehandlet foto trykket i giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, påsydd objektglass. Leveres montert i enkel sort ramme med glass ", "Papirstr: ca. A4. Opplag: 1/1", "2024", "Se mer", "NOK 1850,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
        new ItemPrint("../src/assets/espen1/e7.jpg", "REALIZATION/ILLUSION#20", "Enkeltstående, ubehandlet foto trykket i giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, påsydd objektglass. Leveres montert i enkel sort ramme med glass ", "Papirstr: ca. A4. Opplag: 1/1", "2024", "Se mer", "NOK 1850,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
        new ItemPrint("../src/assets/espen1/e8.jpg", "REALIZATION/ILLUSION#12", "Enkeltstående, ubehandlet foto trykket i giclee-kvalitet på Canson Etching Rag 310g papir med Lucia blekk, påsydd objektglass. Leveres montert i enkel sort ramme med glass ", "Papirstr: ca. A4. Opplag: 1/1", "2024", "Se mer", "NOK 1850,- Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. "),
       


        new ItemPrint("../src/assets/espen1/f6.jpg", "SPIKERHODEMALERI av KJØTTMEIS.", "Mikrokunst: Småfugl malt på hodet til en spiker som er slått inn i bunnen av en liten boks (med lokk) laget av mangotre.", "Diameter spikerhode 0,6 cm.", "NOK 600,- SOLGT", "se mer"),
        new ItemPrint("../src/assets/espen1/f2.jpg", "PIKE MED BALLONG, laget av fossil støttann fra Ullhåret Mammut.", "Mikrokunst inspirert av de gamle sjøfolkenes Scrimshaw-tradisjon, skåret ut av et stykke av en støttann fra Ullhåret Mammut som levde i Sibir 10-40.000 år siden. Figur av støttann, ballong av tegnestift, stående på glass fra stranden- montert i liten plastkuppel. Det følger med et slags infoskriv/ ekthetsbevis på materialet fra forhandler, som bl.a gjør rede for gjeldende lovverk og restriksjoner samt opphav til dette spesifikke partiet med materiale.", "Høyde på plastkuppel ca 4,3cm, figur uten ballong ca 1,5cm.", "NOK 1150,-. Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "se mer"),
        new ItemPrint("../src/assets/espen1/f1.jpg", "LITEN FUGL, laget av fossil støttann fra Ullhåret Mammut.", "Mikrokunst inspirert av de gamle sjøfolkenes Scrimshaw-tradisjon, skåret ut av et stykke av en støttann fra Ullhåret Mammut som levde i Sibir 10-40.000 år siden. Stående på en bit plast funnet på fuglens favorittstrand, og montert i liten plastkuppel som kan åpnes for nærmere inspeksjon. Det følger med et slags infoskriv/ ekthetsbevis på materialet fra forhandler, som bl.a gjør rede for gjeldende lovverk og restriksjoner samt opphav til dette spesifikke partiet med materiale.", "Høyde på kuppel: ca 4,3cm, figur ca 1,7cm.", "NOK 1400,-. Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "se mer"),

        new ItemPrint("../src/assets/espen1/f4.jpg", "GIRAFF, laget av fossil støttann fra Ullhåret Mammut.", "Mikrokunst inspirert av de gamle sjøfolkenes Scrimshaw-tradisjon, skåret ut av et stykke av en støttann fra Ullhåret Mammut som levde i Sibir 10-40.000 år siden. Montert i liten glassflaske med kork. Det følger med et slags infoskriv/ ekthetsbevis på materialet fra forhandler, som bl.a gjør rede for gjeldende lovverk og restriksjoner samt opphav til dette spesifikke partiet med materiale.", "Høyde på glassflaske uten kork: ca 5,8cm, figur ca 3,7cm.", "NOK 1400,-. Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "se mer"),



        new ItemPrint("../src/assets/espen1/f3.jpg", "STRANDET PÅ EN ØDE ØY, laget av fossil støttann fra Ullhåret Mammut.", "Mikrokunst inspirert av de gamle sjøfolkenes Scrimshaw-tradisjon, skåret ut av et stykke av en støttann fra Ullhåret Mammut som levde i Sibir 10-40.000 år siden. Utskåret figur av støttann montert med byggskum og plastbiter funnet på stranda, dekket i ekte korallsand. Montert i liten plastkuppel. Det følger med et slags infoskriv/ ekthetsbevis på materialet fra forhandler, som bl.a gjør rede for gjeldende lovverk og restriksjoner samt opphav til dette spesifikke partiet med materiale.", "Høyde på kuppel: ca 4,3cm, figur ca 1cm.", "NOK 1150,-. Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. ", "se mer"),
        new ItemPrint("../src/assets/espen1/f8.jpg", "FLASKESKIPET, laget av fossil støttann fra Ullhåret Mammut.", "Mikrokunst inspirert av de gamle sjøfolkenes Scrimshaw-tradisjon, skåret ut av et stykke av en støttann fra Ullhåret Mammut som levde i Sibir 10-40.000 år siden, flytende rundt i en dam laget av polymerleire i et glass-skrin med lokk. Det følger med et slags infoskriv/ ekthetsbevis på materialet fra forhandler, som bl.a gjør rede for gjeldende lovverk og restriksjoner samt opphav til dette spesifikke partiet med materiale.", "Glass-skrin: ca 13,2cm x 10,2cm, skipet ca 1,8cm", "NOK 1850,-. Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "se mer"),
        new ItemPrint("../src/assets/espen1/f7.jpg", "SKIP FOR ANKER i grafitt, skåret ut av en blyant i én hel del.", "Mikrokunst basert på en moderne form for FolkArt, utskjæringer i grafitt i blyanter, som av de største mesterne kan ha et utrolig detaljnivå eller til og med bevegelige deler som i et kjede, og gjerne bedømmes etter graden av kompleksitet -og hvor små detaljer kunstneren evner å lage.", "-I PRIVAT EIE-", "", "se mer"),
        new ItemPrint("../src/assets/espen1/f9.jpg", "DAMPLOKOMOTIV i grafitt, skåret ut av en blyant i én hel del.", "Mikrokunst basert på en moderne form for FolkArt, utskjæringer i grafitt i blyanter, som av de største mesterne kan ha et utrolig detaljnivå eller til og med bevegelige deler som i et kjede, og gjerne bedømmes etter graden av kompleksitet -og hvor små detaljer kunstneren evner å lage.", "Blyantens fulle lengde er 7,3 cm, leveres i en liten eske. Sender bilder av detaljer og fra andre vinkler på forespørsel.", "NOK 1850,- Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse. ", "se mer"),
        new ItemPrint("../src/assets/espen1/f5.jpg", "FUGL PÅ HUSKE, laget av fossil støttann fra Ullhåret Mammut.", "Mikrokunst inspirert av de gamle sjøfolkenes Scrimshaw-tradisjon, skåret ut av et stykke av en støttann fra Ullhåret Mammut som levde i Sibir 10-40.000 år siden. Fuglen er skåret ut i to deler, som så er plugget sammen (sammenføyningen måtte gjøres inni flasken med småverktøy og tålmodighet, da den ikke ville gå gjennom flaskehalsen i én del). Fuglen på huska henger i metalltråder fra korken i ei lita glassflaske. Det følger med et slags infoskriv/ ekthetsbevis på materialet fra forhandler, som bl.a gjør rede for gjeldende lovverk og restriksjoner samt opphav til dette spesifikke partiet med materiale.", "Høyde på glassflaske uten kork: ca 5,8cm, figur ca 1,7cm.", "NOK 1400,-. Grunnet skjørt materiale ønsker jeg primært (og anbefaler) direkte overlevering i Oslo eller omegn etter avtale. Kan sendes mot tillegg for porto; på kjøpers risiko og fulle ansvar. *Ved interesse benytt *kontakt* øverst til høyre for info og kontaktadresse.", "se mer"),     
      
    ],
};


class RenderItems {
    static render(items, container) {
        container.innerText = '';
        items.forEach(item => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            const listItem = document.createElement("li");
       
            img.src = item.img;
            img.alt = item.title;

   
            /*img.alt = item.alt || `Bilde av et kunstverk av ${item.artist}`;*/


            button.innerText = ` ${item.button}`;

            button.addEventListener("click", () => {
                displayItemDetails(item);
            });

           button.className = "item-button";
           listItem.className = "item-container";
           listItem.appendChild(button);
           listItem.appendChild(img);
           
           container.appendChild(listItem);
       

            if (item instanceof ItemPrint) {
                const print = document.createElement('p');
                print.innerText = `Print: ${item.print}`;
            }

            listItem.append(img, button);
            container.append(listItem);
        });
    }}


function renderBiografi(biografiItems, container) {
    container.innerText = '';
    biografiItems.forEach(bio => {
        const bioText = document.createElement("p");
        bioText.innerText = bio.tekst;
        container.appendChild(bioText);
    });
}

function renderEspenBiografi() {
    renderItemsEspen.innerText = '';
    renderBiografi(itemsEspen.biografi, renderItemsEspen);
}

function renderCategoryTree() {
    renderItemsAdele.innerText = '';
    renderBiografi(itemsAdele.category3, renderItemsAdele);
}


function renderCategoryOne() {
    renderItemsAdele.innerText = '';
    RenderItems.render(itemsAdele.category1, renderItemsAdele);
}

function renderCategoryTwo() {
    renderItemsAdele.innerText = '';
    RenderItems.render(itemsAdele.category2, renderItemsAdele);
}

function renderEspenPaintings() {
    renderItemsEspen.innerText = '';
    RenderItems.render(itemsEspen.paintings, renderItemsEspen);
}

function renderEspenPrints() {
    renderItemsEspen.innerText = '';
    RenderItems.render(itemsEspen.prints, renderItemsEspen);
}

function renderEspenProjects() {
    renderItemsEspen.innerText = '';
    RenderItems.render(itemsEspen.project, renderItemsEspen);
}

filterPainting.addEventListener("click", () => {
    lastFilterAdele = "paintings";
    renderCategoryOne();
    filterPainting.classList.add("filter-active");
    filterDga.classList.remove("filter-active");
    filterBiografi.classList.remove("filter-active");
});

filterDga.addEventListener("click", () => {
    lastFilterAdele = "dga";
    renderCategoryTwo();
    filterPainting.classList.remove("filter-active");
    filterDga.classList.add("filter-active");
    filterBiografi.classList.remove("filter-active");
});

filterBiografi.addEventListener("click", () => {
    lastFilterAdele = "biografi";
    renderCategoryTree();
    filterPainting.classList.remove("filter-active");
    filterDga.classList.remove("filter-active");
    filterBiografi.classList.add("filter-active");
});

document.querySelector(".filter-espen-painting").addEventListener("click", () => {
    lastFilterEspen = "paintings";
    renderEspenPaintings();
    document.querySelector(".filter-espen-painting").classList.add("filter-active");
    document.querySelector(".filter-espen-print").classList.remove("filter-active");
    document.querySelector(".filter-espen-project").classList.remove("filter-active");
    document.querySelector(".filter-espen-biografi").classList.remove("filter-active");
});

document.querySelector(".filter-espen-print").addEventListener("click", () => {
    lastFilterEspen = "prints";
    renderEspenPrints();
    document.querySelector(".filter-espen-print").classList.add("filter-active");
    document.querySelector(".filter-espen-painting").classList.remove("filter-active");
    document.querySelector(".filter-espen-project").classList.remove("filter-active");
    document.querySelector(".filter-espen-biografi").classList.remove("filter-active");
});

document.querySelector(".filter-espen-project").addEventListener("click", () => {
    lastFilterEspen = "projects";
    renderEspenProjects();
    document.querySelector(".filter-espen-project").classList.add("filter-active");
    document.querySelector(".filter-espen-painting").classList.remove("filter-active");
    document.querySelector(".filter-espen-print").classList.remove("filter-active");
    document.querySelector(".filter-espen-biografi").classList.remove("filter-active");
});

document.querySelector(".filter-espen-biografi").addEventListener("click", () => {
    lastFilterEspen = "biografi";
    renderEspenBiografi();
    document.querySelector(".filter-espen-biografi").classList.add("filter-active");
    document.querySelector(".filter-espen-painting").classList.remove("filter-active");
    document.querySelector(".filter-espen-print").classList.remove("filter-active");
    document.querySelector(".filter-espen-project").classList.remove("filter-active");
});

function displayItemDetails(item) {
    const existingDetails = document.querySelector(".item-details");
    if (existingDetails) {
        existingDetails.remove();
    }

 
    const itemDetails = document.createElement("div");
    const backButton = document.createElement("button");
    const itemImg = document.createElement("img");
    const itemInfo = document.createElement("div");
    const itemTitle = document.createElement("p");
    const itemTechnique = document.createElement("p");
    const itemSize = document.createElement("p");
    const itemYear = document.createElement("p");
    const itemPrint = document.createElement("p");
   

    backButton.className = "back-button";
    backButton.innerText = " <--- ";
    backButton.addEventListener("click", () => {
        if (currentGallery === "Adele") {
            displayGalleryAdele();
        } else if (currentGallery === "Espen") {
            displayGalleryEspen();
        }
        itemDetails.remove(); 
    });

    itemImg.className = "item-img";
    itemInfo.className = "item-info";
    itemTitle.className = "item-title";
    itemTechnique.className = "item-technique";
    itemSize.className = "item-size";
    itemYear.className = "item-year";
    itemPrint.className = "item-print";
    itemDetails.className = "item-details";

    itemImg.src = item.img;
    itemImg.alt = "klassisk maleri av Adele Tjønnås og Espen Gjerløv ";

    itemTitle.innerText = ` ${item.title}`;
    itemTechnique.innerText = ` ${item.technique}`;
    itemSize.innerText = ` ${item.size}`;
    itemYear.innerText = ` ${item.year}`;

    itemPrint.innerText = ` ${item.print || ''}`;
    itemPrint.style.display = item.print ? "block" : "none";

    
  
    itemInfo.append(
        itemTitle,
        itemTechnique,
        itemSize,
        itemYear,
        itemPrint,
       
    );

    itemDetails.append(
        backButton,
        itemImg,
        itemInfo
    );


    mainContent.appendChild(itemDetails);


    document.querySelector(".frontpage").style.display = "none";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "none";
    /*itemDetails.style.display = "block";*/
}

/*--------------------------------------------------------------------------------*/

const contactLink = document.querySelector(".link-contact");
const contactSection = document.querySelector(".contact-section");
const homePage = document.querySelector(".frontpage");
const backToHomeButton = document.querySelector(".back-to-home");


contactLink.addEventListener("click", () => {
    homePage.style.display = "none";
    contactSection.style.display = "block";
});


backToHomeButton.addEventListener("click", () => {
    contactSection.style.display = "none";
    homePage.style.display = "block";
});

function renderCategoryTwo() {
    renderItemsAdele.innerText = '';
    itemsAdele.category2.forEach(item => {
        const listItem = document.createElement("li");
        const img = document.createElement("img");
        const button = document.createElement("button");

        img.src = item.img;
        img.alt = item.title;
        img.classList.add("category2-image"); 

        button.innerText = item.button;
        button.className = "item-button";

        button.addEventListener("click", () => {
            displayItemDetails(item);
        });

        listItem.className = "item-container";
        listItem.appendChild(img);
        listItem.appendChild(button);

        renderItemsAdele.appendChild(listItem);
    });
}

function displayItemDetails(item) {
    const existingDetails = document.querySelector(".item-details");
    if (existingDetails) {
        existingDetails.remove();
    }

/*-------------------*/

    const itemDetails = document.createElement("div");
    const backButton = document.createElement("button");
    const itemImg = document.createElement("img");
    const itemInfo = document.createElement("div");
    const itemTitle = document.createElement("p");
    const itemTechnique = document.createElement("p");
    const itemSize = document.createElement("p");
    const itemYear = document.createElement("p");
    const itemPrint = document.createElement("p");

    backButton.className = "back-button";
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
        if (currentGallery === "Adele") {
            displayGalleryAdele();
        } else if (currentGallery === "Espen") {
            displayGalleryEspen();
        }
        itemDetails.remove(); 
    });


    itemImg.className = "item-img";
    if (itemsAdele.category2.includes(item)) {
        itemImg.classList.add("category2-image"); 
    }
    itemImg.src = item.img;
    itemImg.alt = "Klasisk figurativ malerier adele tjønnås";

    itemTitle.className = "item-title";
    itemTechnique.className = "item-technique";
    itemSize.className = "item-size";
    itemYear.className = "item-year";
    itemPrint.className = "item-print";
    itemDetails.className = "item-details";

    itemTitle.innerText = ` ${item.title}`;
    itemTechnique.innerText = ` ${item.technique}`;
    itemSize.innerText = ` ${item.size}`;
    itemYear.innerText = ` ${item.year}`;
    itemPrint.innerText = ` ${item.print || ''}`;
    itemPrint.style.display = item.print ? "block" : "none";

    itemInfo.append(
        itemTitle,
        itemTechnique,
        itemSize,
        itemYear,
        itemPrint
    );

    itemDetails.append(
        backButton,
        itemImg,
        itemInfo
    );

    mainContent.appendChild(itemDetails);

    document.querySelector(".frontpage").style.display = "none";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "none";
}


if (itemsAdele.category2.includes(Item)) {
    itemImg.classList.add("category2-image");
}

/*-----------------------------*/

function renderBiografi(biografiItems, container) {
    container.innerText = ''; 
    biografiItems.forEach(bio => {
        const textContainer = document.createElement("div");
        textContainer.classList.add("text_container");

        const bioText = document.createElement("p");
        bioText.innerText = bio.tekst;
        bioText.classList.add("biografi-text");

        textContainer.appendChild(bioText);
        container.appendChild(textContainer);
    });
}