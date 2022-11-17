'use strict';

{
  const titleClickHandler = function(event){
      event.preventDefault();
      const clickedElement = this;
      console.log('Link was clicked!');
      console.log(event);
    
      /* [DONE] remove class 'active' from all article links  */
      const activeLinks = document.querySelectorAll('.titles a.active');

      for(let activeLink of activeLinks){
          activeLink.classList.remove('active');
      }
    
      /* [DONE] add class 'active' to the clicked link */
      console.log('clickedElement:', clickedElement);

      clickedElement.classList.add('active');

      /* [DONE] remove class 'active' from all articles */
      const activeArticles = document.querySelectorAll('.posts article.active');

      for(let activeArticle of activeArticles){
          activeArticle.classList.remove('active');
      }
    
      /* [DONE] get 'href' attribute from the clicked link */
      const clickedLink = clickedElement.getAttribute('href');
      console.log(clickedLink);
    
      /* [DONE] find the correct article using the selector (value of 'href' attribute) */
      const selectedArticle = document.querySelector(clickedLink);
      console.log(selectedArticle);
    
      /* [DONE] add class 'active' to the correct article */
      selectedArticle.classList.add('active');
      console.log(selectedArticle);
    } 
  
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  // eslint-disable-next-line no-inner-declarations
  function generateTitleLinks(){
    console.log('Run function generateTitleLinks');

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    const liTags = document.querySelectorAll('.titles li');
    for(let li of liTags){
      li.style.display="none";
    }

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    let html ='';
    
    for(let article of articles){

      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      
      /* [DONE] get the title from the title element */
      console.log(articleTitle);

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* [DONE] insert link into titleList */
      html = html + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  } 
  
generateTitleLinks();
}