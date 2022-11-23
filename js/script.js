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
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';


  // eslint-disable-next-line no-inner-declarations
  function generateTitleLinks(customSelector = ''){
    console.log('Run function generateTitleLinks');

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    const liTags = document.querySelectorAll('.titles li');
    for(let li of liTags){
      li.style.display="none";
    }

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
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


  // eslint-disable-next-line no-inner-declarations
  function generateTags(){

    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){

      /* [DONE] find tags wrapper */
      const wrapper = article.querySelector(optArticleTagsSelector);

      /* [DONE] make html variable with empty string */
      let html ='';

      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* [DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){

        /* [DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>, ';
        console.log(linkHTML);

        /* [DONE] add generated code to html variable */
        html = html + linkHTML;
      
      } /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */
      wrapper.innerHTML = html;

    } /* END LOOP: for every article: */
  }


  generateTags();

  // eslint-disable-next-line no-inner-declarations
  function tagClickHandler(event){

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('Tag was clicked!');
    console.log(event);

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);
  
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);  
  
    /* START LOOP: for each active tag link */
    for(let activeTag of activeTags){

      /* remove class active */
      activeTag.classList.remove('active');
  
    } /* END LOOP: for each active tag link */
  
    /* find all tag links with "href" attribute equal to the "href" constant */
    const compatibleLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log(compatibleLinks);
  
    /* START LOOP: for each found tag link */
    for(let compatibleLink of compatibleLinks){
  
      /* add class active */
      compatibleLink.classList.add('active');
  
    } /* END LOOP: for each found tag link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  

  // eslint-disable-next-line no-inner-declarations
  function addClickListenersToTags(){

    /* find all links to tags */
    const tagLinks = document.querySelectorAll('.list-horizontal a');
    console.log(tagLinks);

    /* START LOOP: for each link */
    for(let tagLink of tagLinks){

      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);

    } /* END LOOP: for each link */
  }
  
  addClickListenersToTags();


  // eslint-disable-next-line no-inner-declarations
  function generateAuthors(){

    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){

      /* [DONE] find author wrapper */
      const wrapper = article.querySelector(optArticleAuthorSelector);

      /* [DONE] make html variable with empty string */
      let html ='';

      /* [DONE] get tags from data-author attribute */
      const articleAuthor = article.getAttribute('data-author');
      console.log(articleAuthor);

      /* [DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#author-' + articleAuthor + '"><span>' + articleAuthor  + '</span></a></li>, ';
      console.log(linkHTML);

      /* [DONE] add generated code to html variable */
      html = html + linkHTML;

      /* insert HTML of all the links into the author wrapper */
      wrapper.innerHTML = html;

    } /* END LOOP: for every article: */
  }

  generateAuthors();


  // eslint-disable-next-line no-inner-declarations
  function authorClickHandler(event){

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('Author was clicked!');
    console.log(event);

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-', '');
    console.log(author);

    /* find all author links with class active */
    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(activeAuthorLinks);  
  
    /* START LOOP: for each active author link */
    for(let activeAuthorLink of activeAuthorLinks){

      /* remove class active */
      activeAuthorLink.classList.remove('active');
  
    } /* END LOOP: for each active author link */
  
    /* find all author links with "href" attribute equal to the "href" constant */
    const compatibleLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log(compatibleLinks);
  
    /* START LOOP: for each found author link */
    for(let compatibleLink of compatibleLinks){
  
      /* add class active */
      compatibleLink.classList.add('active');
  
    } /* END LOOP: for each found author link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');
  }


  // eslint-disable-next-line no-inner-declarations
  function addClickListenersToAuthors(){

    /* find all links to author */
    const authorLinks = document.querySelectorAll('.post-author a');
    console.log(authorLinks);
  
    /* START LOOP: for each link */
    for(let authorLink of authorLinks){
  
      /* add tagClickHandler as event listener for that link */
      authorLink.addEventListener('click', authorClickHandler);
  
    } /* END LOOP: for each link */
  }

  addClickListenersToAuthors();
  
  const optTagsListSelector = '.tags .list';

  // eslint-disable-next-line no-inner-declarations
  function generateTags(){
    /* [NEW] create a new variable allTags with an empty array */
    let allTags = [];
    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    /* [DONE] START LOOP: for every article: */
    for(let article of articles){
      /* [DONE] find tags wrapper */
      const wrapper = document.querySelector(optTagsListSelector);
      /* [DONE] make html variable with empty string */
      let html ='';
      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      /* [DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* [DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>, ';
        console.log(linkHTML);
        /* [DONE] add generated code to html variable */
        html = html + linkHTML;
        /* [NEW] check if this link is NOT already in allTags */
        if(allTags.indexOf(linkHTML) == -1){
          /* [NEW] add generated code to allTags array */
          allTags.push(linkHTML);
        }
      } /* [DONE] END LOOP: for each tag */
      /* [DONE] insert HTML of all the links into the tags wrapper */
      wrapper.innerHTML = html;
    } /* [DONE] END LOOP: for every article: */
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);
    /* [NEW] add html from allTags to tagList */
    tagList.innerHTML = allTags.join(' ');
  }

}
