var layercementerio;
var layersepulturas;
var layersepulturasA;
//var layersepulturas0;
var layerA;
var layerC;
var layerH;
var layerN;
var layerP;
var layerT;

var urlcementerio = "datos/ESTRUCTURA.geojson";
//var urlsepulturas0 = "datos/SEPULTURAS_AÑO.geojson";
var urlsepulturas = "datos/ANTES1880.geojson";
var urlsepulturasA = "datos/DESPUES1880.geojson";
var urlA = "datos/A.geojson";
var urlC = "datos/C.geojson";
var urlH = "datos/H.geojson";
var urlN = "datos/N.geojson";
var urlP = "datos/P.geojson";
var urlT = "datos/T.geojson";



function addDatoscementerio() {
        //CAPA1
        layercementerio  = new L.GeoJSON.AJAX(urlcementerio, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                
            }
        }).addTo(map);
        //CAPA2
        layersepulturas  = new L.GeoJSON.AJAX(urlsepulturas, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.NOMDPT + "</b>"+
                "<br>" + feature.properties.TIPUSCONST +
                ". " + feature.properties.ANY_CONST +
                " " + feature.properties.ATRIBUT + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "red",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);
        //CAPA3
        layersepulturasA  = new L.GeoJSON.AJAX(urlsepulturasA, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "YELLOW",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        layerA = new L.GeoJSON.AJAX(urlA, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "#00ffff",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        layerC = new L.GeoJSON.AJAX(urlC, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "#00ffff",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        layerH = new L.GeoJSON.AJAX(urlH, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        layerN = new L.GeoJSON.AJAX(urlN, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        layerP = new L.GeoJSON.AJAX(urlP, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        layerT = new L.GeoJSON.AJAX(urlT, {
            onEachFeature: function (feature, layer) {

                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 0,
                    opacity: 1,
                    fillOpacity: 0.8,
                    checked: true
                });
            }
        }).addTo(map);

        map.setView([41.97241131969834, 2.8368261647715087],17);
        
        controlCapas.addOverlay(layercementerio,"Cimenterio");
        controlCapas.addOverlay(layerA,"A");
        controlCapas.addOverlay(layerC,"C");
        controlCapas.addOverlay(layerH,"H");
        controlCapas.addOverlay(layerN,"N");
        controlCapas.addOverlay(layerP,"P");
        controlCapas.addOverlay(layerT,"T");
        controlCapas.addOverlay(layersepulturas,"Sepulturas Antes 1880");
        controlCapas.addOverlay(layersepulturasA,"Sepulturas Despues 1880");


        var searchControl = new L.Control.Search({
            layer: layercementerio,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                //map.setView(latlng, 17);
            }
        });

        
        var searchControl = new L.Control.Search({
            layer: layersepulturas,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                //map.setView(latlng, 17);
            }
        });

        var searchControl = new L.Control.Search({
            layer: layersepulturasA,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                //map.setView(latlng, 17);
            }
        });



        var searchControl = new L.Control.Search({
            layer: layerA,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });
        var searchControl = new L.Control.Search({
            layer: layerC,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });
        var searchControl = new L.Control.Search({
            layer: layerH,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });
        var searchControl = new L.Control.Search({
            layer: layerN,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });
        var searchControl = new L.Control.Search({
            layer: layerP,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });
        var searchControl = new L.Control.Search({
            layer: layerT,
            initial:true,
            checked: false,
            propertyName: 'EQUIPAMENT',
            circleLocation: false,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });

        searchControl.on('search:locationfound', function(e) {
            e.layer.openPopup();
        });
        map.addControl(searchControl);

}
