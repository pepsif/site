//HTML COUNTER
let html = document.querySelector(".html");
const numb = document.querySelector(".html");
let counter = 0;
setInterval(() => {
  if(counter === 90 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 22);
console.log(JSON.stringify(html.style.animation))
console.log('animation')

// html.style.animation = 'html5 12s ease-out';
//CSS COUNTER
const css = document.querySelector(".css");
let counterCss = 0;
setInterval(() => {
  if(counterCss == 80 ){
    clearInterval();
  }else{
    counterCss+=1;
    css.textContent = counterCss + "%";
  }
}, 23);

//JS COUNTER
const js = document.querySelector(".js");
let counterJs = 0;
setInterval(() => {
  if(counterJs == 30 ){
    clearInterval();
  }else{
    counterJs+=1;
    js.textContent = counterJs + "%";
  }
}, 63);

//PHP COUNTER

const php = document.querySelector(".php");
let counterPhp = 0;
setInterval(() => {
  if(counterPhp == 10 ){
    clearInterval();
  }else{
    counterPhp+=1;
    php.textContent = counterPhp + "%";
  }
}, 193);