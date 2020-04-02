import React, { Component } from "react";
import Testimonial from "./Testimonial.js";
import "./TestimonialsWrapper.scss";


var TestimonialsArr = [{
        index: 1,
        image: "./img/referal-pawel.jpg",
        name: 'Paweł',
        testimonial_text: 'Gorąco polecam,wszystko ogarnięte na tip top, więc bez stresu można się oddać zjeżdżaniu po stokach a wieczorem zabawie :D'
    },

    {
        index: 2,
        image: "./img/referal-adam.jpg",
        name: 'Adam',
        testimonial_text: 'Generalnie wyjazd w 100% udany. Każdy znajdzie coś dla siebie. Mnóstwo rozrywek każdego dnia i oczywiście świetni piloci.'
    },

    {
        index: 3,
        image: "./img/referal-lukasz.jpg",
        name: 'Łukasz',
        testimonial_text: 'Profesjonalnie, sympatycznie, wesoło tak jakbyśmy sobie tego życzyli - po dwóch wyjazdach tyle i dużo więcej dobrego mogę napisać ;)'
    },
    {
        index: 4,
        image: "./img/referal-ania.jpg",
        name: 'Ania',
        testimonial_text: 'Najlepsze miejscówki i niesamowite widoki! Aktywny wypoczynek, świetna zajawka i mega ekipa! Uśmiech nie schodzi z twarzy! #TaksidiFamily'
    },
    {
        index: 5,
        image: "./img/referal-roch.jpg",
        name: 'Roch',
        testimonial_text: 'Pierwszy raz spotkałem się z tak dobrą organizacją. Codziennie koncerty i zabawa z mega pozytywnym towarzystwem.'
    },
    {
        index: 6,
        image: "./img/referal-andrzej.jpg",
        name: 'Andrzej',
        testimonial_text: 'Chcąc opisać to, co wydarzyło się w Chorwacji, na myśl nasuwa mi się tylko jedno słowo: BAJKA. Serdecznie polecam!'
    },
    {
        index: 7,
        image: "./img/referal-zuzanna.jpg",
        name: 'Zuzanna',
        testimonial_text: 'Organizacja wyjazdu na 6! Mimo tak dużej liczby osób biorących udział w Sound Project wszystko dopięte na ostatni guzik.'
    },
    {
        index: 8,
        image: "./img/referal-julia.jpg",
        name: 'Julia',
        testimonial_text: 'Polecam z całego serduszka! Na wyjazdach mega atmosfera i cudowni ludzie! Wycieczka do Toskanii bardzo dobrze zorganizowana i przemyślana!'
    },
    {
        index: 9,
        image: "./img/referal-aleksandra.jpg",
        name: 'Aleksandra',
        testimonial_text: 'Super organizacja, dynamiczne reagowanie na potrzeby, bardzo dobry kontakt z pilotem. Dodatkowo świetne koncerty, atmosfera i ludzie :)'
    },
    {
        index: 10,
        image: "./img/referal-ewelina.jpg",
        name: 'Ewelina',
        testimonial_text: 'Uważam, że należy im się dobra 5. Wszystko jest na właściwym poziomie począwszy od organizacji po eventy, które odbywają się w trakcie wyjazdu.'
    }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function GenerateTestimonialsArr() {
    var arr = [];
    var arr2 = [];
    while (arr.length < 3) {
        var r = getRandomInt(1, 11);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
            TestimonialsArr.forEach((el) => {
                if (el.index === r) {
                    arr2.push(el)
                }
            })
        }
    }
    return arr2
}

class TestimonialsWrapper extends Component {
    render() {
        return ( <div className = 'testimonialsWrapper' > {
                GenerateTestimonialsArr().map((el) =>
                    <
                    Testimonial image = { el.image }
                    name = { el.name }
                    text = { el.testimonial_text }
                    />
                )
            } </div>)

        }
    }


    export default TestimonialsWrapper;
