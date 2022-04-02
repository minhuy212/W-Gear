const btn__login = document.querySelector('.btn__login');
const btn__login_web = document.querySelector('.btn__login_web');
const btn__logout = document.querySelector('.header__user-account-signout');
const header_user_signin = document.querySelector('.header__user--signin');
const header_user_container = document.querySelector('.header__user--container');
const modal_signUp = document.querySelector('.auth-form__signup');
const modal_signIn = document.querySelector('.auth-form__signin');
const modal = document.querySelector('.modal'); 
const modal__overlay = document.querySelector('.modal__overlay');
const switch_signin = document.querySelector('.auth-form__switch-btn-signin');
const switch_signup = document.querySelector('.auth-form__switch-btn-signup');
const btn__see_more_key = document.querySelector('.container__wrapper-product-footing-button-see-more.key');
const show_more_key = document.querySelector('.container__wrapper-products-list.Keyboards');
const btn__see_more_mse = document.querySelector('.container__wrapper-product-footing-button-see-more.mse');
const show_more_mse = document.querySelector('.container__wrapper-products-list.Mouses');
const btn__see_more_hdp = document.querySelector('.container__wrapper-product-footing-button-see-more.hdp');
const show_more_hdp = document.querySelector('.container__wrapper-products-list.Headphones'); 
const detail_form_key = document.querySelector('.detail-form__product.Keyboards');
const detail_form_mse = document.querySelector('.detail-form__product.Mouses');
const detail_form_hdp = document.querySelector('.detail-form__product.Headphones');
const header__list_items = document.querySelector('.header__items');  

var header__toggles = document.querySelectorAll('.header__toggle'); 
var detail_quits = document.querySelectorAll('.detail-form__quit'); 
var btn__quit = document.querySelectorAll('.btn__quit');
var btn__see_detail_keys = document.querySelectorAll('.container__wrapper-products-list.Keyboards .container__wrapper-product-see'), i;
var btn__see_detail_mses = document.querySelectorAll('.container__wrapper-products-list.Mouses .container__wrapper-product-see');
var btn__see_detail_hdps = document.querySelectorAll('.container__wrapper-products-list.Headphones .container__wrapper-product-see');
var icon__favourites = document.querySelectorAll('.icon-favourite');
var icon__add_carts = document.querySelectorAll('.icon-add-cart');
var counter = 1;


setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

function showModal() {
    modal.classList.add('active');
    modal_signIn.classList.add('active');
}
function quitModal() {
    modal.classList.remove('active');
    modal_signUp.classList.remove('active');
    modal_signIn.classList.remove('active'); 
    detail_form_key.classList.remove('active');
    detail_form_mse.classList.remove('active');
    detail_form_hdp.classList.remove('active');
}
function showModalSignIn() {
    modal_signUp.classList.remove('active');
    modal_signIn.classList.add('active');
}
function showModalSignUp() {
    modal_signIn.classList.remove('active');
    modal_signUp.classList.add('active');
}
function chechkAccount() {
    quitModal();
    header_user_signin.classList.add('active');
    header_user_container.classList.remove('unactive');
}
function logoutAccount() {
    header_user_signin.classList.remove('active');
    header_user_container.classList.add('unactive');
} 
function showMoreKeyboards() {
    btn__see_more_key.classList.toggle('active');
    show_more_key.classList.add('active');
}
function showMoreMouses() {
    btn__see_more_mse.classList.toggle('active');
    show_more_mse.classList.add('active');
}
function showMoreHeadphones() {
    btn__see_more_hdp.classList.toggle('active');
    show_more_hdp.classList.add('active');
}

for (i = 0 ; i < btn__see_detail_keys.length ; ++i) {
    btn__see_detail_keys[i].addEventListener('click', function() {
        modal.classList.add('active');
        detail_form_key.classList.toggle('active');
    });
}

for (i = 0 ; i < btn__see_detail_mses.length ; ++i) {
    btn__see_detail_mses[i].addEventListener('click', function() {
        modal.classList.add('active');
        detail_form_mse.classList.toggle('active');
    });
}

for (i = 0 ; i < btn__see_detail_hdps.length ; ++i) {
    btn__see_detail_hdps[i].addEventListener('click', function() {
        modal.classList.add('active');
        detail_form_hdp.classList.toggle('active');
    });
}

for (i = 0 ; i < icon__favourites.length ; ++i) {
    icon__favourites[i].addEventListener('click', function() { 
        this.classList.toggle('active'); 
    });   
}

for (i = 0 ; i < icon__add_carts.length ; ++i) {
    icon__add_carts[i].addEventListener('click', function() { 
        this.classList.toggle('active'); 
    });   
}

for (i = 0 ; i < detail_quits.length ; ++i) {
    detail_quits[i].addEventListener('click', quitModal);
}

for (i = 0 ; i < header__toggles.length ; ++i) {
    header__toggles[i].addEventListener('click', function() {
        this.classList.toggle('active');
        header__list_items.classList.toggle('active'); 
    });
}
for (i = 0 ; i < btn__quit.length ; ++i) {
    btn__quit[i].addEventListener('click', quitModal);
}

// header__cart.addEventListener('click', function() {
//     header__cart_list.classList.toggle('acive');
// });
// header__user_account.addEventListener('click', function() {
//     header__user_account.classList.toggle('acive'); 
// });
// header__toggle.addEventListener('click', toggleActive);

btn__see_more_hdp.addEventListener('click', showMoreHeadphones);
btn__see_more_key.addEventListener('click', showMoreKeyboards);
btn__see_more_mse.addEventListener('click', showMoreMouses); 
modal__overlay.addEventListener('click', quitModal); 
btn__login.addEventListener('click', showModal);
btn__login_web.addEventListener('click', chechkAccount);
btn__logout.addEventListener('click', logoutAccount);
switch_signin.addEventListener('click', showModalSignIn);
switch_signup.addEventListener('click', showModalSignUp);