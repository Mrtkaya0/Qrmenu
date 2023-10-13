import { buttonData } from './constants.js';

const buttonArea = document.getElementById("buttons");

//   ekrana menu elemanlarını basar
export function renderMenuItems(menuItems,menuList){
    // Dizide her elemanı döner
    // menu html oluştur
    // ekrana bas

    menuList.innerHTML = menuItems.map(
        (item) => `
        <a id="card" href="/detail.html?id=${item.id}" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
        <img class="rounded shadow img-fluid" 
        src="${item.img}"
        />
        <div>
            <div class="d-flex justify-content-between">
                <h5>${item.title}</h5>
                <p class="text-succses fw-bold"> 
                ${(item.price * 25
                    ).toFixed(2)} ₺ </p>
            </div>
            <p class="lead">
            ${item.desc.slice(0,60)+'...'} </p>
        </div>
    </a>
        `
    )
    .join(' ');
}

// ekrana butonları bas
export function renderButtons(activeText) {
    // her tıklandığında eski elemanları silmek için boş bir div 
    buttonArea.innerHTML = ' ';

    buttonData.forEach((btn) => { // Her bir düğme için döngüyü başlatın ve her bir düğme için bir işlem yapın
        //button elementi oluşturma
     const buttonEle = document.createElement('button');
     //class belirleme
      buttonEle.className = "btn btn-outline-dark";

    //   data id belirleme

    buttonEle.dataset.category = btn.value;
    //   aktif olan elemana koşul ekle 
    if(btn.text === activeText){
        buttonEle.classList.add('btn-dark','text-white');
    }
      //içindeki yazıyı belirleme
      buttonEle.innerText = btn.text; // btn.text kullanarak düğme metnini ayarlayın
      //butonu html ön yüze yollama
      buttonArea.appendChild(buttonEle);
    });
  }
