document.getElementById('ic_carro').addEventListener('click', function(event) {
    event.preventDefault();
    toggleCartDropdown();
});

document.getElementById('ic_buscar').addEventListener('click', function(event) {
    event.preventDefault();
    searchProducts();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var templateParams = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value
    };

    emailjs.send('ServicioTecnicoWalo', 'ProblemitasDeDown', templateParams)
        .then(function(response) {
           console.log('god', response.status, response.text);
           alert('se envio, god');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Algo hiciste mal capo');
        });
});

document.getElementById('buy-button').addEventListener('click', function() {
    buyItems();
});

function toggleCartDropdown() {
    var cartDropdown = document.getElementById('cart-dropdown');
    if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
        cartDropdown.style.display = 'block';
    } else {
        cartDropdown.style.display = 'none';
    }
}

function addToCart(productName, productPrice) {
    var cartItems = document.getElementById('cart-items');
    var newItem = document.createElement('li');
    newItem.textContent = productName + ' - $' + productPrice;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', function() {
        removeFromCart(newItem);
    });

    newItem.appendChild(deleteButton);
    cartItems.appendChild(newItem);
}

function removeFromCart(cartItem) {
    var cartItems = document.getElementById('cart-items');
    cartItems.removeChild(cartItem);
}

function searchProducts() {
    var input = document.getElementById('searcher_input').value.toLowerCase();
    var productNames = document.querySelectorAll('.s2-cookie');

    productNames.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        var productContainer = product.parentElement;

        if (productName.includes(input)) {
            productContainer.style.display = 'block';
        } else {
            productContainer.style.display = 'none';
        }
    });
}

function buyItems() {
    var cartItems = document.getElementById('cart-items');
    var items = cartItems.getElementsByTagName('li');
    var itemList = [];

    for (var i = 0; i < items.length; i++) {
        itemList.push(items[i].textContent.replace(' Remove', ''));
    }

    if (itemList.length > 0) {
        alert('You have purchased: ' + itemList.join(', '));
       
        cartItems.innerHTML = '';
    } else {
        alert('Your cart is empty.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cart-dropdown').style.display = 'none';
});

    document.getElementById('buy-button').addEventListener('click', function() {
        buyItems();
    });

    function buyItems() {
        var cartItems = document.getElementById('cart-items');
        var items = cartItems.getElementsByTagName('li');
        var itemList = [];
        
        for (var i = 0; i < items.length; i++) {
            itemList.push(items[i].textContent.replace(' Remove', ''));
        }

        if (itemList.length > 0) {
            alert('You have purchased: ' + itemList.join(', '));
          
            cartItems.innerHTML = '';
        } else {
            alert('Your cart is empty.');
        }
    }
