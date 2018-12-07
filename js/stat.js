'use strict';

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2D');

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgb(0, 0, 0)';

  var title = ['Ура вы победили!', 'Список результатов:'];
  var lineSpacing = 0;
  for (var indexTitle = 0; indexTitle < title.length; indexTitle++) {
    ctx.fillText(title[indexTitle], 150, 30 + lineSpacing);
    lineSpacing += 21;
  }

  var maxTime = times[0];
  for (var indexTimes = 1; indexTimes < times.length; indexTimes++) {
    if (times[indexTimes] > maxTime) {
      maxTime = times[indexTimes];
    }
  }
  maxTime = Math.round(maxTime);

  var distanceBetweenColumns = 0;
  var heightOfColumn = 0;
  for (var indexNames = 0; indexNames < names.length; indexNames++) {
    ctx.fillStyle = 'rgba(15, 7, 133, ' + Math.ceil(Math.random() * 10) / 10 + ')';
    if (names[indexNames] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    heightOfColumn = (Math.round(times[indexNames]) * 150) / maxTime;
    ctx.fillRect(150 + distanceBetweenColumns, (125 - heightOfColumn) + 125, 40, heightOfColumn);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.round(times[indexNames]), 150 + distanceBetweenColumns, 90);
    ctx.fillText(names[indexNames], 150 + distanceBetweenColumns, 270);
    distanceBetweenColumns += 50;
  }
};
