 function loadGetSinMsg() {
                let nameVar = document.getElementById("sin").value;
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    try {
                         response = JSON.parse(this.responseText);
                         document.getElementById("getrespmsg").innerHTML = "<pre> The sin of the angle is: " + response + "</pre>";
                     } catch (error) {
                         document.getElementById("getrespmsg").innerHTML =
                         this.responseText;
                     }
                };
                xhttp.open("GET", "/sin?angle="+nameVar);
                xhttp.send();
 }
function loadGetCosMsg() {
                 let nameVar = document.getElementById("cos").value;
                 const xhttp = new XMLHttpRequest();
                 xhttp.onload = function() {
                     try {
                          response = JSON.parse(this.responseText);
                          document.getElementById("getrespmsg").innerHTML = "<pre> The cos of the angle is: " + response + "</pre>";
                      } catch (error) {
                          document.getElementById("getrespmsg").innerHTML =
                          this.responseText;
                      }
                 };
                 xhttp.open("GET", "/cos?angle="+nameVar);
                 xhttp.send();
}
function loadGetPalMsg() {
                 let nameVar = document.getElementById("pal").value;
                 const xhttp = new XMLHttpRequest();
                 xhttp.onload = function() {
                     try {
                          response = JSON.parse(this.responseText);
                          document.getElementById("getrespmsg").innerHTML = "<pre> Is " + nameVar + " a palindrome? : " + response + "</pre>";
                      } catch (error) {
                          document.getElementById("getrespmsg").innerHTML =
                          this.responseText;
                      }
                 };
                 xhttp.open("GET", "/palindrome?word="+nameVar);
                 xhttp.send();
  }
function loadGetMagMsg() {
                 let nameVarX = document.getElementById("vectorx").value;
                 let nameVarY = document.getElementById("vectory").value;
                 const xhttp = new XMLHttpRequest();
                 xhttp.onload = function() {
                     try {
                          response = JSON.parse(this.responseText);
                          document.getElementById("getrespmsg").innerHTML = "<pre> The magnitude of the vector is: " + response + "</pre>";
                      } catch (error) {
                          document.getElementById("getrespmsg").innerHTML =
                          this.responseText;
                      }
                 };
                 xhttp.open("GET", "/vector?x="+nameVarX+"&y="+nameVarY);
                 xhttp.send();
}
