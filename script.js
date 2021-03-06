//Jeff's personal access token for mapbox gl js
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlzaGRlc3Ryb3llciIsImEiOiJja3ZhaGIwam9hZGNmMnFtYWJoeWY2eDZ5In0.cTey3m_BuUWk9ZIp0n1AhQ';

//below shows to be a const rather than a var- results did not work correctly
var map = new mapboxgl.Map({
  container: 'map',

  style: 'mapbox://styles/fishdestroyer/ckvaf22yi1dyv14teexn4pdq1',
  center: [-97.740, 30.274],
  zoom: 10.5
});
// researched mapbox.com- followed tutorials and coding guidance//
map.on('load', () => {
  map.addSource('places', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'description':
              // added rest. name and matching latitude and longitude will change the <p> with better descriptions//
              '<strong>Veracruz All Natural</strong><p>In business since 2008. Known for its fresh produce and vegetarian dishes, Veracruz All Natural is recognized locally, nationally, and internationally.</p>'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-97.794, 30.231]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description':
              // added rest. name and matching latitude and longitude will change the <p> with better descriptions//
              '<strong>Torchy`s Tacos</strong><p>An Austin staple since 2006, Torchy`s boasts "Damn Good Tacos!" Visit this original location!</p>'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-97.759, 30.249]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description':
              // added rest. name and matching latitude and longitude will change the <p> with better descriptions//
              '<strong>Tacodeli</strong><p>The leader of the pack in terms of longevity. An Austin original since 1999! Breakfast starts at 7:00a.m. and runs until 3:00p.m. on the weekends.</p>'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-97.747, 30.31039002]
          }
        },
      ]
    }
  });

  map.addLayer({
    'id': 'places',
    //need to change 'circle' back to original icon- can change to original icon, pop up function goes away//
    'type': 'circle',
    'source': 'places',
    'paint': {
      'circle-color': '#4264fb',
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.on('mouseenter', 'places', (e) => {

    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// Full screen control
map.addControl(new mapboxgl.FullscreenControl());