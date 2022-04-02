const header__list_items = document.querySelector('.header__items');  

var header__toggles = document.querySelectorAll('.header__toggle'); 

for (i = 0 ; i < header__toggles.length ; ++i) {
    header__toggles[i].addEventListener('click', function() {
        this.classList.toggle('active');
        header__list_items.classList.toggle('active');
    });
}