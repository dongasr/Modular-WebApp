// Nothing in here!
// Currently, all our JS is server side

import Navigation from "./components/navigation";
import "./components/tasklist";

const mainLinks = document.querySelectorAll('.top-nav > ul > li > a');
const mainPages = document.querySelectorAll('.page-container');

var nav = new Navigation(mainLinks, mainPages);

nav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    });
});

const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

var subNav = new Navigation(subLinks, subPages);

subNav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    });
});