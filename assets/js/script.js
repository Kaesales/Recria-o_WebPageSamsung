let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
nextImage();
}, 4000)


const texto =  document.querySelectorAll('.text_navigation');
function nextImage(){

    count++;
    if(count>4){
        count = 1;
        
    }

    document.getElementById("radio" + count).checked = true;

    if(radio3.checked){
        texto.forEach(function(texto) {
            texto.style.color = 'black';
        });
    }else{
        texto.forEach(function(texto) {
            texto.style.color = '';
        });
    }

}



document.getElementById("prevButton").addEventListener("click", prevImage);
document.getElementById("nextButton").addEventListener("click", nextImage);


function prevImage() {
    count--;
    if (count < 1) {
        count = 4;
    }
    document.getElementById("radio" + count).checked = true;
}



function nexxtImage() {
    count++;
    if (count > 4) {
        count = 1;
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


