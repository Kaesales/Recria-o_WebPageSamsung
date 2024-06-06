let count = 1;
document.getElementById("radio1").checked = true;
const slideshow = document.getElementById('slider');


setInterval(function(){
nextImage();
}, 5000)


function nextImage(){
    count++;
    if(count>4){
       
        slideshow.style.transition = 'none';
        slideshow.style.transform = `translateX(${0})`;
        count = 1;
        

        setTimeout(() => {
                slideshow.style.transition = '.6s ease';
                slideshow.style.transform = `translateX(-${ count * 20}%)`
        }, 50);
        
        
    
   
    
}else{
     slideshow.style.transition = '.6s ease';
     slideshow.style.transform = `translateX(-${ count * 20}%)`;

}
document.getElementById("radio" + count).checked = true;
    
}