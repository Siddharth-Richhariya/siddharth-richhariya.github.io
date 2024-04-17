function calculate(i){
    var quantity = document.getElementById(i).value;
    var x = "rate"+i;
    var y = "price"+i;
    var rate = document.getElementById(x).textContent;
    var price = quantity * rate;
    price = price.toString() + ".00";
    document.getElementById(y).innerText = price;

    var ao = parseFloat(document.getElementById('price1').textContent) + parseFloat(document.getElementById('price2').textContent) + parseFloat(document.getElementById('price3').textContent) + parseFloat(document.getElementById('price4').textContent) + parseFloat(document.getElementById('price5').textContent) + parseFloat(document.getElementById('price6').textContent);
    bc = ao.toString() + ".00";
    console.log(ao);

    document.getElementById('subtotal').textContent = bc;

    to = ao + 50;
    to = to.toString() + ".00";

    document.getElementById('total').textContent = to
};

var ao = parseFloat(document.getElementById('price1').textContent) + parseFloat(document.getElementById('price2').textContent) + parseFloat(document.getElementById('price3').textContent) + parseFloat(document.getElementById('price4').textContent) + parseFloat(document.getElementById('price5').textContent) + parseFloat(document.getElementById('price6').textContent);
bc = ao.toString() + ".00";
console.log(ao);

document.getElementById('subtotal').textContent = bc;

to = ao + 50;
to = to.toString() + ".00";

document.getElementById('total').textContent = to