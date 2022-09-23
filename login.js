//LOGIN FUNCTION
validate = function(){
    event.preventDefault()
    location.href = 'shopage.html'
}
var front = document.getElementById('front')
var back = document.getElementById('back')

//SLIDE TO  (FOR MOBILE VIEW)
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
        move = e.changedTouches[0].screenX;
         dist = move-start
        if(dist >= 0){
            front.style.marginLeft = dist+"px"
            return;
        }
    })
    document.addEventListener('touchend', (e)=>{
        console.log()
        end = e.changedTouches[0].screenX;
        if(dist >= 90){
            front.style.transition = '0.2s'
            front.style.marginLeft = '100vw'
        }
        if(dist < 90){
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