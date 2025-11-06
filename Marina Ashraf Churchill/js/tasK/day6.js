

function openwin(){
var win;
var x = window.outerWidth;
 var y = window.outerHeight;
 setTimeout(function(){
win= window.open(
 "",// مفيش url
   "_blank",//يعني النافذة/تاب جديدة.
   `screenX=${x / 2-200},screenY=${y / 2 -200 },width=400,height=400`

);
//   win.document.writeln("<p>Hello from new window! Hello from new window! Hello from new window! Hello from new window!</p>"
//  );

        let text = "This is a long advertising paragraph that will appear gradually, character by character. Enjoy the ad!";
        let i = 0;

// },
//  3000);// 3000 ms = 3 ثواني
// };
let interval = setInterval(() => {
          if (i < text.length) {
           win.document.body.innerHTML += text.charAt(i);
            i++;
          } else {
            clearInterval(interval); // نوقف بعد ما النص يخلص
          }
        }, 100); // كل 100ms يطبع حرف
      }, 3000); // يستنى 3 ثواني قبل ما يفتح الإعلان
    }

    
 function closewin(){
    win= window.close();
 }

//  task3

function openface(){
    location.href="https://www.facebook.com";
}
  function opentwitter() {
      location.replace("https://www.twitter.com"); 
    }

    // task4


    

         setTimeout(function(){
alert('welcome');},3000);

    