const cardsImage = document.getElementsByClassName('cards-img');
const cardsDescr = document.getElementsByClassName('cards-descr');
const cardsPrice = document.getElementsByClassName('cards-prices-value');
const cardsTotal = document.getElementsByClassName('cards-prices-total');
const cardsComments = document.getElementsByClassName('comments-count');


const laptopsArray = [
        {
            id: 1,
            name: 'Ноутбук Lenovo Legion 7 16IAX7-I7321TSGW1 (82TD009XRK)',
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_2779_8_1.jpg',
            price: `281 590сом`,
            total: 'На витрине',
            comments: '0 отзывов',
        },
        {
            id: 2,
            name: 'Ноутбук Asus ROG Zephyrus G15 GA503RM-HQ067W Ryzen 9 6900HS 16GB / SSD 1TB / GeForce RTX 3060 6GB / Win11 / 90NR0812-M004D0',
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_2753_7_1.webp',
            price: `145 090сом`,
            total: 'На витрине',
            comments: `3 отзывов`,
        },
       {
           id: 3,
           name: 'Ноутбук Lenovo Yoga Slim 7 ProX 14IAH7 Corei7 12700H 16GB / SSD 1 TB / GeForce RTX 3050 4GB / Win11 / 82TK00AXRU',
           img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_2785_7_1.webp',
           price: `139 290сом`,
           total: 'На витрине',
           comments: '0 отзывов',
       },
];

for (let i = 0; i < cardsDescr.length; i++) {
    cardsDescr[i].textContent = laptopsArray[0].name;
}
for (let i = 0; i < cardsImage.length; i++) {
    cardsImage[i].src = laptopsArray[0].img;
}
for (let i = 0; i < cardsPrice.length; i++) {
    cardsPrice[i].textContent = laptopsArray[0].price;
}

for (let i = 0; i < cardsTotal.length; i++) {
    cardsTotal[i].textContent = laptopsArray[0].total;
}