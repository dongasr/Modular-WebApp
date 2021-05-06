const links = document.querySelectorAll('nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');
// console.log(links)


class Navigation {
  constructor() {
    this.linkPaths = [] ;
    this.currentPage = null;
    links.forEach((link) => {
      link.addEventListener('click', function(){
        let pageId = link.href.split("#")[1];
        this.currentPage = pageId;
        setPage(pageId)
      });
    });
  }
}

function setPage(pageId) {
    links.forEach((link) => {
      link.classList.remove('active');
      if(link.href.split("#")[1] == pageId) {
       link.classList.add('active'); 
      }
    });

    pages.forEach((page) => {
      page.style.display = 'none';
    })


    document.getElementById(pageId).style.display = 'block'
    
  console.log("Going to " + pageId)
}

export default Navigation;