//código para engrenar o primeiro carousel
let control  = 1;
const totalText = 3;
const carouselOne = document.getElementById("groupcarousel");


setInterval(function(){ 
    nextText()
}, 3000);

function nextText(){
control++;
if(control > totalText){
carouselOne.style.transition = 'none';
carouselOne.style.transform = 'translateX(0)'
control = 1;

setTimeout(()=>{
carouselOne.style.transition = '.6s ease';
carouselOne.style.transform = `translateX(-${control * 25}%)`
},50)

}else{
carouselOne.style.transform = `translateX(-${control * 25}%)`
}
}



//código para engrenar o segundo carousel
let count = 1;
document.getElementById("radio1").checked = true;
const slideshow = document.getElementById('slider');
document.getElementById("radio" + count).checked = true;
let carouselInterval;
const texto =  document.querySelectorAll('.text_navigation');

function startCarousel(){
carouselInterval = setInterval(function(){
nextImage();
}, 5000);

}

startCarousel();

function nextImage(){
   
    if(count>4){
        count = 1;
        
        slideshow.style.transition = 'none';
        slideshow.style.transform = `translateX(0)`

        setTimeout(() => {
                slideshow.style.transition = '.6s ease';
                slideshow.style.transform = `translateX(-${count * 20}%)`
        }, 50);
        
    }else{
     slideshow.style.transition = '.6s ease';
     slideshow.style.transform = `translateX(-${count * 20}%)`;
    ;
}
count++ 
document.getElementById("radio" + count).checked = true;

changeColor();
}


function prevImage(){
        count--
    if(count<1){
            count = 4;
            
            slideshow.style.transition = 'none';
            slideshow.style.transform = `translateX(-${count  * 20}%)`
    
            setTimeout(() => {
                    slideshow.style.transition = '.6s ease';
                    slideshow.style.transform = `translateX(-${ count * 20}%)`
            }, 50);
    }else if (count == 1) {
        slideshow.style.transition = '.6s ease';
        slideshow.style.transform = `translateX(0)`;
    }else{
         slideshow.style.transition = '.6s ease';
         slideshow.style.transform = `translateX(-${count  * 20}%)`;
        
    } 
    
    document.getElementById("radio" + count).checked = true;
    changeColor()
  }
    

    document.getElementById("prevButton").addEventListener("click", () => { 
        clearInterval(carouselInterval);
        prevImage();
        startCarousel()}
    );
    
    document.getElementById("nextButton").addEventListener("click", () => { 
        clearInterval(carouselInterval);
        nextImage();
        startCarousel()}
    );
    



document.querySelectorAll('.info_button').forEach(infoButton => {
    const targetId = infoButton.getAttribute('data-target');
    const textNavigation = document.querySelector(`.text_navigation[data-target="${targetId}"]`);


    infoButton.addEventListener('mouseover', () => {
        textNavigation.style.opacity = '1';
    });

    infoButton.addEventListener('mouseout', () => {
        textNavigation.style.opacity = '0';
    });
});





function changeColor(){
    document.querySelectorAll('.info_button').forEach(infoButton => {
        const targetId = infoButton.getAttribute('data-target');
        const textNavigation = document.querySelector(`.text_navigation[data-target="${targetId}"]`);
    
      if(radio3.checked){

        textNavigation.style.color = 'black';
    
      }else{
        textNavigation.style.color = '';
      }})
    }
