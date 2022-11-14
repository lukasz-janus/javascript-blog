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
    
    const links = document.querySelectorAll('.titles a');
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks(){
    console.log('Run function generateTitleLinks');

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelector(optArticleSelector);
    console.log(articles);

    let html ='';
        for(let article of articles){

      /* [DONE] get the article id */
      const articleId = articles.getAttribute('id');
      console.log(articleId);

      /* [DONE] find the title element */
      const article = document.querySelector(optTitleSelector);
      
      /* [DONE] get the title from the title element */
      console.log( article.innerHTML );

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + article.innerHTML + '</span></a></li>';
      console.log( linkHTML );

      /* [IN PROGRESS] insert link into titleList */
      html = html + linkHTML;
      console.log( html );
      
    } 
  }
generateTitleLinks();
}