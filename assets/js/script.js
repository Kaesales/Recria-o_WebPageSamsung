let count = 1;
document.getElementById("radio1").checked = true;
const slideshow = document.getElementById('slider');


setInterval(function(){
nextImage();
}, 4000)


const texto =  document.querySelectorAll('.text_navigation');

function nextImage(){
    count++;
    if(count>4){
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


