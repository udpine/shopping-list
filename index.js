const addToCartButton = document.getElementsByClassName('addToCartButton')
const itemsForSale = document.getElementsByTagName('li')
let total = 0
// const availableItems = ["beans", "rice", "milk", "eggs", "chicken", "beef", "coffee", "tea", "detergent", "toilet paper", "gum"]

let shoppingCart = [{"item": "beans", "quantity": 0},
                    {"item": "rice", "quantity": 0},
                    {"item": "milk", "quantity": 0},
                    {"item": "eggs", "quantity": 0},
                    {"item": "chicken", "quantity": 0},
                    {"item": "beef", "quantity": 0},
                    {"item": "coffee", "quantity": 0},
                    {"item": "tea", "quantity": 0},
                    {"item": "detergent", "quantity": 0},
                    {"item": "toilet paper", "quantity": 0},
                    {"item": "gum", "quantity": 0}]

let shoppingCartPrices = [{"item": "beans", "quantity": 0, "price": 1},
                    {"item": "rice", "quantity": 0, "price": 2},
                    {"item": "milk", "quantity": 0, "price": 4},
                    {"item": "eggs", "quantity": 0, "price": 3},
                    {"item": "chicken", "quantity": 0, "price": 8},
                    {"item": "beef", "quantity": 0, "price": 8},
                    {"item": "coffee", "quantity": 0, "price": 5},
                    {"item": "tea", "quantity": 0, "price": 5},
                    {"item": "detergent", "quantity": 0, "price": 11},
                    {"item": "toilet paper", "quantity": 0, "price": 13},
                    {"item": "gum", "quantity": 0, "price": 1}]



let shoppingCartText = document.getElementById('shoppingCart')
let cartTotal = document.getElementById('cartTotal')

//build handler for adding objects to shoppingCart
for(let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", () => {
        let itemForSale = itemsForSale[i].innerText     //getting the text of the <li> item
        let item = itemForSale.replace(' add to cart', '')  //stripping ' add to cart'

        // shoppingCartText.innerText = shoppingCart.to

        if(item == shoppingCart[i].item) {
            shoppingCart[i].quantity += 1
}
    })

}

// display the shopping cart object to the webpage
for(let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
        if(shoppingCart[i].quantity) {
            var myJSON = JSON.stringify(shoppingCart)
            myJSON = myJSON.replace(/\[?{/g, ' ').replace(/"/g, ' ').replace(/}./g, ' ').replace(/item/g, '<b>ITEM</b>').replace(/quantity/g, '<b>QUANTITY<b>').replace(/([\d])/g, "$1 <br>_<br>").replace(/,/g, '<br>')
            shoppingCartText.innerHTML = myJSON
            
        }
    })
}

//build handler for prices
for(let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
        if(shoppingCartPrices[i].price) {
            total += shoppingCartPrices[i].price
            cartTotal.innerHTML = `You owe a total of $${total}!<br><br>
            <button type="submit" id="checkoutButton">Pay Now</button>
            `
            let payNow = document.getElementById('checkoutButton')
            payNow.addEventListener('click', () => {
                alert(`Thank you for shopping at My Online Shop. The amount of $${total} has been paid.`)
            })
        }
    })
}
