const card =  {
    id: 1,
    name: "Titulo de la nueva card",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  };
  const $cards = document.querySelector('#cards');
  console.log(cards);
  
//   creamos los elementos de la card

const $div = document.createElement('div');
const $div_header = document.createElement('div');
const $card_title = document.createElement('h2');
const $card_body = document.createElement('div');
const $card_img = document.createElement('img');
const $card_paragraph = document.createElement('p');
const $button = document.createElement('a');
const $button_span = document.createElement('span');
const $button_icon = document.createElement('i');


const array = [...$cards.children];
array.map(item => {
    console.log(item);
    
})








