var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirm_password = document.querySelector('#confirm-password')
var submit = document.querySelector('#submit')

async function storedinfo(){
    const res = await fetch('http://localhost:3000/posts');

    const data = await res.json()

    return data;
}

var info = []

info = finfo()
async function finfo(){
    const res = await storedinfo()
    info = res

    username.addEventListener('input', ()=>{
        for(var i = 0; i < info.length; i++){
            if(username.value == info[i].username){
                document.getElementById('user').innerHTML = "Username already taken"
                return;
            }
        }
        document.getElementById('user').innerHTML = ""
    })

    email.addEventListener('input', ()=>{
        for(var i = 0; i < info.length; i++){
            if(email.value == info[i].email){
                document.getElementById('em').innerHTML = "This email already exists"
                document.getElementById('email').style.borderColor = "red"
                return;
            }
        }
        document.getElementById('em').innerHTML = ""
    })
}


console.log(info)
async function validate(){

var newinfo = {
    username: username.value,
    email: email.value,
    password: password.value
} 
    const res = await storedinfo()
    info = res
    info = [newinfo, ...info]

    const rest = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newinfo)
    })
}

