if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
const itemList = document.querySelector('.cart');
// const form = document.querySelector('#item');

let cart = {};
let itm = [];
let lll = [];
// let a=1;

const handleItem = function(itemName){
    const items = itemList.querySelectorAll('.cart-item');
    items.forEach(function(item){
        if(item.querySelector('.itm-no').textContent === itemName){
            item.querySelector('.del').addEventListener('click',function(){
                itemList.removeChild(item);
                delete cart[itemName];
                setLocalStorage('cart',cart);
            });
        }
    })
}

const getList = function(dict){
    itemList.innerHTML = "";
        for(const [key,value] of Object.entries(dict)){
            itemList.insertAdjacentHTML('beforeend',`<div class="cart-item"><div class="hidden"><span class="itm-no">${key}</span></div><div class="itm-img"><img src=${value[0]} alt=${value[1]}></div><div class="itm-des"><p>${value[1]}</p><span>Price: ${value[2]}</span><br /><a class='del'>remove</a></div><div class="itm-qun"><input type="number" value=${value[3]} min="1"></div><div class="itm-price"><span>${value[4]}</span></div></div></div>`);
            handleItem(key);
        };
}

const getLocalStorage = function(){
    const todoStorage = localStorage.getItem('cart');
    if (todoStorage === 'undefined' || todoStorage === null){
        cart = {};
    }
    else{
        cart = JSON.parse(todoStorage);
        getList(cart);
    }
}

const setLocalStorage = function(list,dict){
    localStorage.setItem(list, JSON.stringify(dict));
}

// getLocalStorage();

function addToCart(i){
    getLocalStorage();

    var img = "img"+i;
    var name = "nm"+i;
    var price = "pr"+i;
    var quantity = "qn"+i;

    var arr = lll.length;
    console.log(lll);
    console.log(arr);

    var x = arr+1;
    console.log(x)
    
    var itmimgsrc = document.getElementById(img).getAttribute('src');
    var itmname = document.getElementById(name).textContent;
    var itmprice = document.getElementById(price).textContent;
    itmpric = itmprice.replace('₹',"");
    var itmqun = document.getElementById(quantity).value;

    var pri = itmpric*itmqun;
    pri = "₹"+pri.toString();

    itm.push(itmimgsrc);
    itm.push(itmname);
    itm.push(itmprice);
    itm.push(itmqun);
    itm.push(pri);
    console.log(itm);

    cart[x] = itm;
     cart[a] = itm;
    setLocalStorage('cart',cart);
    getList(cart);
    console.log(cart);
    console.log(x);

     a = a+1;
    itm = [];

}