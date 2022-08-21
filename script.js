let form = document.querySelector ('#form');
let list = document.querySelector('#list');
let item = document.querySelector ('#item');

form.addEventListener ('submit', e => {
    e.preventDefault ();
    list.innerHTML += '<li>' + item.value + '</li>';
    store ();
    item.value = '';
  },
  false
);

list.addEventListener ('click', e => {
    var t = e.target;
    if (t.classList.contains ('checked')) {
      t.parentNode.removeChild (t);
    } else {
      t.classList.add ('checked');
    }
    store ();
  },
  false
);

store = () => {
  window.localStorage.myitems = list.innerHTML;
}

getValues = () => {
  var storedValues = window.localStorage.myitems;
  if (!storedValues) {
    list.innerHTML =
      '<li>Make a to do list</li>' +
      '<li>Check off first thing on the to do list</li>' +
      '<li>Change functions over to ES6</li>' +
      '<li>Brew coffee</li>'
  } else {
    list.innerHTML = storedValues;
  }
}
getValues ();


