// Not as good of approach
// document.getElementById('cow-btn').addEventListener('click', cowSpeak)

// NOTE Collection of animals by name and the objects to represent them
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
  },
  pig: {
    name: "PIG",
    sound: "KERMIE",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/MissPiggy.jpg/220px-MissPiggy.jpg"
  }
}

// #region
// // alternative with array
// let arrAnimals = [{
//   name: 'COW',
//   sound: 'MOO',
//   img: 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg'
// }, {
//   name: "CHICKEN",
//   sound: "CLUCK CLUCK",
//   img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/0/FN_Pats-Beercan-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539876282.jpeg"
// }, {
//   name: "DUCK",
//   sound: "QUACK",
//   img: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2025045530019-1"
// }, {
//   name: "TIM",
//   sound: "TACOS!!",
//   img: "https://ca.slack-edge.com/T1GGQN1RU-ULW7838P3-e6f75287a6bd-512"
// }, {
//   name: "PIG",
//   sound: "KERMIE",
//   img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/MissPiggy.jpg/220px-MissPiggy.jpg"
// }]

// function speakArr(name) {
//   let animal = arrAnimals.find(a => a.name.toLowerCase() == name.toLowerCase())
//   if (!animal) { return }
//   document.getElementById('result').innerHTML = `
//     <h3> THE ${animal.name} SAYS ${animal.sound}</h3>
//     <img src="${animal.img}" alt="animal image">
// `
// }
// #endregion


// SPEAK takes in the animals name as a string
function speak(name) {
  // access the animals dictionary at that name
  let animal = animals[name]
  // update screen with that animal info
  document.getElementById('result').innerHTML = `
      <h3> THE ${animal.name} SAYS ${animal.sound}</h3>
      <img src="${animal.img}" alt="animal image">`
}

function random() {
  // generate a random number within range 0 - however many props on animals
  document.getElementById('result').innerHTML = /*html*/`
  <marquee direction="right">
    loading...
  <marquee>
  `
  setTimeout(() => {
    let animalNames = Object.keys(animals)
    let index = Math.floor(Math.random() * animalNames.length);
    // invoke speak pass it the animal at the random index
    speak(animalNames[index])
  }, 5000)
}

function drawButtons() {
  // get all the names off the dictionary
  let animalNames = Object.keys(animals)
  let buttons = ''
  // create the button html for each animal
  animalNames.forEach(animal => {
    buttons += `<button type="button" class="btn btn-outline-primary mx-1" onclick="speak('${animal}')">${animal.toUpperCase()}</button>`
  })
  // render to the page
  document.getElementById('buttons').innerHTML = buttons + `<button type="button" class="btn btn-outline-danger mx-1" onclick="random()">Random</button>`
}

drawButtons();

// function chickenSpeak() {
//   document.getElementById('result').innerHTML = "<h3>THE CHICKEN SAYS CLUCK CLUCK!</h3>"
// }
// function duckSpeak() {
//   document.getElementById('result').innerHTML = "<h3>THE DUCK SAYS QUACK</h3>"
// }
// function timSpeak() {
//   document.getElementById('result').innerHTML = "<h3>THE TIM SAYS TACOS!!</h3>"
// }
