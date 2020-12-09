// Not as good of approach
// document.getElementById('cow-btn').addEventListener('click', cowSpeak)

const animals = {
  cow: {
    name: 'COW',
    sound: 'MOO',
    img: 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg'
  },
  chicken: {
    name: "CHICKEN",
    sound: "CLUCK CLUCK",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/0/FN_Pats-Beercan-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539876282.jpeg"
  },
  duck: {
    name: "DUCK",
    sound: "QUACK",
    img: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2025045530019-1"
  },
  tim: {
    name: "TIM",
    sound: "TACOS!!",
    img: "https://ca.slack-edge.com/T1GGQN1RU-ULW7838P3-e6f75287a6bd-512"
  }
}


function speak(name, sound) {
  document.getElementById('result').innerHTML = `<h3>THE ${name} SAYS ${sound}</h3>`
}
// function chickenSpeak() {
//   document.getElementById('result').innerHTML = "<h3>THE CHICKEN SAYS CLUCK CLUCK!</h3>"
// }
// function duckSpeak() {
//   document.getElementById('result').innerHTML = "<h3>THE DUCK SAYS QUACK</h3>"
// }
// function timSpeak() {
//   document.getElementById('result').innerHTML = "<h3>THE TIM SAYS TACOS!!</h3>"
// }
