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
         yess = move-start
         yes = yess/2
        if(yess >= 0){
            front.style.marginLeft = yes+"vw"
            return;
        }
    })
    document.addEventListener('touchend', (e)=>{
        end = e.changedTouches[0].screenX;
        if(yes >= 30){
            front.style.transition = '0.2s'
            front.style.marginLeft = '100vw'
        }
        if(yes < 30){
            front.style.transition = '0.2s'
            front.style.marginLeft = '0vw'
        }
        setInterval(
            function(){
                if(front.style.marginLeft == '100vw'){
                    front.style.display = "none"
                }
            }
            ,100
        )
        
    })
    
}
test()