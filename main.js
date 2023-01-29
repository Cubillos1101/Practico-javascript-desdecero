const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector ('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrritoAside);
ProductDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle ('inactive');
}

function toggleCarrritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

productList.push({
    name:'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name:'Iphone',
    price: '520',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name:'Macbook Pro',
    price: '1200',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 '
});

function renderProducts(practic){
    for (product of practic){
       
        const productCard = document.createElement('div');
        const productImg= document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');    
        const productPrice = document.createElement('div');
        const productName = document.createElement('div');
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');

        productCard.classList.add('product-card');
        
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        productInfo.classList.add('product-info');
    
        productPrice.innerText = '$' + product.price;
    
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
   
renderProducts(productList);
