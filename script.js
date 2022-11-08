/*
    Fetch() method: It is defined on the window object, which we can
    perform request.
    This Methos will return promise...
    Promise will either be fullfilled of rejected
*/

fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1 = "";
    completedata.map((values)=>{
        data1+=
    `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images" />
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
      </div>`
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})