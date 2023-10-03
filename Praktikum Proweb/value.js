function InputName() {
    let InputName = document.getElementById('InputName').value;   
    console.log(InputName);
}

// mengubah isi teks
// text content hanya bisa mengubah teks saja
let paragraf = document.getElementById('paragraf').textContent = "<b>Ini adalah paragraf baru</b>";

// inner html dapat menambah elemen html
let p = document.getElementById('p').innerHTML = "<b>Ini adalah paragraf baru</b>"

// Class list
// Dapat digunakan untuk mengubah css
let body = document.getElementById('body');
function darkMode() {
    if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode')
    } else {
        body.classList.add("dark-mode")
    }
}
