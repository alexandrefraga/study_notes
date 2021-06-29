let count=10
start()
function start(){
    if( (count-1) >= 0 ){
        console.log(count)
        count = count - 1
        setTimeout(start, 1000)
    }else{
        console.log('Acabou o tempo')
    }
}
