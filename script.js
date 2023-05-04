
/*
var sayi1 = 10;
let sayi2 = 20;
const sayi3 = 30;

if(true){

    var sayi1= 120; 
    let sayi2= 100; //letin çıkma nedenlerinden biri global değişkeni (var) gibi ezemiyor.
}
   
   

alert("sayi1: " + sayi1 + "\nsayi2: " + sayi2 + "\nsayi3: " + sayi3);


// var = değişken (her şeyi alır)

// const = sabit (tekrar değer atanamaz)
// içerisinde struct tarzı yapı varsa içerisindeki alt elemanın içeriğini değiştirebilirsin

// let = değişken var gibi 

var dizi = ["ali",5,"a",23.2];
dizi[50] = "ekledim";

alert(dizi[50]); // herhangi bir yerine ekleme yapılabiliyor dinamik bellek yönetimi
dizi.push("push ile ekledim");
alert(dizi); // herhangi


for (var i = 0; i < 10; i++){
    console.log("i:" +  i );
}


var k =0;
 
while (k < 10){
    console.log("k:" + k);
    k++;
}


var dizi2 = [1,2,5,4];

dizi2.forEach(function(sayi){
    console.log("sayi:" + sayi);
})

dizi2.forEach( element => {
    console.log("element:" + element);
}
)

var a=5,b=10;

if(a!=b){
    console.log("a!=b eşit değil");
}

if(2 == "2"){ // iki == var ise tipe bakmıyor
    console.log("2 == '2' eşit");

}

else {
    console.log("eşit değil");
}

if(2 === "2"){ // üç === var ise tipe bakıyor
    console.log("2 == '2' eşit");

}

else {
    console.log("2 == '2' eşit değil");
}

TypeScript konşuldu

function func_Adi(){
    console.log("fonksiyon 1 çağrıldı");
}

func_Adi();

function func_Adi2(isim){
    console.log("fonksiyon 2 parametresi : " + isim);
}


func_Adi2("berra");

var asistan = {
    isim : "berra",
    yas : 20,
    memleket : "rize",
    nesiMeshur : ["cay","muhlama","sütlaç","pide"],
    adres:{
        bina: "No : 2",
        kapiNo:14
    },

    isim_ve_yas_Getir : function(){
        return "isim : " + this.isim + " // yas : " + this.yas;
    }
};


console.log("memleket : "+asistan.memleket);
console.log("isim : "+asistan.isim);
console.log("yas : "+asistan.yas);
console.log("nesiMeshur : "+asistan.nesiMeshur);
console.log("adres : "+asistan.adres.bina + " // " + asistan.adres.kapiNo);
console.log(asistan.isim_ve_yas_Getir());

var asistan = new Object();
asistan.sokak = "marmara";

console.log("sokak : "+asistan.sokak);

function asistan(isim,yas,memleket){
    this.isim = isim;
    this.yas = yas;
    this.memleket = memleket;
}

var asistan1 = new asistan("berra",20,"rize");
var asistan1 = new asistan("sıla",20,"kayseri"); //ikisi de aynı isimle kaydedilirse ikinci geçerli
console.log(asistan1.memleket);

function Tikla(){
    alert("buton 1 tıklandı");
}

function Tikla2(){
    var element = document.getElementById("h2");
    element.innerText = "Subscribed"; // ya da innerHTML
    element.style.color = "green" ;
}



function fareuzerinde(){
    var element = document.getElementById("buton");
    element.style.color= "green";
    element.innerText="Enter";

}
function fareuzerindedegil(){
    var element = document.getElementById("buton");
    element.style.color= "Black";
    element.innerText="Subscribe";

}

function inputal() {
    var element = document.getElementById("input1");
    var email = element.value;
    var emailRegex = /\S+@\S+\.\S+/; 
    if (emailRegex.test(email)) {
        alert("Mail sent to : " + email);
      
    } else {
        alert("Please enter a valid email address.");
    }
}*/

function animatedesc() {
  const desc = document.querySelectorAll('.desc-box');
  const windowHeight = window.innerHeight;

  desc.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < windowHeight) {
      container.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animatedesc);


function animateprojectsContainers() {
    const projectsContainers = document.querySelectorAll('.projects-container');
    const windowHeight = window.innerHeight;
  
    projectsContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
  
      if (containerTop < windowHeight) {
        container.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', animateprojectsContainers);
  

function animateAboutContainers() {
    const aboutContainers = document.querySelectorAll('.about-container');
    const windowHeight = window.innerHeight;
  
    aboutContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
  
      if (containerTop < windowHeight) {
        container.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', animateAboutContainers);
  

function changeLinkStyle(clickedLinkId) {
    var clickedLink = document.getElementById(clickedLinkId);
    clickedLink.style.color = "white";
    
    var allLinks = document.getElementsByTagName("a");
    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i];
      if (link.id !== clickedLinkId) {
        link.style.color = "";
      }
    }
  }
  
  // Get the projects element
const projectsElement = document.getElementById('projects');

// Define the options for the IntersectionObserver
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // Trigger the animation when 20% of the element is visible
};

// Define the callback function for the IntersectionObserver
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animate class to the box elements
      const boxes = projectsElement.querySelectorAll('.box');
      boxes.forEach(box => box.classList.add('animate'));

      // Stop observing the projects element
      observer.unobserve(projectsElement);
    }
  });
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(callback, options);

// Observe the projects element
observer.observe(projectsElement);

// Get the modal

