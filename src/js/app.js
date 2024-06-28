



const navigateButtonEspen = document.querySelector(".navigate-button-espen");
const navigateButtonAdele = document.querySelector(".navigate-button-adele");
const frontpageForAdele = document.querySelector(".frontpage-for-adele");
const frontpageForEspen = document.querySelector(".frontpage-for-espen");
const filterAdele = document.querySelector(".filter-adele");
const filterEspen = document.querySelector(".filter-espen");
const artists = document.querySelector(".artists");
const linkToFrontpage = document.querySelector(".link-forntpage");
const linkFrontPageArtist = document.querySelector(".link-forntpage-artist");

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
