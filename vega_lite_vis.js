var vg_1 = "map_arrivals.json";
var vg_2 = "line_chart_arrival.json";
var vg_3 = "barchart_arrival_countries.json";
var vg_4 = "barchart_visatypes.json";
   vegaEmbed("#australia_arrival_map2", vg_1,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
vegaEmbed("#australia_arrival_line", vg_2,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
   vegaEmbed("#barchart_arrivals_countries", vg_3,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
   vegaEmbed("#barchart_arrivals_visa", vg_4,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);