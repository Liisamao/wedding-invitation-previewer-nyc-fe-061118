let textcontent = document.getElementById('textcontent1');
  textcontent.onkeyup = textcontent.onkeypress = function(){
      document.getElementById('nameone').innerHTML = this.value;
  }
let textcontent2 = document.getElementById('textcontent2');
  textcontent2.onkeyup = textcontent2.onkeypress = function(){
      document.getElementById('nametwo').innerHTML = this.value;
  }
let textcontent3 = document.getElementById('textcontent3');
  textcontent3.onkeyup = textcontent3.onkeypress = function(){
      document.getElementById('namethree').innerHTML = this.value;
  }
let textcontent4 = document.getElementById('textcontent4');
  textcontent4.onkeyup = textcontent4.onkeypress = function(){
      document.getElementById('namefour').innerHTML = this.value;
  }
let textcontent5 = document.getElementById('textcontent5');
  textcontent5.onkeyup = textcontent5.onkeypress = function(){
      document.getElementById('namefive').innerHTML = this.value;
  }
  
function changeToRomanceTheme(e) {
  let previewDiv = document.getElementsByClassName("preview")[0]
  previewDiv.id = "romance"
}

let romanceBtn = document.getElementById("romance-btn")
romanceBtn.addEventListener("click", changeToRomanceTheme)

function changeToRusticTheme(e) {
  let previewDiv = document.getElementsByClassName("preview")[0]
  previewDiv.id = "rustic"
}

let rusticBtn = document.getElementById("rustic-btn")
rusticBtn.addEventListener("click", changeToRusticTheme)

function changeToNatureTheme(e){
  let previewDiv = document.getElementsByClassName("preview")[0]
  previewDiv.id="nature"
}

let natureBtn = document.getElementById("nature-btn")
natureBtn.addEventListener("click", changeToNatureTheme)

