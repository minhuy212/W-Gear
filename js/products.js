const btn__login = document.querySelector('.btn-sign-in');
const btn__quit = document.querySelector('.btn__quit');
const btn__login_web = document.querySelector('.btn__login_web');
const btn__logout = document.querySelector('.header__user-account-signout');
const modal_signUp = document.querySelector('.auth-form__signup');
const modal_signIn = document.querySelector('.auth-form__signin');
const modal = document.querySelector('.modal'); 
const modal__overlay = document.querySelector('.modal__overlay');
const switch_signin = document.querySelector('.auth-form__switch-btn-signin');
const switch_signup = document.querySelector('.auth-form__switch-btn-signup');
const detail_form_key = document.querySelector('.detail-form__product.Keyboards');
const detail_form_mse = document.querySelector('.detail-form__product.Mouses');
const detail_form_hdp = document.querySelector('.detail-form__product.Headphones');
const header__list_items = document.querySelector('.header__items');  

var header__toggles = document.querySelectorAll('.header__toggle'); 
var detail_quits = document.querySelectorAll('.detail-form__quit');
var btn__see_detail_keys = document.querySelectorAll('.container__wrapper-products-list.Keyboards .container__wrapper-product-see'), i;
var btn__see_detail_mses = document.querySelectorAll('.container__wrapper-products-list.Mouses .container__wrapper-product-see');
var btn__see_detail_hdps = document.querySelectorAll('.container__wrapper-products-list.Headphones .container__wrapper-product-see');
var icon__favourites = document.querySelectorAll('.icon-favourite');
var icon__add_carts = document.querySelectorAll('.icon-add-cart');
var counter = 1;

var x, j, l, ll, selElmt, a, b, c;
x = document.getElementsByClassName('container__wrapper-selection');
l = x.length;
for (i = 0 ; i < l ; i++) {
    selElmt = x[i].getElementsByTagName("select")[0];
    ll = selElmt.length;

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmt.options[selElmt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1 ; j < ll ; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (i = 0 ; i < sl ; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0 ; k < yl ; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmt) {
    var y, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0 ; i < yl ; i++) {
        if (elmt == y[i]) {
            arrNo.push(i);
        }
        else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0 ; i < xl ; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
    document.addEventListener("click", closeAllSelect);
}

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
    document.querySelector('.sign-in').style.display = 'block';
    document.querySelector('.sign-out').style.display = 'none';
}
function logoutAccount() {
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-out').style.display = 'block';
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

modal__overlay.addEventListener('click', quitModal);
btn__quit.addEventListener('click', quitModal);
btn__login.addEventListener('click', showModal);
btn__login_web.addEventListener('click', chechkAccount);
btn__logout.addEventListener('click', logoutAccount);
switch_signin.addEventListener('click', showModalSignIn);
switch_signup.addEventListener('click', showModalSignUp);