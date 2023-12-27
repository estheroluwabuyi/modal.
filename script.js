'use strict';

//Your code should be DRY as possible
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const openingModal = () =>{
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
};

const closingModal = function () {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', openingModal);
}

/*the closingModal is a function on its own, theres n need  for curly brackets or the function statement anymore. lets remember that the addEventListener accepts the listener and a 'funtion'. No need calling the function with '()', it wont work! We dont call it, we simply 'declare' or 'define' it.*/
   btnCloseModal.addEventListener('click', closingModal);
   overLay.addEventListener('click', closingModal);



/*btnCloseModal.addEventListener('click', () =>{
closingModal();
console.log(`I am a button :)`);
});

overLay.addEventListener('click', () =>{
    closingModal();
    console.log(`As an overlay, I hide pretty quickly ;)`);
}); */

//HANDLING KEYBOARD EVENTS (ESC) and the 'contains' keyword
/*Keyboard events are called global events because they do not happen on one specific element. For global ebvents, we usually listen on the whole document. Document is a big object that contains a bunch of method for all kinds of 'stuff'.
By using the addEventListener on the document, we are listening for events everwher, and no matter where theyhappen on the page they would always trigger the event handler that wde are going to specify.
There are 3 types of keyboard events: keydown, keyup, and keypress.
Keyup only happens when we lift our figer off the key.
Keypress is fired continously as we keep our finger on a certain key.
Keydown is fired as soon as we just press down the key.
The event we happen when we hit any key on the keyboard unless we specify a certain key.
*/
//To know which key was pressed, put a value in the parameter, when you cosoole log the pvalue of the parameter, you get like a whole object on the the key you pressed. Check the the obj for any property you want select and use your dotor bbracket notation to call out the value of the property you want. In this case, we just want to know the the key we pressed, hence '.key'

document.addEventListener('keydown', (e) =>{
    // console.log(e['key']);
  // console.log(e.key);

if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closingModal();
}
});





















/*const tammy = {
    name: 'TAMMY',
    lastName: 'SMITH',
    job: 'CODER',
    friends: ['MATT', 'SIM', 'TONY'],

    action: function () {
        return 'TAMMY is a boy';
    }
}

console.log(tammy['action']());
console.log(tammy.lastName); */