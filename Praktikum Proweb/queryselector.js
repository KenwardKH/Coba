// query selector (mengambil yang pertama saja)
// let text = document.querySelector('.text')
// text.textContent = "Text 1"

// query selector all
let items = document.querySelectorAll('.item, #item, span')
for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Item " + (i+1);
}
let a = items.length;
alert(a)