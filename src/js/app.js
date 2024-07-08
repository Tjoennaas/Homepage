



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
const mainContent = document.querySelector("body");  //change this



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
    renderCategoryTwo();
    renderCategoryOne();
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


class ItemAdele {
    constructor(img, title, technique, size, button, year ) {
        this.title = title;
        this.technique = technique;
        this.size = size;
        this.year = year;
        this.img = img;
        this.button = button;  
    }
}

class ItemAdelePrint extends ItemAdele {
      constructor(img, title, technique, size, year, button, print ) {
      super(img, title, technique, size, button, year );
        this.print = print;
    }
}


const itemsAdele = {
    category1: [
        new ItemAdele("../src/assets/adele1/a1.jpg", "Kreation", "Oil painting", "","More", "2020"),
        new ItemAdele("../src/assets/adele1/a3.jpg", "Ut", "Oil painting", "", "More", "2020"),
        new ItemAdele("../src/assets/adele1/a4.jpg","Danum valley", "Oil painting","","More","2019"),
        new ItemAdele("../src/assets/adele1/a5.jpg", "Thamel", "Oil painting", "", "More","2019"),
        new ItemAdele("../src/assets/adele1/a6.jpg","Kjøttmeis", "Oil painting","","More","2018"),
        new ItemAdele("../src/assets/adele1/a7.jpg","", "Oil painting", "", "More","2018"),
        new ItemAdele("../src/assets/adele1/a10.jpg","", "Oil painting", "","More","2018"),
        new ItemAdele("../src/assets/adele1/a11.jpg","", "Oil painting", "","More","2018"),
        new ItemAdele("../src/assets/adele1/a16.jpg","", "Oil painting", "","More","2018"),
        new ItemAdele("../src/assets/adele1/a17.jpg","", "Oil painting", "","More","2018"),
        new ItemAdele("../src/assets/adele1/a18.jpg","", "Oil painting", "", "More","2018"),
        new ItemAdele("../src/assets/adele1/a21.jpg","", "Oil painting", "","More", "2018"),
        new ItemAdele("../src/assets/adele1/a18.jpg","", "Oil painting", "","More","2018"),
        new ItemAdele("../src/assets/adele1/a20.jpg","Spurv", "Oil painting", "","More","2018"),
      ],

    category2: [
        new ItemAdelePrint( "../src/assets/adele1/a2.jpg","", "DGA", "A3", "2024","More","50"),
        new ItemAdelePrint( "../src/assets/adele1/a8.jpg", "", "DGA", "A3", "2022","More","37"),
        new ItemAdelePrint( "../src/assets/adele1/a9.jpg","", "DGA", "A3", "2022","More","50"),
        new ItemAdelePrint( "../src/assets/adele1/a13.jpg","", "DGA", "A3", "2022","More","49"),
        new ItemAdelePrint( "../src/assets/adele1/a14.jpg","", "DGA", "A3", "2022","More","50"),
        new ItemAdelePrint("../src/assets/adele1/a15.jpg","", "DGA", "A3", "2022","More", "50"),
        new ItemAdelePrint("../src/assets/adele1/a19.jpg", "", "DGA", "A3", "2022","More","50"),
        new ItemAdelePrint( "../src/assets/adele1/a22.jpg","", "DGA", "A3", "2022","More","50"),
    ],
};




class RenderItems {
    static render(items, container) {
        container.innerText = '';
        items.forEach(item => {
            const img = document.createElement("img");
            const listItem = document.createElement("li");
            const title = document.createElement("p");
            const technique = document.createElement("p");
            const size = document.createElement("p");
            const year = document.createElement("p");
            const textContainer = document.createElement("div");
            const button = document.createElement("button");

            listItem.className = "item-container";
            textContainer.className = "text-container";

            img.src = item.img;
            img.alt = item.title;
            title.innerText = `Title: ${item.title}`;
            technique.innerText = `Technique: ${item.technique}`;
            size.innerText = `Size: ${item.size}`;
            year.innerText = `Year: ${item.year}`;
            button.innerText = `${item.button}`;

            button.addEventListener("click", () => {
                displayItemDetails(item);
            });

            textContainer.append( 
                title,
                technique, 
                size,
                year
            );

            if (item instanceof ItemAdelePrint) {
                const print = document.createElement('p');
                print.innerText = `Print: ${item.print}`;
                textContainer.append(print);
            }

            listItem.append(img, textContainer, button);
            container.append(listItem);
        });
    }
}

function renderCategoryOne() {
    renderItemsAdele.innerText = '';
    RenderItems.render(itemsAdele.category1, renderItemsAdele);
}

function renderCategoryTwo() {
    renderItemsAdele.innerText = '';
    RenderItems.render(itemsAdele.category2, renderItemsAdele);
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



/*-----------------------------------------------------------*/



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
    backButton.innerText = "Back";
    backButton.addEventListener("click", displayGalleryAdele);

   
    itemImg.className = "item-img";
    itemInfo.className = "item-info";
    itemTitle.className = "item-title";
    itemTechnique.className = "item-technique";
    itemSize.className = "item-size";
    itemYear.className = "item-year";
    itemPrint.className = "item-print";
    itemDetails.className = "item-details";

    itemImg.src = item.img;
    itemImg.alt = "Item Image";

    itemTitle.innerText = `Title: ${item.title}`;
    itemTechnique.innerText = `Technique: ${item.technique}`;
    itemSize.innerText = `Size: ${item.size}`;
    itemYear.innerText = `Year: ${item.year}`;

    itemPrint.innerText = `Print: ${item.print || ''}`;
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

    mainContent.appendChild(
        itemDetails
    );

    document.querySelector(".frontpage").style.display = "none";
    frontpageForAdele.style.display = "none";
    frontpageForEspen.style.display = "none";
    itemDetails.style.display = "block";
}

/*----------------------------------  Espen homepage -------------------------------------*/

