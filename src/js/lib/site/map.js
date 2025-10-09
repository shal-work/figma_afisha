$.prototype.map = function () {
    function initMap() {
        let myMap = new ymaps.Map("map-nevsky-1", {
            center: [59.936846, 30.312185],
            zoom: 16,
            controls: [],
        }, {
            suppressMapOpenBlock: true
        });


        // let kurasan = new ymaps.Placemark([59.936846, 30.312185], {
        //     iconCaption: 'Невский проспект, 1/4'
        // }, {
        //     preset: 'islands#circleIcon',
        //     preset: 'islands#pinkDotIcon',
        //     iconColor: '#ff0000',
        // });
        // myMap.geoObjects.add(kurasan);

        // let kurasan = new ymaps.Placemark([59.936846, 30.312185], {
        //     iconCaption: 'Невский проспект, 1/4'
        // }, {
        //     preset: 'islands#circleIcon',
        //     preset: 'islands#pinkDotIcon',
        //     iconColor: 'tfransparent',
        // });
        // myMap.geoObjects.add(kurasan);


        let kurasan = new ymaps.Placemark([59.936846, 30.312185], {},{
            iconLayout: 'default#image',
            // iconImageHref: "assets/img/spriteIco.svg#location-y",
            iconImageHref: "assets/img/location_house.svg",
            iconImageSize: [70, 70],
            iconImageOffset: [-30, -50]
        });
        myMap.geoObjects.add(kurasan);
    }
    ymaps.ready(initMap);
};



try {
    $('.map').map();

} catch (error) {}
