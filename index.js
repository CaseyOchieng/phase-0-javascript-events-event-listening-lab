function addEventListener(){
    const input =documentById("button")

    function clickAlert(){
        alert("I was clicked!")
    }
    input.addEventListener("click",clickAlert)
}