var slide = document.getElementsByClassName("slider")[0]
var rightslide = document.getElementsByClassName("resources")[0]
var leftslide = document.getElementsByClassName("community-header")[0]
var images = document.getElementsByClassName("slider-img")[0]
var click = 0;





function makeslide(){
    click += 1;
    if(click == 0){
        leftslide.style.opacity = 1.00;
    }
    if (click == 1){   
        slide.style.right = "16%";
    } 
    if (click == 2){   
        slide.style.right = "32%";
    } 
    if (click == 3){   
        slide.style.right = "48%";
        rightslide.style.opacity = 0.40;
    } if (click == 4){
        click = 0;
        slide.style.right = "0%";
        rightslide.style.opacity = 1.0;
    }
        console.log(click)

}


function makeslideback(){
   if (click == 1){
       slide.style.right = "0%";
       click = 0;
    }
    if (click == 2){
        slide.style.right = "16%";
        click = 1;
    }
    if (click == 3){
        slide.style.right = "32%"; 
        click = 2;
        rightslide.style.opacity = 1.0;
    }
  
}
