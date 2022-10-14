function roll()
{
    let number1 = Number(document.getElementById('number1').value)
    document.getElementById('result').value = Math.floor(Math.random() * number1) + 1;  
}

