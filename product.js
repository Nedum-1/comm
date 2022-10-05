var image1 = document.querySelector('#image1');
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
var order = details.order

if(order == true){
    add.innerHTML = "Added"
    add.style.background = "gray" 
}

// SEARCH BAR 
var search_bar = document.querySelector('#search_bar')
var search = document.querySelector('.search')
var search_button = document.querySelector('#search_button')

search_button.addEventListener('click', ()=>{
    if(search.style.border == "2px solid green"){
        search.style.border = "none"
        search_bar.style.width = "0"
    }else{
        search.style.border = "2px solid green"
        search_bar.style.width = "calc(50vw - 40px)"
    }
       
})

