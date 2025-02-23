const nextEl=document.getElementById("next");
const prevEl=document.getElementById("prev");
const stepsEl= document.querySelectorAll(".step");
const progressEl= document.querySelector(".progress-bar-front");


let currentChecked = 1




nextEl.addEventListener("click",()=>{
     currentChecked++
   if(currentChecked>stepsEl.length){
      currentChecked = stepsEl.length;
   }
updateStepProgress()

});


prevEl.addEventListener("click",()=>{
  currentChecked--
if(currentChecked<1){
   currentChecked = 1
}
updateStepProgress()

});

function updateStepProgress(){
  stepsEl.forEach((stepsEl,idx)=>{
    if(idx<currentChecked){
      stepsEl.classList.add("checked");
      stepsEl.innerHTML = `
      <i class="fa-solid fa-check"></i>
      <small>${idx === 0 ? "Start" :idx=== stepsEl.length -1 ? "Final" :"Step" + idx}</samll>
      `;
    }else{
      stepsEl.classList.remove("checked");
      stepsEl.innerHTML =`
           <i class="fa-solid fa-circle-xmark"></i>`
    }

  });


const checkedNumber= document.querySelectorAll(".checked");

progressEl.style.width=
 ((checkedNumber.length-1) / (stepsEl.length - 1)) * 100 + "%";



progressEl.computedStyleMap.width ="100%";

if(currentChecked ===1 ){
  prevEl.disabled =true;
}else if (currentChecked===
  stepsEl.length){
    nextEl.disabled = true;
  }else{
    prevEl.disabled= false;
    nextEl.disabled= false;
  }


}
