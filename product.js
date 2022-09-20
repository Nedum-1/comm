var image1 = document.querySelector('#image1')
var price = document.querySelector('#price')
var product_name = document.querySelector('#name')
var rating = document.querySelector('#rating')
var product_details = document.querySelector('#details')
var details = JSON.parse(localStorage.getItem('details'))
image1.src = details.image
price.innerHTML = details.amount
product_name.innerHTML = details.name
rating.innerHTML += details.rating
product_details.innerHTML += details.details

