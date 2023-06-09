var optionsStrike = [30000, 29750, 29500, 29250, 29000, 28750, 28500, 28250, 28000, 27750, 27500];

var commonOptions = {
  maintainAspectRatio: true,
  animation: false,
  aspectRatio: 1,
  scales: {
    y: {
      min: 27500, // 1つ目のグラフのy軸の最小値
      max: 30000, // 1つ目のグラフのy軸の最大値
      stepSize: 250
    },

  }
};

var chart2Options = Object.assign({}, commonOptions, {
  // chart2の個別の設定
  indexAxis: 'y',
  scales: {
    y: {
      position: 'right', // y軸を右側に表示する
    }
  }
});

function draw1() {
  var ctx1 = document.getElementById("myChart1").getContext('2d');
  window.myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ["2023/5/1", "2023/5/2", "2023/5/3", "2023/5/4", "2023/5/5",
        "2023/5/6", "2023/5/7", "2023/5/8", "2023/5/9", "2023/5/10"],
      datasets: [{
        label: "日経平均株価",
        data: [27812, 28154, 28437, 28941, 29251, 29756, 29427, 29288, 28999, 29510, 29812],
        fill: false,
        borderColor: 'black',
      }],
    },
    options: commonOptions
  },);

}

function draw2() {
  var ctx2 = document.getElementById("myChart2").getContext('2d');
  window.myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: optionsStrike,
      datasets: [{
        label: "オプション建玉数",
        data: [11013, 812, 9186, 3506, 1587, 12610, 4745, 11812, 2318, 15876, 1578, 21094],
        barThickness: 1,
        backgroundColor: 'black',
      }],
    },
    options: chart2Options
  },);

}
