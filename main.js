var helloA, helloB;
var clickNumber = 0;
var cardNumber, cardNumber2;

function clickCard(hello) {
  hello.style.opacity = '1';
}

function checkCard(helloA,cardNumber) {
  if (clickNumber === 0) {
    cardNumber2 = cardNumber;
    clickNumber = 1;
    helloB = helloA;
  } else if (clickNumber === 1) {
    if (cardNumber === cardNumber2) {
      console.log(helloA);
      console.log(helloB);
      document.getElementById(helloA).style.opacity = '1';
      document.getElementById(helloB).style.opacity = '1';
      clickNumber = 0
    } else {
      setTimeout(()=>{
        console.log(helloA);
        console.log(helloB);
        document.getElementById(helloA).style.opacity = '0';
        document.getElementById(helloB).style.opacity = '0';
        clickNumber = 0
      },500)
    }
  }
}

function randomCard() {
  var section1 = document.querySelector('#section1');
  var randomNumber1 = Math.floor(Math.random() * 24) + 1;
  var randomNumber2 = Math.floor(Math.random() * 24) + 1;
  var randomNumber3 = Math.floor(Math.random() * 24) + 1;
  var randomNumber4 = Math.floor(Math.random() * 24) + 1;
  var randomNumber5 = Math.floor(Math.random() * 24) + 1;
  var randomNumber6 = Math.floor(Math.random() * 24) + 1;
  var randomNumber7 = Math.floor(Math.random() * 24) + 1;
  var randomNumber8 = Math.floor(Math.random() * 24) + 1;
  var randomNumber9 = Math.floor(Math.random() * 24) + 1;
  var randomNumber10 = Math.floor(Math.random() * 24) + 1;
  var randomNumber11 = Math.floor(Math.random() * 24) + 1;
  var randomNumber12 = Math.floor(Math.random() * 24) + 1;
  var randomNumber13 = Math.floor(Math.random() * 24) + 1;
  var randomNumber14 = Math.floor(Math.random() * 24) + 1;
  var randomNumber15 = Math.floor(Math.random() * 24) + 1;
  var randomNumber16 = Math.floor(Math.random() * 24) + 1;
  var randomNumber17 = Math.floor(Math.random() * 24) + 1;
  var randomNumber18 = Math.floor(Math.random() * 24) + 1;
  var randomNumber19 = Math.floor(Math.random() * 24) + 1;
  var randomNumber20 = Math.floor(Math.random() * 24) + 1;
  var randomNumber21 = Math.floor(Math.random() * 24) + 1;
  var randomNumber22 = Math.floor(Math.random() * 24) + 1;
  var randomNumber23 = Math.floor(Math.random() * 24) + 1;
  var randomNumber24 = Math.floor(Math.random() * 24) + 1;

  var card1 = document.getElementById("img" + randomNumber1);
  var card2 = document.getElementById("img" + randomNumber2);
  var card3 = document.getElementById("img" + randomNumber3);
  var card4 = document.getElementById("img" + randomNumber4);
  var card5 = document.getElementById("img" + randomNumber5);
  var card6 = document.getElementById("img" + randomNumber6);
  var card7 = document.getElementById("img" + randomNumber7);
  var card8 = document.getElementById("img" + randomNumber8);
  var card9 = document.getElementById("img" + randomNumber9);
  var card10 = document.getElementById("img" + randomNumber10);
  var card11 = document.getElementById("img" + randomNumber11);
  var card12 = document.getElementById("img" + randomNumber12);
  var card13 = document.getElementById("img" + randomNumber13);
  var card14 = document.getElementById("img" + randomNumber14);
  var card15 = document.getElementById("img" + randomNumber15);
  var card16 = document.getElementById("img" + randomNumber16);
  var card17 = document.getElementById("img" + randomNumber17);
  var card18 = document.getElementById("img" + randomNumber18);
  var card19 = document.getElementById("img" + randomNumber19);
  var card20 = document.getElementById("img" + randomNumber20);
  var card21 = document.getElementById("img" + randomNumber21);
  var card22 = document.getElementById("img" + randomNumber22);
  var card23 = document.getElementById("img" + randomNumber23);
  var card24 = document.getElementById("img" + randomNumber24);

  section1.insertBefore(card1, card2);
  section1.insertBefore(card3, card4);
  section1.insertBefore(card5, card6);
  section1.insertBefore(card7, card8);
  section1.insertBefore(card9, card10);
  section1.insertBefore(card11, card12);
  section1.insertBefore(card13, card14);
  section1.insertBefore(card15, card16);
  section1.insertBefore(card17, card18);
  section1.insertBefore(card19, card20);
  section1.insertBefore(card21, card22);
  section1.insertBefore(card23, card24);
}

function start(){
  document.getElementById('p1').innerHTML='3'
  setTimeout(()=>{
      document.getElementById('p1').innerHTML='2'
      setTimeout(()=>{
        document.getElementById('p1').innerHTML='1'
        setTimeout(()=>{
          document.getElementById('p1').innerHTML='GO!'
          setTimeout(()=>{
            document.getElementById('start').style.opacity='0';
            randomCard();
          },500)
      },1000)
    },1000)
  },1000)
}