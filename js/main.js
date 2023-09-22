const productsList = [];
const productName = document.querySelector('.item__name');
const productQuantity = document.querySelector('.item__quantity');
const productComment = document.querySelector('.item__comment');


function addItem() {
  const productItem = {
    name: productName.value,
    quantity: productQuantity.value,
    comment: productComment.value
  }
  productsList.push(productItem);

  const productsTable = document.querySelector('.products table.products__items');
  productsTable.innerHTML = '';

  productsList.forEach((item, index) => {
    productsTable.innerHTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>${item.comment}</td><td><button onclick="deleteItem(${index})">x</button></td></tr>`;
  });
  productName.value = '';
  productQuantity.value = '';
  productComment.value = '';

}

function showProducts() {
  const productsTable = document.querySelector('.products table.products__items');
  productsTable.innerHTML = '';
  
  productsList.forEach((item, index) => {
    productsTable.innerHTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>${item.comment}</td><td><button onclick="deleteItem(${index})">x</button></td></tr>`;
  })
}

function deleteItem(itemIndex){
  productsList.splice(itemIndex, 1);

  const productsTable = document.querySelector('.products table.products__items');
  productsTable.innerHTML = '';

  productsList.forEach((item, index) => {
    productsTable.innerHTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>${item.comment}</td><td><button onclick="deleteItem(${index})">x</button></td></tr>`;
  });
}