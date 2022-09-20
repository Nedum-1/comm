validate = function(){
    event.preventDefault()
    location.href = 'shopage.html'
}
var front = document.getElementById('front')
var back = document.getElementById('back')

test =()=>{
    var start = 0
    var move
    var end = 0
    document.addEventListener('touchstart', (e)=>{
        start = e.changedTouches[0].screenX;
        back.style.display = "block"
    })
    document.addEventListener('touchmove', (e)=>{
        move = e.changedTouches[0].screenX;
        var yess = move-start
        if(yess >= 0){
            front.style.marginLeft = yess+"vw"
            return;
        }
    })
    document.addEventListener('touchend', (e)=>{
        end = e.changedTouches[0].screenX;
        if(front.style.marginLeft >= 30+'vw'){
            front.style.transition = '0.2s'
            front.style.marginLeft = '100vw'
        }else{
            front.style.transition = '0.2s'
            front.style.marginLeft = '0vw'
        }
    })
    
}
test()