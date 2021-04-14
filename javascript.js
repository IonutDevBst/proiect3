var section = document.querySelectorAll(".section");
var sections = {};
section.forEach(function(e){
console.log(e.id , e.offsetTop)
section[e.id]=e.offsetTop;
})
window.onscroll = function(){
    var scrollPos = document.documentElement.scrollTop ||
        document.body.scrollTop;
    console.log('scrollPos');
 for(var x in sections){
     if(sections[x]<=scrollPos){
         document.querySelector('.active').setAttribute('class','');
         document.querySelector('a[href*='+x+']').setAttribute('class','active')
     }
 }   
}






/*Press   */
document.getElementById("id2").addEventListener("click", function() {
  alert("HTML CSS JavaScript ReactJS");
}),

document.getElementById("id3").addEventListener("click", function() {
    alert("Node.js Express.js MongoDB");
  }),

  document.getElementById("id4").addEventListener("click", function() {
    alert("Git Bitbucket ");
  });



  //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton;
  } else {
    mybutton;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}