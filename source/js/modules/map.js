function initMap() {
  const coords = [59.887364, 30.374687];
  const hintContent = ' Салова 57 корпус 1. Производство номеров';
  const placemarkUrl = 'img/map/map.svg';
  let mapInstance = null;

  ymaps.ready(() => {
    mapInstance = new ymaps.Map('map', {
      center: coords,
      zoom: 17,
      mode: 'vector',
      controls: []
    });

    const myPlacemark = new ymaps.Placemark(mapInstance.getCenter(), {
      hintContent: hintContent,
      balloonContent: coords
    }, {
      iconLayout: 'default#image',
      iconImageHref: placemarkUrl,
      iconImageSize: [50, 50],
      iconImageOffset: [-40, -60]
    });

    mapInstance.geoObjects.add(myPlacemark);
  })
}

export default initMap;
