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
        front.style.transition = '0s'
    })
    document.addEventListener('touchmove', (e)=>{
        width = screen.width*0.3
        move = e.changedTouches[0].screenX;
         yess = move-start
        if(yess >= 0){
            front.style.marginLeft = yess+"px"
            return;
        }
    })
    document.addEventListener('touchend', (e)=>{
        end = e.changedTouches[0].screenX;
        if(front.style.marginLeft > width+'px'){
            front.style.transition = '0.2s'
            front.style.marginLeft = '100vw'
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