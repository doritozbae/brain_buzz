// const grid = document.querySelector('.items-grid');
const item = document.getElementById("item");
const itemName = document.querySelector('.name');
const description = document.querySelector('.description');
const price = document.querySelector('.price');
const img = document.querySelector('.item-img');

async function getData() { 
    let api = `https://dummyjson.com/products`;
    const res = await fetch(api);
    const data = await res.json(); 
    console.log(data.products[0]);
  
    let i=0;

    // const grid = document.querySelector('.items-grid');;
    // item.id = "item ";

    // for (let i = 0; i < data.length; i++) {

        if (!res.ok) {
        itemName.textContent = '';
        description.textContent = '';
        price.textContent = '';
        img.src = '';
        //    localStorage.setItem('city', curCity);
        return;
    }

        itemName.textContent =  data.products[i].title;
        description.textContent = data.products[i].description;
        price.textContent = `$ ${data.products[i].price}`;
        img.src = data.products[i].images[0];
        // localStorage.setItem('city', curCity);
        // document.body.appendChild(box);
    // }
    
   
 };

 getData() 