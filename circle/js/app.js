let btn = document.getElementById("btn")

btn.onclick = () => {
    let rr = document.getElementById("rr")
    let radius = parseFloat(rr.value)

    if(isNaN(radius)) {
        let resultElement = document.getElementById("result")
        resultElement.innerHTML = "Add Number"
    }else{
        let area = Math.PI * Math.pow(radius,2)
        let resultElement = document.getElementById("result")
        resultElement.innerHTML = `Area: ${area.toFixed(2)}`

    }
}