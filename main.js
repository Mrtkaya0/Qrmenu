import { renderMenuItems, renderButtons } from "./ui.js";


//!html Gelenler
const menuList = document.querySelector('#menu-list');
const buttonArea = document.getElementById('buttons');

//! olay izleyicisi sayfanın yüklenmesini
document.addEventListener('DOMContentLoaded', () => {
    renderButtons(); 
    fetchMenu();
});

// global scopta tanımlama
let data;

// MEnüdeki verileri json dosyasına çeker
async function fetchMenu() {
    const res = await fetch('./db.json');
    data = await res.json();
    console.log(data);
    renderMenuItems(data.menu, menuList);
  }

//   tıklanılan kategori 
buttonArea.addEventListener('click', (e) => {
    if (e.target.id !== 'buttons') {
        renderButtons(e.target.innerText);
        // seçili kategori erişme

        const selected = e.target.dataset.category;

        if(selected === "all"){
            // filtreleme yapma

            renderMenuItems(data.menu, menuList);
        }else{

    //    kategoriye göre filtrele
        const filtred = data.menu.filter(
            (i) => i.category === selected);
// filtrelelen menuyü ekrana bas
        renderMenuItems(filtred,menuList)
    }
    }
});
