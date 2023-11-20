'use strict'

function renderCarCards(){
  const main = document.querySelector('main')
 const strHTML = getCars().map((car)=>{
  var strHTML = `<article>
    <h3>${car.title}</h3>
    <img src="img/${car.title}.png">
    <h4>${car.id}</h4>`

    for (var i = 0; i < car.descLength; i++){
      strHTML+=`
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quis aliquid laboriosam, impedit iste porro nesciunt nulla.</p>
      `
    }
    strHTML +=`<h5>$${car.price}<h5>
    <button>Buy</button>
    </article>`
    return strHTML
  }).join('')
  main.innerHTML = strHTML
}