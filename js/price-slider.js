$("#slider-range").slider({
  range: true,
  orientation: "horizontal",
  min: 0.00,
  max: 50,
  values: [0.00, 50],
  step: 1,
  slide: function (event, ui) {
    if (ui.values[0] == ui.values[1]) {
      return false;
    }
    $("#min_price").val(ui.values[0]);
    $("#max_price").val(ui.values[1]);
  }
});

$( ".selector" ).slider({
  animate: "fast"
});