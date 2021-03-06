var colors = {
  0: "blue",
  1: "orange"
};

var barOptions = {
  type: 'series',
  layout: 'grid',
  timeInterval: '30s',
  xAxis: {
    position: 'bottom',
    type: 'datetime'
  },
  yAxis: {
    position: 'left',
    type: 'linear'
  },
  bar: {
    show: true,
    group: true,
    timePadding: 0.2,
    orientation: 'vertical',
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = barOptions;
