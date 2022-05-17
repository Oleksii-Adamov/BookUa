let slider = document.getElementById('slider');
let slider_items = slider.getElementsByTagName('div');
let current_item = 0;
let timer = setInterval(()=>runSlider(1,false),4000);

let runSlider = function(index, stop) {
  let dnum = current_item + index;
  
  if(stop) {
  	clearInterval(timer);
  }

  if(dnum < 0) {
  		dnum = slider_items.length - 1;
  }

  if(dnum >=  slider_items.length) {
  		dnum = 0;
  }

  current_item = dnum;
  for (i = 0; i < slider_items.length; i++) {
    slider_items[i].classList.remove('active');
  }
  
  slider_items[dnum].classList.add('active');			 
};

document.getElementById('arrowLeft').onclick = () => runSlider(-1,true);
document.getElementById('arrowRight').onclick = () => runSlider(1,true);
