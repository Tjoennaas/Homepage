


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
const filterPainting = document.querySelector(".filter-painting");
const filterDga = document.querySelector(".filter-dga");


function displayGalleryEspen() {
    artists.style.display = "none";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "flex";
    filterAdele.style.display = "none";
    filterEspen.style.display = "flex";
    linkToFrontpage.style.display = "none";
    linkFrontPageArtist.style.display = "flex"; 
}

function displayGalleryAdele() {
    artists.style.display = "none";
    frontpageForAdele.style.display = "flex";
    frontpageForEspen.style.display = "none";
    filterAdele.style.display = "flex";
    filterEspen.style.display = "none";
    linkToFrontpage.style.display = "none";
    linkFrontPageArtist.style.display = "flex"; 
     renderCategoryTwo();
     renderCategoryOne();
}

function backToHomepage() {
    artists.style.display = "flex";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "none";
    filterAdele.style.display = "none";
    filterEspen.style.display = "none";
    linkToFrontpage.style.display = "flex";
    linkFrontPageArtist.style.display = "none";
}

linkFrontPageArtist.addEventListener("click", backToHomepage);
navigateButtonEspen.addEventListener("click", displayGalleryEspen);
navigateButtonAdele.addEventListener("click", displayGalleryAdele);

/* ----------- ES6 CLASSES -------------- */

class ItemAdele {
    constructor(title, technique, size, year, img) {
        this.title = title;
        this.technique = technique;
        this.size = size;
        this.year = year;
        this.img = img;
    }
}

class ItemAdelePrint extends ItemAdele {
    constructor(title, technique, size, year, img, print) {
        super(title, technique, size, year, img);
        this.print = print;
    }
}

const itemsAdele = {
    category1: [
        new ItemAdele("Kreation", "Oil painting", "", "2020", "../src/assets/adele1/a1.jpg"),
        new ItemAdele("Ut", "Oil painting", "", "2020", "../src/assets/adele1/a3.jpg"),
        new ItemAdele("Danum valley", "Oil painting", "", "2019", "../src/assets/adele1/a4.jpg"),
        new ItemAdele("Thamel", "Oil painting", "", "2019", "../src/assets/adele1/a5.jpg"),
        new ItemAdele("Kjøttmeis", "Oil painting", "", "2018", "../src/assets/adele1/a6.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a7.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a10.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a11.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a16.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a17.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a18.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a21.jpg"),
        new ItemAdele("", "Oil painting", "", "2018", "../src/assets/adele1/a18.jpg"),
        new ItemAdele("Spurv", "Oil painting", "", "2018", "../src/assets/adele1/a20.jpg"),
      ],

    category2: [
        new ItemAdelePrint("", "DGA", "A3", "2024", "../src/assets/adele1/a2.jpg", "50"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a8.jpg", "37"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a9.jpg", "50"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a13.jpg", "49"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a14.jpg", "50"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a15.jpg", "50"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a19.jpg", "50"),
        new ItemAdelePrint("", "DGA", "A3", "2022", "../src/assets/adele1/a22.jpg", "50"),
    ],
};

/*----------------------------------------------------------*/

    class RenderItems {
        static render(items, container) {
        items.forEach(item => {
            const img = document.createElement("img");
            const listItem = document.createElement("li");
            const title = document.createElement("p");
            const technique = document.createElement("p");
            const size = document.createElement("p");
            const year = document.createElement("p");
           

            listItem.className = "item-container";

            img.src = item.img;
            img.alt = item.title;
            title.innerText = `Title: ${item.title}`;
            technique.innerText = `Technique: ${item.technique}`;
            size.innerText = `Size: ${item.size}`;
            year.innerText = `Year: ${item.year}`;
         

            listItem.append(
                  title,
                  technique,
                  size,
                  year );

            if (item instanceof ItemAdelePrint) {
               
                const print = document.createElement('p');
                print.innerText = `Print: ${item.print}`;
                listItem.append(print);
            }

                listItem.append(img);
                container.append(listItem);
        });
    }
}

/* -------------------- filter  ---------------------------- */

function renderCategoryOne() {
    renderItemsAdele.innerText = '';
    RenderItems.render(itemsAdele.category1 , renderItemsAdele);
}

function renderCategoryTwo() {
    renderItemsAdele.innerText = '';
    RenderItems.render(itemsAdele.category2 , renderItemsAdele);
}


filterPainting.addEventListener("click", () => {
    renderCategoryOne();
    filterPainting.classList.add("filter-painting");
    filterDga.classList.remove("filter-dga--visible");
});


filterDga.addEventListener("click", () => {
    renderCategoryTwo();
    filterPainting.classList.remove("filter-painting");
    filterDga.classList.add("filter-dga--visible");

});

