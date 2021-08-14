let imgItem = document.querySelectorAll('div.section-wrapper img');
let contactButton = document.querySelector('.footer-contact');
let resumeForm = document.querySelector('.resume-form');


//contactbuttonform
contactButton.onclick = function () {
 resumeForm.classList.toggle('resume-form-on-off');
 resumeForm.classList.toggle('1');
 } 
 

 

//WORKS gallery ONCLICK

for (let element of imgItem) {
element.onclick = function () {
element.classList.toggle('img-checked');
element.classList.toggle('img-item');      
}

}
