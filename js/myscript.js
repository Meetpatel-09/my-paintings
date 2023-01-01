
var images = '{"images":[{"id":111,"event":"one","image":"https://source.unsplash.com/400x400"},{"id":112,"event":"two","image":"https://source.unsplash.com/random/?productivity"},{"id":113,"event":"three","image":"https://source.unsplash.com/random/?city"},{"id":114,"event":"one","image":"https://source.unsplash.com/random/?person"},{"id":115,"event":"two","image":"https://source.unsplash.com/random/?car"},{"id":116,"event":"three","image":"https://source.unsplash.com/random/?ship"},{"id":117,"event":"one","image":"https://source.unsplash.com/random/?computer"},{"id":118,"event":"two","image":"https://source.unsplash.com/random/?sky"},{"id":119,"event":"three","image":"https://source.unsplash.com/random/?plants"},{"id":10,"event":"one","image":"https://source.unsplash.com/random/festival"},{"id":11,"event":"two","image":"https://source.unsplash.com/300x300"},{"id":12,"event":"three","image":"https://source.unsplash.com/500x500"},{"id":13,"event":"one","image":"https://source.unsplash.com/random/?village"},{"id":14,"event":"two","image":"https://source.unsplash.com/600x600"},{"id":15,"event":"three","image":"https://source.unsplash.com/random/?productivity"},{"id":16,"event":"one","image":"https://source.unsplash.com/random/?city"},{"id":17,"event":"two","image":"https://source.unsplash.com/random/person"},{"id":18,"event":"three","image":"https://source.unsplash.com/random/car"},{"id":19,"event":"one","image":"https://source.unsplash.com/random/ship"},{"id":20,"event":"two","image":"https://source.unsplash.com/random/"}]}';

const obj = JSON.parse(images);

const baseUrl = "https://api.whatsapp.com/send?phone=916353291308&text=Hello%20Deep%2C%20I%20want%20to%20buy%20this%20picture%3A%20";

var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var column3 = document.getElementById("column3");
var filter = document.getElementById("filter");
var image1 = document.getElementById("image1");
var main = document.getElementById("main");
var enlarge = document.getElementById("enlarge");
var details = document.getElementById("details");
var close = document.getElementById("close");
var btnBuy = document.getElementById("btnbuy");
var imageIndex;

enlarge.style.display = "none";
close.style.display = "none";

setImages("none");

function ChangeImages() {
     column1.innerHTML = '';
     column2.innerHTML = '';
     column3.innerHTML = '';
     var selOption = filter.options[filter.selectedIndex].value;
     console.log(selOption);

     setImages(selOption);
}

function setImages(selectedOption) {

     var conter = 1;
     var counterTwo = 1;

     obj.images.forEach(element => {

          console.log(selectedOption);

          if (selectedOption == "none" || selectedOption == "select") {
               if (conter % 3 == 0) {

                    column3.innerHTML += " " + '<img src=' + element.image + ' style="width:100%" id="img' + element.id + '" onclick="onImageClick(' + element.id + ')">';

                    // console.log(conter);
               } else if (counterTwo % 2 == 0) {

                    column2.innerHTML += " " + '<img src=' + element.image + ' style="width:100%" id="img' + element.id + '" onclick="onImageClick(' + element.id + ')">';

                    // console.log(conter);

                    counterTwo += 1;
               } else {
                    column1.innerHTML += " " + '<img src=' + element.image + ' style="width:100%" id="img' + element.id + '" onclick="onImageClick(' + element.id + ')">';

                    // console.log(conter);
                    counterTwo += 1;
               }

               conter += 1;
          } else {
               console.log("selectedOption: ");
               console.log(selectedOption);
               if (element.event == selectedOption) {
                    if (conter % 3 == 0) {

                         column3.innerHTML += " " + '<img src=' + element.image + ' style="width:100%" id="img' + element.id + '" onclick="onImageClick(' + element.id + ')">';

                         // console.log(conter);
                    } else if (conter % 2 == 0) {

                         column2.innerHTML += " " + '<img src=' + element.image + ' style="width:100%" id="img' + element.id + '" onclick="onImageClick(' + element.id + ')">';

                         // console.log(conter);
                    } else {

                         column1.innerHTML += " " + '<img src=' + element.image + ' style="width:100%" id="img' + element.id + '" onclick="onImageClick(' + element.id + ')">';

                         // console.log(conter);
                    }

                    conter += 1;
               }
          }

     });
}

function onImageClick(id) {
     var images = obj.images;
     for (var i = 0; i < images.length; i++) {
          if (images[i].id == id) {
               // console.log(images[i].id);
               enlarge.style.display = "flex";
               close.style.display = "block";
               main.style.opacity = 0.3;
               image1.src = obj.images[i].image;
               console.log(image1.height);
               console.log(image1.width);
               console.log(screen.height);
               console.log(screen.width);
               imageIndex = i;
               return;
          }
     }
}

function closeImageView() {
     enlarge.style.display = "none";
     close.style.display = "none";
     main.style.opacity = 1;
}

function buyNow() {
     var url = obj.images[imageIndex].image;
     var completeUrl = baseUrl + encodeURIComponent(url)
     window.open(completeUrl);
}