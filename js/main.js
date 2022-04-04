// ĐĂNG NHẬP
function signIn1() {
    document.getElementsByClassName('modal')[0].classList.add('active');
    document.getElementById('sign-in').classList.add('active');
}

function signIn2() {
    quitModal();
    document.getElementsByClassName('sign-in')[0].style.display = 'block';
    document.getElementsByClassName('sign-out')[0].style.display = 'none';
}

// ĐĂNG XUẤT
function signOut() {
    document.getElementsByClassName('sign-in')[0].style.display = 'none';
    document.getElementsByClassName('sign-out')[0].style.display = 'block';
}

// CHUYỂN ĐĂNG NHẬP -> ĐĂNG KÝ, ĐĂNG KÝ -> ĐĂNG NHẬP
function switchToSignUp() {
    document.getElementById('sign-in').classList.remove('active');
    document.getElementById('sign-up').classList.add('active');
}

function switchToSignIn() {
    document.getElementById('sign-up').classList.remove('active');
    document.getElementById('sign-in').classList.add('active');
}

// THOÁT MODAL
function quitModal() {
    document.getElementById('modal').classList.remove('active');
    document.getElementById('sign-in').classList.remove('active');
    document.getElementById('sign-up').classList.remove('active');
}

// HIỂN THỊ DANH SÁCH HEADER
document.getElementsByClassName('header__toggle')[0].addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementsByClassName('header__items')[0].classList.toggle('active');
})

// SLIDES
function slides() { 
    var counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 2300);
}

// RANDON DATE
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// SO SÁNH
function priceLessThan(a, b) {
    if (a.length < b.length) {
        return true; 
    }
    if (a.length == b.length) { 
        return a < b;
    } 
}

// TẢI DANH SÁCH SẢN PHẨM
var keyboards = [
    {
        brand: "Leopold",
        img: "\"./img/Produces/Keyboards/Leopold/Leopold FC650MDS Bluetooth Blue Grey.jpg\"",
        name: "Bàn phím cơ Leopold FC650MDS Bluetooth Blue Grey",
        sale_price: "2,970,000đ",
        normal_price: "", 
        date: new Date(2015, 1, 1),        
        sold: 12354,
    },
    {
        brand: "iKBC",
        img: "\"./img/Produces/Keyboards/iKBC/iKBC CD108 PD.jpg\"",
        name: "Bàn phím cơ iKBC CD108 PD Red switch",
        sale_price: "1,750,000đ",
        normal_price: "1,980,000đ", 
        date: new Date(2015, 2, 1),        
        sold: 1544,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Keyboards/Razer/Razer Blackwidow V3 Tenkeyless Yellow switch.jpg\"",
        name: "Bàn phím cơ Razer Blackwidow V3 Tenkeyless",
        sale_price: "2,989,000đ",
        normal_price: "", 
        date: new Date(2017, 5, 1),        
        sold: 1254,
    },
    {
        brand: "Akko",
        img: "\"./img/Produces/Keyboards/Akko/akko 3084 v2 ASA Blackpink.jpg\"",
        name: "Bàn phím cơ AKKO 3084 v2 ASA – Black Pink",
        sale_price: "1,690,000đ",
        normal_price: "1,750,000đ", 
        date: new Date(2016, 9, 15),        
        sold: 678,
    },
    {
        brand: "FL-Esports",
        img: "\"./img/Produces/Keyboards/Fl-Esport/FL-Esports CMK87 Polar Night Black Kailh Box Cool Mint switch.png\"",
        name: "Bàn phím cơ FL-Esports CMK87 Polar Night Black Kailh Box",
        sale_price: "2,989,000đ",
        normal_price: "3,288,000đ", 
        date: new Date(2018, 12, 1),        
        sold: 756,
    },
    {
        brand: "Leopold",
        img: "\"./img/Produces/Keyboards/Leopold/Leopold FC650MDS Bluetooth Blue Grey.jpg\"",
        name: "Bàn phím cơ Leopold FC650MDS Bluetooth Blue Grey",
        sale_price: "2,270,000đ",
        normal_price: "", 
        date: new Date(2019, 01, 12),        
        sold: 483,
    },
    {
        brand: "iKBC",
        img: "\"./img/Produces/Keyboards/iKBC/iKBC CD108 PD.jpg\"",
        name: "Bàn phím cơ iKBC CD108 PD Red switch",
        sale_price: "1,650,000đ",
        normal_price: "1,980,000đ", 
        date: new Date(2020, 5, 1),        
        sold: 815,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Keyboards/Razer/Razer Blackwidow V3 Tenkeyless Yellow switch.jpg\"",
        name: "Bàn phím cơ Razer Blackwidow V3 Tenkeyless",
        sale_price: "2,289,000đ",
        normal_price: "", 
        date: new Date(2017, 4, 4),        
        sold: 650,
    },
    {
        brand: "Akko",
        img: "\"./img/Produces/Keyboards/Akko/akko 3084 v2 ASA Blackpink.jpg\"",
        name: "Bàn phím cơ AKKO 3084 v2 ASA – Black Pink",
        sale_price: "1,490,000đ",
        normal_price: "1,850,000đ", 
        date: new Date(2021, 1, 1),        
        sold: 742,
    },
    {
        brand: "FL-Esports",
        img: "\"./img/Produces/Keyboards/Fl-Esport/FL-Esports CMK87 Polar Night Black Kailh Box Cool Mint switch.png\"",
        name: "Bàn phím cơ FL-Esports CMK87 Polar Night Black Kailh Box",
        sale_price: "2,189,000đ",
        normal_price: "3,288,000đ", 
        date: new Date(2022, 5, 1),        
        sold: 123,
    },
    {
        brand: "Leopold",
        img: "\"./img/Produces/Keyboards/Leopold/Leopold FC650MDS Bluetooth Blue Grey.jpg\"",
        name: "Bàn phím cơ Leopold FC650MDS Bluetooth Blue Grey",
        sale_price: "2,570,000đ",
        normal_price: "", 
        date: new Date(2015, 8, 1),        
        sold: 1354,
    },
    {
        brand: "iKBC",
        img: "\"./img/Produces/Keyboards/iKBC/iKBC CD108 PD.jpg\"",
        name: "Bàn phím cơ iKBC CD108 PD Red switch",
        sale_price: "1,250,000đ",
        normal_price: "1,980,000đ", 
        date: new Date(2016, 10, 21),        
        sold: 1234,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Keyboards/Razer/Razer Blackwidow V3 Tenkeyless Yellow switch.jpg\"",
        name: "Bàn phím cơ Razer Blackwidow V3 Tenkeyless",
        sale_price: "3,089,000đ",
        normal_price: "", 
        date: new Date(2018, 6, 23),        
        sold: 487,
    },
    {
        brand: "Akko",
        img: "\"./img/Produces/Keyboards/Akko/akko 3084 v2 ASA Blackpink.jpg\"",
        name: "Bàn phím cơ AKKO 3084 v2 ASA – Black Pink",
        sale_price: "1,690,000đ",
        normal_price: "1,750,000đ", 
        date: new Date(2019, 9, 11),        
        sold: 547,
    },
    {
        brand: "FL-Esports",
        img: "\"./img/Produces/Keyboards/Fl-Esport/FL-Esports CMK87 Polar Night Black Kailh Box Cool Mint switch.png\"",
        name: "Bàn phím cơ FL-Esports CMK87 Polar Night Black Kailh Box",
        sale_price: "3,000,000đ",
        normal_price: "3,288,000đ", 
        date: new Date(2022, 2, 1),        
        sold: 354,
    },
    {
        brand: "Leopold",
        img: "\"./img/Produces/Keyboards/Leopold/Leopold FC650MDS Bluetooth Blue Grey.jpg\"",
        name: "Bàn phím cơ Leopold FC650MDS Bluetooth Blue Grey",
        sale_price: "2,370,000đ",
        normal_price: "", 
        date: new Date(2018, 1, 30),        
        sold: 823,
    },
    {
        brand: "iKBC",
        img: "\"./img/Produces/Keyboards/iKBC/iKBC CD108 PD.jpg\"",
        name: "Bàn phím cơ iKBC CD108 PD Red switch",
        sale_price: "1,780,000đ",
        normal_price: "1,980,000đ", 
        date: new Date(2020, 4, 23),        
        sold: 681,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Keyboards/Razer/Razer Blackwidow V3 Tenkeyless Yellow switch.jpg\"",
        name: "Bàn phím cơ Razer Blackwidow V3 Tenkeyless",
        sale_price: "2,940,000đ",
        normal_price: "", 
        date: new Date(2021, 1, 21),        
        sold: 561,
    },
    {
        brand: "Akko",
        img: "\"./img/Produces/Keyboards/Akko/akko 3084 v2 ASA Blackpink.jpg\"",
        name: "Bàn phím cơ AKKO 3084 v2 ASA – Black Pink",
        sale_price: "1,690,000đ",
        normal_price: "1,900,000đ", 
        date: new Date(2017, 11, 15),        
        sold: 256,
    },
    {
        brand: "FL-Esports",
        img: "\"./img/Produces/Keyboards/Fl-Esport/FL-Esports CMK87 Polar Night Black Kailh Box Cool Mint switch.png\"",
        name: "Bàn phím cơ FL-Esports CMK87 Polar Night Black Kailh Box",
        sale_price: "2,750,000đ",
        normal_price: "3,000,000đ", 
        date: new Date(2021, 11, 14),        
        sold: 151,
    },
];
var tempkeyboards = keyboards;

var mouses = [
    {
        brand: "Asus",
        img: "\"./img/Produces/Mouses/Asus/ASUS ROG Keris.jpg\"",
        name: "Chuột ASUS ROG Keris black wire",
        sale_price: "1,250,000đ",
        normal_price: "1,500,000đ", 
        date: new Date(2019,8,6),
        sold: 456,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G304 Lightspeed Wireless White.jpg\"",
        name: "Chuột Logitech G340 Lightspeed Wireless",
        sale_price: "849,000đ",
        normal_price: "", 
        date: new Date(2021, 12, 7),
        sold: 123,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Mouses/Razer/Razer DeathAdder Essential White.jpg\"",
        name: "Chuột Razer DeathAdder Essential White",
        sale_price: "599,000đ",
        normal_price: "999,000đ", 
        date: new Date(2022, 2, 8),
        sold: 438,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G502 HERO.jpeg\"",
        name: "Chuột Logitech G502 HERO Black Wired",
        sale_price: "1,049,000đ",
        normal_price: "1,499,000đ", 
        date: new Date(2018, 7, 18),
        sold: 675,
    },
    {
        brand: "SteelSeries",
        img: "\"./img/Produces/Mouses/SteelSeries/SteelSeries Rival 110 Grey.jpg\"",
        name: "Chuột SteelSeries Rival 110 Grey Wired",
        sale_price: "999,000đ",
        normal_price: "", 
        date: new Date(2017),
        sold: 856,
    },
    {
        brand: "Asus",
        img: "\"./img/Produces/Mouses/Asus/ASUS ROG Keris.jpg\"",
        name: "Chuột ASUS ROG Keris black wire",
        sale_price: "1,110,000đ",
        normal_price: "1,600,000đ", 
        date: new Date(2016,7,23),
        sold: 5461,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G304 Lightspeed Wireless White.jpg\"",
        name: "Chuột Logitech G340 Lightspeed Wireless",
        sale_price: "800,000đ",
        normal_price: "", 
        date: new Date(2021, 2, 27),
        sold: 423,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Mouses/Razer/Razer DeathAdder Essential White.jpg\"",
        name: "Chuột Razer DeathAdder Essential White",
        sale_price: "499,000đ",
        normal_price: "1,099,000đ", 
        date: new Date(2017, 1, 28),
        sold: 984,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G502 HERO.jpeg\"",
        name: "Chuột Logitech G502 HERO Black Wired",
        sale_price: "1,249,000đ",
        normal_price: "1,499,000đ", 
        date: new Date(2018, 7, 18),
        sold: 788,
    },
    {
        brand: "SteelSeries",
        img: "\"./img/Produces/Mouses/SteelSeries/SteelSeries Rival 110 Grey.jpg\"",
        name: "Chuột SteelSeries Rival 110 Grey Wired",
        sale_price: "1,399,000đ",
        normal_price: "", 
        date: new Date(2017, 12, 31),
        sold: 1023,
    },
    {
        brand: "Asus",
        img: "\"./img/Produces/Mouses/Asus/ASUS ROG Keris.jpg\"",
        name: "Chuột ASUS ROG Keris black wire",
        sale_price: "1,300,000đ",
        normal_price: "1,599,000đ", 
        date: new Date(2021,8,6),
        sold: 498,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G304 Lightspeed Wireless White.jpg\"",
        name: "Chuột Logitech G340 Lightspeed Wireless",
        sale_price: "749,000đ",
        normal_price: "1,000,000đ", 
        date: new Date(2021, 12, 7),
        sold: 333,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Mouses/Razer/Razer DeathAdder Essential White.jpg\"",
        name: "Chuột Razer DeathAdder Essential White",
        sale_price: "799,000đ",
        normal_price: "999,000đ", 
        date: new Date(2020, 11, 18),
        sold: 438,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G502 HERO.jpeg\"",
        name: "Chuột Logitech G502 HERO Black Wired",
        sale_price: "1,000,000đ",
        normal_price: "1,499,000đ", 
        date: new Date(2019, 7, 1),
        sold: 671,
    },
    {
        brand: "SteelSeries",
        img: "\"./img/Produces/Mouses/SteelSeries/SteelSeries Rival 110 Grey.jpg\"",
        name: "Chuột SteelSeries Rival 110 Grey Wired",
        sale_price: "799,000đ",
        normal_price: "", 
        date: new Date(2017, 5, 23),
        sold: 986,
    },
    {
        brand: "Asus",
        img: "\"./img/Produces/Mouses/Asus/ASUS ROG Keris.jpg\"",
        name: "Chuột ASUS ROG Keris black wire",
        sale_price: "1,250,000đ",
        normal_price: "1,500,000đ", 
        date: new Date(2019, 1, 23),
        sold: 214,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G304 Lightspeed Wireless White.jpg\"",
        name: "Chuột Logitech G340 Lightspeed Wireless",
        sale_price: "849,000đ",
        normal_price: "", 
        date: new Date(2020, 12, 7),
        sold: 487,
    },
    {
        brand: "Razer",
        img: "\"./img/Produces/Mouses/Razer/Razer DeathAdder Essential White.jpg\"",
        name: "Chuột Razer DeathAdder Essential White",
        sale_price: "799,000đ",
        normal_price: "999,000đ", 
        date: new Date(2022, 4, 8),
        sold: 46,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Mouses/Logitech/Logitech G502 HERO.jpeg\"",
        name: "Chuột Logitech G502 HERO Black Wired",
        sale_price: "999,000đ",
        normal_price: "1,499,000đ", 
        date: new Date(2019, 7, 18),
        sold: 415,
    },
    {
        brand: "SteelSeries",
        img: "\"./img/Produces/Mouses/SteelSeries/SteelSeries Rival 110 Grey.jpg\"",
        name: "Chuột SteelSeries Rival 110 Grey Wired",
        sale_price: "1,199,000đ",
        normal_price: "", 
        date: new Date(2017, 6, 21),
        sold: 712,
    },
];
var tempmouses = mouses;

var headphones = [
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud 2 Red.jpg\"",
        name: "Tai nghe HyperX Cloud 2 Red Black",
        sale_price: "2,199,000đ",
        normal_price: "2,499,000đ", 
        date: new Date(2019, 12, 5),
        sold:  554,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud Stinger Gaming Black.jpg\"",
        name: "Tai nghe HyperX Cloud Stinger Gaming Black",
        sale_price: "1,299,000đ",
        normal_price: "", 
        date: new Date(2018, 9, 9),
        sold: 342,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G Pro X League Of Legends.png\"",
        name: "Tai nghe Logitech G Pro X League Of Legends",
        sale_price: "3,299,000đ",
        normal_price: "3,699,000đ", 
        date: new Date(2022, 2, 1),
        sold: 125,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G435 LightSpeed Wireless Off-White Lilac.png\"",
        name: "Tai nghe Logitech G435 LightSpeed Wireless Off-Whited",
        sale_price: "1,549,000đ",
        normal_price: "1,799,000đ", 
        date: new Date(2021, 6, 4),
        sold: 545,
    },
    {
        brand: "Rapoo",
        img: "\"./img/Produces/Headphones/Rapoo/Rapoo VM150.jpg\"",
        name: "Tai nghe Rapoo VM150",
        sale_price: "449,000đ",
        normal_price: "", 
        date: new Date(2020, 1, 12),
        sold: 489,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud 2 Red.jpg\"",
        name: "Tai nghe HyperX Cloud 2 Red Black",
        sale_price: "2,299,000đ",
        normal_price: "2,499,000đ", 
        date: new Date(2020, 2, 5),
        sold:  784,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud Stinger Gaming Black.jpg\"",
        name: "Tai nghe HyperX Cloud Stinger Gaming Black",
        sale_price: "999,000đ",
        normal_price: "", 
        date: new Date(2021, 9, 19),
        sold: 742,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G Pro X League Of Legends.png\"",
        name: "Tai nghe Logitech G Pro X League Of Legends",
        sale_price: "2,999,000đ",
        normal_price: "3,699,000đ", 
        date: new Date(2021, 12, 21),
        sold: 647,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G435 LightSpeed Wireless Off-White Lilac.png\"",
        name: "Tai nghe Logitech G435 LightSpeed Wireless Off-Whited",
        sale_price: "1,449,000đ",
        normal_price: "1,899,000đ", 
        date: new Date(2020, 6, 24),
        sold: 365,
    },
    {
        brand: "Rapoo",
        img: "\"./img/Produces/Headphones/Rapoo/Rapoo VM150.jpg\"",
        name: "Tai nghe Rapoo VM150",
        sale_price: "849,000đ",
        normal_price: "", 
        date: new Date(2018, 11, 12),
        sold: 999,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud 2 Red.jpg\"",
        name: "Tai nghe HyperX Cloud 2 Red Black",
        sale_price: "2,090,000đ",
        normal_price: "2,499,000đ", 
        date: new Date(2020, 12, 2),
        sold:  764,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud Stinger Gaming Black.jpg\"",
        name: "Tai nghe HyperX Cloud Stinger Gaming Black",
        sale_price: "1,199,000đ",
        normal_price: "1,299,000đ", 
        date: new Date(2019, 9, 23),
        sold: 446,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G Pro X League Of Legends.png\"",
        name: "Tai nghe Logitech G Pro X League Of Legends",
        sale_price: "3,399,000đ",
        normal_price: "3,699,000đ", 
        date: new Date(2018, 7, 5),
        sold: 684,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G435 LightSpeed Wireless Off-White Lilac.png\"",
        name: "Tai nghe Logitech G435 LightSpeed Wireless Off-Whited cũ",
        sale_price: "1,000,000đ",
        normal_price: "1,799,000đ", 
        date: new Date(2017, 6, 4),
        sold: 545,
    },
    {
        brand: "Rapoo",
        img: "\"./img/Produces/Headphones/Rapoo/Rapoo VM150.jpg\"",
        name: "Tai nghe Rapoo VM150",
        sale_price: "549,000đ",
        normal_price: "", 
        date: new Date(2018, 1, 12),
        sold: 489,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud 2 Red.jpg\"",
        name: "Tai nghe HyperX Cloud 2 Red Black",
        sale_price: "1,999,000đ",
        normal_price: "2,499,000đ", 
        date: new Date(2022, 3, 15),
        sold:  671,
    },
    {
        brand: "HyperX",
        img: "\"./img/Produces/Headphones/HyperX/HyperX Cloud Stinger Gaming Black.jpg\"",
        name: "Tai nghe HyperX Cloud Stinger Gaming Black",
        sale_price: "1,599,000đ",
        normal_price: "", 
        date: new Date(2018, 11, 9),
        sold: 888,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G Pro X League Of Legends.png\"",
        name: "Tai nghe Logitech G Pro X League Of Legends",
        sale_price: "2,999,000đ",
        normal_price: "3,299,000đ", 
        date: new Date(2021, 6, 13),
        sold: 685,
    },
    {
        brand: "Logitech",
        img: "\"./img/Produces/Headphones/Logitech/Logitech G435 LightSpeed Wireless Off-White Lilac.png\"",
        name: "Tai nghe Logitech G435 LightSpeed Wireless Off-Whited",
        sale_price: "1,550,000đ",
        normal_price: "1,799,000đ", 
        date: new Date(2022, 5, 1),
        sold: 545,
    },
    {
        brand: "Rapoo",
        img: "\"./img/Produces/Headphones/Rapoo/Rapoo VM150.jpg\"",
        name: "Tai nghe Rapoo VM150 cũ",
        sale_price: "249,000đ",
        normal_price: "", 
        date: new Date(2020, 11, 12),
        sold: 776,
    },
    
];
var tempheadphones = headphones;   

function loadProduct(qk, qm, qh) {  
    var keyboardContainer;
    var mouseContainer;
    var headphoneContainer;

    
    for (let i = 0 ; i < keyboards.length ; i++) {
        for (let j = i + 1 ; j < keyboards.length ; j++) {
            if (keyboards[i].sold < keyboards[j].sold) {
                var tmp = keyboards[i];
                keyboards[i] = keyboards[j];
                keyboards[j] = tmp;
            }
        }
    }
    for (let i = 0 ; i < mouses.length ; i++) {
        for (let j = i + 1 ; j < mouses.length ; j++) {
            if (mouses[i].sold < mouses[j].sold) {
                var tmp = mouses[i];
                mouses[i] = mouses[j];
                mouses[j] = tmp;
            }
        }
    }
    for (let i = 0 ; i < headphones.length ; i++) {
        for (let j = i + 1 ; j < headphones.length ; j++) {
            if (headphones[i].sold < headphones[j].sold) {
                var tmp = headphones[i];
                headphones[i] = headphones[j];
                headphones[j] = tmp;
            }
        }
    }

    if (qk != 0) {
        keyboardContainer = document.getElementsByClassName('container__wrapper-products-list Keyboards')[0];
    }
    if (qm != 0) {
        mouseContainer = document.getElementsByClassName('container__wrapper-products-list Mouses')[0];
    }
    if (qh != 0) {
        headphoneContainer = document.getElementsByClassName('container__wrapper-products-list Headphones')[0];
    }
    function renderProduct() {
        var results = ""; 
        for (i = 0 ; i < 10 ; i++) {
            results += `
                        <li class="container__wrapper-product"> 
                            <a href="detailKeyboard.html">
                                <div class="container__wrapper-product-img">
                                    <div class="container__wrapper-product-overlay"></div>
                                    <div class="container__wrapper-product-button-see">
                                        <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                    </div>
                                    <img src=${keyboards[i].img} alt="Sản phẩm">
                                </div>
    
                                <div class="container__wrapper-product-info">
                                    <div class="container__wrapper-product-info-layout">
                                        <div class="container__wrapper-product-name">
                                            <span><a href="#" class="header__cart-list-item-name">${keyboards[i].name}</a></span>
                                        </div>
                                        <div class="container__wrapper-product-prices">
                                            <span class="container__wrapper-product-price-normal product-price-sale">${keyboards[i].sale_price}</span>
                                            <span class="container__wrapper-product-price-normal">${keyboards[i].normal_price}</span>
                                        </div>
                                    </div>
                                </div> 
                            </a> 
                        </li>

            `;
                
        }
        if (qk > 0) {
            keyboardContainer.innerHTML = results;  
        }
        
        results = "";
        for (i = 0 ; i < 10 ; i++) {
            results += `
                        <li class="container__wrapper-product"> 
                            <a href="detailMouse.html">
                                <div class="container__wrapper-product-img">
                                    <div class="container__wrapper-product-overlay"></div>
                                    <div class="container__wrapper-product-button-see">
                                        <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                    </div>
                                    <img src=${mouses[i].img} alt="Sản phẩm">
                                </div>
    
                                <div class="container__wrapper-product-info">
                                    <div class="container__wrapper-product-info-layout">
                                        <div class="container__wrapper-product-name">
                                            <span><a href="#" class="header__cart-list-item-name">${mouses[i].name}</a></span>
                                        </div>
                                        <div class="container__wrapper-product-prices">
                                            <span class="container__wrapper-product-price-normal product-price-sale">${mouses[i].sale_price}</span>
                                            <span class="container__wrapper-product-price-normal">${mouses[i].normal_price}</span>
                                        </div>
                                    </div>
                                </div> 
                            </a> 
                        </li>
            `;
            
        }
        if (qm > 0) {
            mouseContainer.innerHTML = results; 
        }
         
        results = "";
        for (i = 0 ; i < 10 ; i++) { 
            results += `
                        <li class="container__wrapper-product"> 
                            <a href="detailHeadphone.html">
                                <div class="container__wrapper-product-img">
                                    <div class="container__wrapper-product-overlay"></div>
                                    <div class="container__wrapper-product-button-see">
                                        <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                    </div>
                                    <img src=${headphones[i].img} alt="Sản phẩm">
                                </div>
    
                                <div class="container__wrapper-product-info">
                                    <div class="container__wrapper-product-info-layout">
                                        <div class="container__wrapper-product-name">
                                            <span><a href="#" class="header__cart-list-item-name">${headphones[i].name}</a></span>
                                        </div>
                                        <div class="container__wrapper-product-prices">
                                            <span class="container__wrapper-product-price-normal product-price-sale">${headphones[i].sale_price}</span>
                                            <span class="container__wrapper-product-price-normal">${headphones[i].normal_price}</span>
                                        </div>
                                    </div>
                                </div> 
                            </a> 
                        </li>

            `;
            
        }
        if (qh > 0) {
            headphoneContainer.innerHTML = results; 
        }
    }
    renderProduct();
}

// SẮP XẾP - LỌC HÃNG - LỌC GIÁ DANH SÁCH SẢN PHẨM
// BÀN PHÍM
function sortKeyboards(s) { 
    var sortKeyboard = tempkeyboards;
    if (s == "Mới nhất") {
        for (let i = 0 ; i < sortKeyboard.length ; i++) {
            for (let j = i + 1 ; j < sortKeyboard.length ; j++) {
                if (sortKeyboard[i].date < sortKeyboard[j].date) {
                    var tmp = sortKeyboard[i];
                    sortKeyboard[i] = sortKeyboard[j];
                    sortKeyboard[j] = tmp;
                }
            }
        } 
    }
    if (s == "Bán chạy") {
        for (let i = 0 ; i < sortKeyboard.length ; i++) {
            for (let j = i + 1 ; j < sortKeyboard.length ; j++) {
                if (sortKeyboard[i].sold < sortKeyboard[j].sold) {
                    var tmp = sortKeyboard[i];
                    sortKeyboard[i] = sortKeyboard[j];
                    sortKeyboard[j] = tmp;
                }
            }
        }
    }
    if (s == "Giá giảm dần") {
        for (let i = 0 ; i < sortKeyboard.length ; i++) {
            for (let j = i + 1 ; j < sortKeyboard.length ; j++) {
                if (priceLessThan(sortKeyboard[i].sale_price, sortKeyboard[j].sale_price)) {
                    var tmp = sortKeyboard[i];
                    sortKeyboard[i] = sortKeyboard[j];
                    sortKeyboard[j] = tmp;
                }
            }
        }
    }
    if (s == "Giá tăng dần") {
        for (let i = 0 ; i < sortKeyboard.length ; i++) {
            for (let j = i + 1 ; j < sortKeyboard.length ; j++) {
                if (!priceLessThan(sortKeyboard[i].sale_price, sortKeyboard[j].sale_price)) {
                    var tmp = sortKeyboard[i];
                    sortKeyboard[i] = sortKeyboard[j];
                    sortKeyboard[j] = tmp;
                }
            }
        }
    }
    var results = ""; 
    for (i = 0 ; i < sortKeyboard.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailKeyboard.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${sortKeyboard[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${sortKeyboard[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${sortKeyboard[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${sortKeyboard[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Keyboards')[0].innerHTML = results;  
}

function filterKeyboards(s) {
    if (s == "Tất cả")
        tempkeyboards = keyboards;
    else {
        tempkeyboards = new Array();
        for (i = 0 ; i < keyboards.length ; i++) {
            if (keyboards[i].brand == s) {
                tempkeyboards.push(keyboards[i]);
            }
        }
    }

    var results = ""; 
    for (i = 0 ; i < tempkeyboards.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailKeyboard.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${tempkeyboards[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${tempkeyboards[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${tempkeyboards[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${tempkeyboards[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Keyboards')[0].innerHTML = results;  
}

function filterPriceKeyboard() {
    var min = document.getElementById('min-price').value;
    var max = document.getElementById('max-price').value;

    if (min == null || min == "" || max == null || max == "") {
        location.reload();
    }
    else {
        var tmptemmpKeyboard = new Array();
        for (i = 0 ; i < tempkeyboards.length ; i++) {
            // if (!priceLessThan(tempkeyboards[i].sale_price, min) && !priceLessThan(max, tempkeyboards[i].sale_price)) {
            //     tmptemmpKeyboard.push(tempkeyboards[i]);
            // }
            if (tempkeyboards[i].sale_price >= min && tempkeyboards[i].sale_price <= max) {
                tmptemmpKeyboard.push(tempkeyboards[i]);
            }
        }
    }
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    var results = ""; 
    for (i = 0 ; i < tmptemmpKeyboard.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailKeyboard.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${tmptemmpKeyboard[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${tmptemmpKeyboard[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${tmptemmpKeyboard[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${tmptemmpKeyboard[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Keyboards')[0].innerHTML = results;  
}

// CHUỘT
function sortMouses(s) { 
    var sortMouse = tempmouses;
    if (s == "Mới nhất") {
        for (let i = 0 ; i < sortMouse.length ; i++) {
            for (let j = i + 1 ; j < sortMouse.length ; j++) {
                if (sortMouse[i].date < sortMouse[j].date) {
                    var tmp = sortMouse[i];
                    sortMouse[i] = sortMouse[j];
                    sortMouse[j] = tmp;
                }
            }
        } 
    }
    if (s == "Bán chạy") {
        for (let i = 0 ; i < sortMouse.length ; i++) {
            for (let j = i + 1 ; j < sortMouse.length ; j++) {
                if (sortMouse[i].sold < sortMouse[j].sold) {
                    var tmp = sortMouse[i];
                    sortMouse[i] = sortMouse[j];
                    sortMouse[j] = tmp;
                }
            }
        }
    }
    if (s == "Giá giảm dần") { 
        for (let i = 0 ; i < sortMouse.length ; i++) {
            for (let j = i + 1 ; j < sortMouse.length ; j++) {
                if (priceLessThan(sortMouse[i].sale_price, sortMouse[j].sale_price)) {
                    var tmp = sortMouse[i];
                    sortMouse[i] = sortMouse[j];
                    sortMouse[j] = tmp;
                }
            }
        }
    }
    if (s == "Giá tăng dần") {
        for (let i = 0 ; i < sortMouse.length ; i++) {
            for (let j = i + 1 ; j < sortMouse.length ; j++) {
                if (!priceLessThan(sortMouse[i].sale_price, sortMouse[j].sale_price)) {
                    var tmp = sortMouse[i];
                    sortMouse[i] = sortMouse[j];
                    sortMouse[j] = tmp;
                }
            }
        }
    }
    var results = ""; 
    for (i = 0 ; i < sortMouse.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailMouse.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${sortMouse[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${sortMouse[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${sortMouse[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${sortMouse[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Mouses')[0].innerHTML = results;  
}

function filterMouses(s) { 
    if (s == "Tất cả")
        tempmouses = mouses;
    else {
        tempmouses = new Array();
        for (i = 0 ; i < mouses.length ; i++) {
            if (mouses[i].brand == s) {
                tempmouses.push(mouses[i]);
            }
        }
    }

    var results = ""; 
    for (i = 0 ; i < tempmouses.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailMouse.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${tempmouses[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${tempmouses[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${tempmouses[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${tempmouses[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Mouses')[0].innerHTML = results;  
}

function filterPriceMouses() {
    var min = document.getElementById('min-price').value;
    var max = document.getElementById('max-price').value;

    if (min == null || min == "" || max == null || max == "") {
        location.reload();
    }
    else {
        var tmptemmpMouse = new Array();
        for (i = 0 ; i < tempmouses.length ; i++) {
            if (!priceLessThan(tempmouses[i].sale_price, min) && !priceLessThan(max, tempmouses[i].sale_price)) {
                tmptemmpMouse.push(tempmouses[i]);
            }
        }
    }
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    var results = ""; 
    for (i = 0 ; i < tmptemmpMouse.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailMouse.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${tmptemmpMouse[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${tmptemmpMouse[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${tmptemmpMouse[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${tmptemmpMouse[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Mouses')[0].innerHTML = results;  
}

// TAI NGHE
function sortHeadphones(s) { 
    var sortHeadphone = tempheadphones;
    if (s == "Mới nhất") {
        for (let i = 0 ; i < sortHeadphone.length ; i++) {
            for (let j = i + 1 ; j < sortHeadphone.length ; j++) {
                if (sortHeadphone[i].date < sortHeadphone[j].date) {
                    var tmp = sortHeadphone[i];
                    sortHeadphone[i] = sortHeadphone[j];
                    sortHeadphone[j] = tmp;
                }
            }
        } 
    }
    if (s == "Bán chạy") {
        for (let i = 0 ; i < sortHeadphone.length ; i++) {
            for (let j = i + 1 ; j < sortHeadphone.length ; j++) {
                if (sortHeadphone[i].sold < sortHeadphone[j].sold) {
                    var tmp = sortHeadphone[i];
                    sortHeadphone[i] = sortHeadphone[j];
                    sortHeadphone[j] = tmp;
                }
            }
        }
    }
    if (s == "Giá giảm dần") { 
        for (let i = 0 ; i < sortHeadphone.length ; i++) {
            for (let j = i + 1 ; j < sortHeadphone.length ; j++) {
                if (priceLessThan(sortHeadphone[i].sale_price, sortHeadphone[j].sale_price)) {
                    var tmp = sortHeadphone[i];
                    sortHeadphone[i] = sortHeadphone[j];
                    sortHeadphone[j] = tmp;
                }
            }
        }
    }
    if (s == "Giá tăng dần") {
        for (let i = 0 ; i < sortHeadphone.length ; i++) {
            for (let j = i + 1 ; j < sortHeadphone.length ; j++) {
                if (!priceLessThan(sortHeadphone[i].sale_price, sortHeadphone[j].sale_price)) {
                    var tmp = sortHeadphone[i];
                    sortHeadphone[i] = sortHeadphone[j];
                    sortHeadphone[j] = tmp;
                }
            }
        }
    }
    var results = ""; 
    for (i = 0 ; i < sortHeadphone.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailHeadphone.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${sortHeadphone[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${sortHeadphone[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${sortHeadphone[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${sortHeadphone[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Headphones')[0].innerHTML = results;  
}

function filterHeadphones(s) { 
    if (s == "Tất cả")
        tempheadphones = headphones;
    else {
        tempheadphones = new Array();
        for (i = 0 ; i < headphones.length ; i++) {
            if (headphones[i].brand == s) {
                tempheadphones.push(headphones[i]);
            }
        }
    }

    var results = ""; 
    for (i = 0 ; i < tempheadphones.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailHeadphone.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${tempheadphones[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${tempheadphones[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${tempheadphones[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${tempheadphones[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Headphones')[0].innerHTML = results;  
}

function filterPriceHeadphones() {
    var min = document.getElementById('min-price').value;
    var max = document.getElementById('max-price').value;

    if (min == null || min == "" || max == null || max == "") {
        location.reload();
    }
    else {
        var tmptemmpHeadphone = new Array();
        for (i = 0 ; i < tempheadphones.length ; i++) {
            if (tempheadphones[i].sale_price >= min && tempheadphones[i].sale_price <= max) {
                tmptemmpHeadphone.push(tempheadphones[i]);
            }
        }
    }
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    var results = ""; 
    for (i = 0 ; i < tmptemmpHeadphone.length ; i++) {
        results += `
                    <li class="container__wrapper-product"> 
                        <a href="detailHeadphone.html">
                            <div class="container__wrapper-product-img">
                                <div class="container__wrapper-product-overlay"></div>
                                <div class="container__wrapper-product-button-see">
                                    <button class="btn btn--sec container__wrapper-product-see">XEM CHI TIẾT</button>
                                </div>
                                <img src=${tmptemmpHeadphone[i].img} alt="Sản phẩm">
                            </div>

                            <div class="container__wrapper-product-info">
                                <div class="container__wrapper-product-info-layout">
                                    <div class="container__wrapper-product-name">
                                        <span><a href="#" class="header__cart-list-item-name">${tmptemmpHeadphone[i].name}</a></span>
                                    </div>
                                    <div class="container__wrapper-product-prices">
                                        <span class="container__wrapper-product-price-normal product-price-sale">${tmptemmpHeadphone[i].sale_price}</span>
                                        <span class="container__wrapper-product-price-normal">${tmptemmpHeadphone[i].normal_price}</span>
                                    </div>
                                </div>
                            </div> 
                        </a> 
                    </li>

        `;
            
    } 
    document.getElementsByClassName('container__wrapper-products-list Headphones')[0].innerHTML = results;  
}


// HIỂN THỊ THÊM SẢN PHẨM
function showMoreKeyboards() {
    document.querySelector('.container__wrapper-product-footing-button-see-more.key').classList.toggle('active');
    document.querySelector('.container__wrapper-products-list.Keyboards').classList.toggle('active');
}
function showMoreMouses() {
    document.querySelector('.container__wrapper-product-footing-button-see-more.mse').classList.toggle('active');
    document.querySelector('.container__wrapper-products-list.Mouses').classList.toggle('active');
}
function showMoreHeadphones() {
    document.querySelector('.container__wrapper-product-footing-button-see-more.hdp').classList.toggle('active');
    document.querySelector('.container__wrapper-products-list.Headphones').classList.toggle('active');
}

// TẠO SELECTION
function customSelect() {
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
                if (this.textContent == "Mới nhất" || this.textContent == "Bán chạy" || this.textContent == "Giá giảm dần" || this.textContent == "Giá tăng dần") {
                    if (document.getElementsByClassName('container__wrapper-selection keyboard').length != 0) {
                        sortKeyboards(this.textContent);
                    }
                    if (document.getElementsByClassName('container__wrapper-selection mouse').length != 0) {
                        sortMouses(this.textContent);
                    }
                    if (document.getElementsByClassName('container__wrapper-selection headphone').length != 0) {
                        sortHeadphones(this.textContent);
                    }
                }
                else {
                    if (document.getElementsByClassName('container__wrapper-selection keyboard').length != 0)
                        filterKeyboards(this.textContent);
                    if (document.getElementsByClassName('container__wrapper-selection mouse').length != 0) 
                        filterMouses(this.textContent);
                    if (document.getElementsByClassName('container__wrapper-selection headphone').length != 0) 
                        filterHeadphones(this.textContent);
                }
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
}