var vg_1 = "arrival_map.json";
var vg_4 = "line_chart_arrival.json";
var vg_6 = "barchart_arrival_countries.json";
vegaEmbed("#australia_arrival_map", vg_1,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
vegaEmbed("#australia_arrival_line", vg_4,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
   vegaEmbed("#barchart_arrivals_countries", vg_6,{"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);