 
 let flag=0;

  slideMovies();
   function slideMovies(){
    let slides=document.getElementsByClassName('slide-movies');
    for(let x of slides){
        x.style.display="none";
    }
     if(flag==slides.length){
      flag=0;
     }

     if(flag<0){
      flag=slides.length-1;
     }
      slides[flag].style.display="block";
      flag++;

       
   }

   setInterval(slideMovies,3000);
 
  const videoCards = [...document.querySelectorAll('.video-card')];
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerwidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      items.scrollLeft += containerwidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      items.scrollLeft -= containerwidth + 200;
    });
  });