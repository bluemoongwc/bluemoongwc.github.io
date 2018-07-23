map = new OpenLayers.Map("mapdiv");
  map.addLayer(new OpenLayers.Layer.OSM());

//set lonLat to new location
  var currentLonLat = new OpenLayers.LonLat( -84.3443 ,33.9212 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var LAfitness =     new OpenLayers.LonLat(-84.346519, 33.92743)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Lifetimefitness =    new OpenLayers.LonLat(-84.381027, 33.907086)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var YogaWorksdunwoody =   new OpenLayers.LonLat(-84.331816, 33.946398)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Sundragonyoga = new OpenLayers.LonLat(-84.255401, 33.969899)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Youyoga = new OpenLayers.LonLat(-84.349367, 33.996349)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
       );
  var Petland = new OpenLayers.LonLat(-84.3346, 33.9462)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Petsmart = new OpenLayers.LonLat(-84.346519, 33.92743)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Dunwoodypark = new OpenLayers.LonLat(-84.330895, 33.956029)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Morganfalls = new OpenLayers.LonLat(-84.379966, 33.970078)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );
  var Brookhavenpark = new OpenLayers.LonLat(-84.340906, 33.864679)
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          map.getProjectionObject()
        );

  var zoom=16;


  var markers = new OpenLayers.Layer.Markers( "Markers" );
  map.addLayer(markers);

// add marker to msl
  markers.addMarker(new OpenLayers.Marker(currentLonLat));
  markers.addMarker(new OpenLayers.Marker(LAfitness));
  markers.addMarker(new OpenLayers.Marker(Lifetimefitness));
  markers.addMarker(new OpenLayers.Marker(YogaWorksdunwoody));
  markers.addMarker(new OpenLayers.Marker(Sundragonyoga));
  markers.addMarker(new OpenLayers.Marker(Youyoga));
  markers.addMarker(new OpenLayers.Marker(Petland));
  markers.addMarker(new OpenLayers.Marker(Petsmart));
  markers.addMarker(new OpenLayers.Marker(Dunwoodypark));
  markers.addMarker(new OpenLayers.Marker(Morganfalls));
  markers.addMarker(new OpenLayers.Marker(Brookhavenpark));
  map.setCenter (currentLonLat, zoom);
