function randomNumber() {


    let min1 = parseInt(document.getElementById("min1").value);
    let max1 = parseInt(document.getElementById("max1").value);


    let randomNum = Math.random() * (max1 - min1) + min1;

    document.getElementById("p1").innerHTML = `Random Number: ${randomNum.toFixed()}`;

}