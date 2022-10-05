var recommended = document.querySelector('#recommended');
var bestselling = document.querySelector('#bestselling')
var cart = document.querySelector('#cart-no')
var add = document.querySelector('.add')
var count = 0
if(count == 0){
    cart.style.display = "none"
}
cart.innerHTML = count
var products = [
    {
        image: "Img/login.jpg",
        name: "Samsung Galaxy S10",
        rating: "",
        amount: "$628.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
    {
        image: "Img/images (22).jpeg",
        name: "P47 wireless headset",
        rating: "",
        amount: "$150.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
    {
        image: "Img/images (23).jpeg",
        name: "Wireless computer keyboard",
        rating: "",
        amount: "$20.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
    {
        image: "Img/images (24).jpeg",
        name: "Oraimo Power Bank",
        rating: "",
        amount: "$52.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
    {
        image: "Img/images (25).jpeg",
        name: " Phillips Tash 406",
        rating: "",
        amount: "$100.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
    {
        image: "Img/images (26).jpeg",
        name: "Samsung Galaxy S10",
        rating: "",
        amount: "$628.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
    {
        image: "Img/login.jpg",
        name: "Samsung Galaxy S10",
        rating: "",
        amount: "$628.99",
        details: "A microphone and one-button remote allow you to control music, phone calls, and your digital assistant. Summon Siri or give Google Now a go any time you'd like. The JBL TUNE 500 features a single-sided, flat cable for a tangle-free design. This cable terminates in the standard 3.5mm headphone connection."
    },
]

put =(val)=>{
    var rec = document.createElement('div')
    recommended.appendChild(rec)
    rec.classList.add('rec')
    recommended.insertBefore(rec, recommended.childNodes[0])
    var link = document.createElement('a')
    rec.appendChild(link)
    link.href = "product.html"
    var img = document.createElement('img')
    img.src = val.image
    link.appendChild(img)
    var details = document.createElement('div')
    rec.appendChild(details)
    details.classList.add('details')
    var name = document.createElement('span')
    details.appendChild(name)
    name.classList.add('name')
    name.innerHTML = val.name
    var rating = document.createElement('span')
    rec.appendChild(rating)
    rating.classList.add('rating')
    rating.innerHTML = "Rating: " + val.rating
    var purchase = document.createElement('span')
    rec.appendChild(purchase)
    purchase.classList.add('purchase')
    var amount = document.createElement('span')
    purchase.appendChild(amount)
    amount.classList.add('amount')
    amount.innerHTML = val.amount
    var add = document.createElement('button')
    purchase.appendChild(add)
    add.classList.add('add')
    add.innerHTML = "Add to Cart"
    var order = false
    add.addEventListener('click', ()=>{
        if(add.innerHTML == "Add to Cart"){
            add.innerHTML = "Added"
            add.style.background = "gray" 
            count++
            cart.innerHTML = count
            cart.style.display = ""
            order = true
        }  
    })

    img.addEventListener('click', ()=>{
        var details = {
            name: val.name,
            image: val.image,
            rating: val.rating,
            amount: val.amount,
            details: val.details,
            order: order
        }
        localStorage.setItem('details', JSON.stringify(details))
    })
} 
products.forEach(put)

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


