<template>
    <el-row>
      <div id="main" style=" width:500px;height: 500px;"></div>
    </el-row>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
name: "oneChart",
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('main'), 'macarons')
      var layouts = [
        [[0, 0]],
        [[-0.25, 0], [0.25, 0]],
        [[0, -0.2], [-0.2, 0.2], [0.2, 0.2]],
        [[-0.25, -0.25], [-0.25, 0.25], [0.25, -0.25], [0.25, 0.25]]
      ];
      var pathes = [
        'M704 800c-6.4 0-19.2 0-25.6-6.4l-448-448c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l448 448c12.8 12.8 12.8 32 0 44.8C716.8 793.6 710.4 800 704 800z M256 800c-6.4 0-19.2 0-25.6-6.4-12.8-12.8-12.8-32 0-44.8l448-448c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-448 448C268.8 793.6 262.4 800 256 800z',
        'M559.786667 191.146667V129.706667h126.293333c17.066667 0 30.72-13.653333 30.72-30.72s-13.653333-30.72-30.72-30.72h-314.026667c-17.066667 0-30.72 13.653333-30.72 30.72s13.653333 30.72 30.72 30.72h126.293334v61.44c-211.626667 17.066667-378.88 187.733333-378.88 399.36 0 221.866667 184.32 399.36 409.6 399.36s409.6-177.493333 409.6-399.36c0-211.626667-167.253333-382.293333-378.88-399.36zM529.066667 682.666667c-51.2 0-95.573333-40.96-95.573334-92.16 0-40.96 27.306667-75.093333 61.44-85.333334v-160.426666c0-17.066667 13.653333-30.72 30.72-30.72s30.72 13.653333 30.72 30.72v160.426666c37.546667 13.653333 61.44 47.786667 61.44 85.333334 6.826667 51.2-37.546667 92.16-88.746666 92.16z',
        'M741.06368 733.310464c8.075264-29.262438 20.615373-40.632422 14.64105-162.810061C966.089728 361.789952 967.93897 72.37847 967.855002 54.693683c0.279347-0.279347 0.418509-0.419533 0.418509-0.419533s-0.17705-0.00512-0.428749-0.00512c0-0.251699 0-0.428749 0-0.428749s-0.139162 0.14633-0.418509 0.425677c-17.695744-0.083866-307.10784 1.760051-515.833958 212.142592-122.181632-5.984256-133.55305 6.563533-162.815693 14.644531C235.35063 295.798886 103.552614 436.975309 90.630758 486.076621c-12.921856 49.105408 39.634227 56.859034 58.579558 58.581197 18.953421 1.724314 121.471386-9.475789 130.09111 4.309094 0 0 16.367411 11.200102 17.226035 41.346662 0.850432 29.796659 15.173222 71.354163 37.123994 97.267302-0.028672 0.027648-0.05632 0.054272-0.083866 0.074752 0.158618 0.13097 0.316211 0.261939 0.474829 0.390861 0.129946 0.149402 0.261939 0.319283 0.393011 0.468685 0.019456-0.019456 0.04608-0.049152 0.075776-0.075674 25.918362 21.961216 67.477504 36.272128 97.269248 37.122458 30.149837 0.859546 41.354547 17.234534 41.354547 17.234534 13.779354 8.608051 2.583962 111.122842 4.302131 130.075546 1.727386 18.95168 9.477222 71.498445 58.579558 58.576077C585.12896 918.526771 726.311117 786.734182 741.06368 733.310464zM595.893555 426.206003c-39.961702-39.965184-39.961702-104.75991 0-144.720077 39.970918-39.96928 104.768307-39.96928 144.730112 0 39.970918 39.960064 39.970918 104.75479 0 144.720077C700.661862 466.171187 635.864474 466.171187 595.893555 426.206003zM358.53312 769.516032c-31.923302-4.573184-54.890394-18.410291-71.41847-35.402342-16.984474-16.526438-30.830387-39.495475-35.405824-71.420621-4.649062-28.082586-20.856832-41.167565-38.76649-38.763827-17.906586 2.40681-77.046886 66.714419-80.857805 89.475891-3.80887 22.752154 29.271859 12.081152 46.424166 27.654861 17.151283 15.590093-2.139853 61.93664-14.733107 86.845952-6.441984 12.735078-10.289766 26.42176-4.22953 33.76087 7.346586 6.070272 21.03593 2.222592 33.769472-4.220109 24.912384-12.585677 71.258829-31.872922 86.842368-14.731469 15.583539 17.160806 4.911002 50.229965 27.674419 46.419251 22.754099-3.807744 87.065395-62.946611 89.466163-80.85248C399.70857 790.374093 386.627072 774.166938 358.53312 769.516032z',
        'M416.832 798.08C400.64 798.08 384.512 791.872 372.16 779.52L119.424 525.76C94.784 500.992 94.784 460.8 119.424 436.032 144.128 411.264 184.128 411.264 208.768 436.032L416.832 644.928 814.4 245.76C839.04 220.928 879.04 220.928 903.744 245.76 928.384 270.528 928.384 310.656 903.744 335.424L461.504 779.52C449.152 791.872 432.96 798.08 416.832 798.08Z',
        'M512 64l15.36 0.256A448 448 0 0 1 960 512a448 448 0 1 1-448-448z m0 64a384 384 0 1 0 0 768A384 384 0 0 0 512 128z m2.24 294.4c18.56 0 33.6 15.04 33.6 33.6v246.4a33.6 33.6 0 1 1-67.2 0v-246.4c0-18.56 15.04-33.6 33.6-33.6z m0-143.04a42.24 42.24 0 1 1 0 84.48 42.24 42.24 0 0 1 0-84.48z" fill="#E8541E" p-id="16607" style="user-select: auto;'
      ];
      var colors = [
        '#c4332b', '#f19149', '#6862FD', '#70e070','#f19149',
      ];

      function getVirtulData(year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate((+year + 1) + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
          var items = [];
          var eventCount = Math.round(Math.random() * pathes.length);
          for (var i = 0; i < eventCount; i++) {
            items.push(Math.round(Math.random() * (pathes.length - 1)));
          }
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            items.join('|')
          ]);
        }
        return data;
      }

      function renderItem(params, api) {
        var cellPoint = api.coord(api.value(0));
        var cellWidth = params.coordSys.cellWidth;
        var cellHeight = params.coordSys.cellHeight;

        var value = api.value(1);
        var events = value && value.split('|');

        if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
          return;
        }

        var group = {
          type: 'group',
          children: echarts.util.map(layouts[events.length - 1], function (itemLayout, index) {
            return {
              type: 'path',
              shape: {
                // pathData: pathes[events[index]],
                pathData: pathes[events[index]],
                x: -8,
                y: -8,
                width: 16,
                height: 16
              },
              position: [
                cellPoint[0] + echarts.number.linearMap(itemLayout[0], [-0.5, 0.5], [-cellWidth / 2, cellWidth / 2]),
                cellPoint[1] + echarts.number.linearMap(itemLayout[1], [-0.5, 0.5], [-cellHeight / 2 + 20, cellHeight / 2])
              ],
              style: api.style({
                fill: colors[events[index]]
              })
            };
          }) || []
        };

        group.children.push({
          type: 'text',
          style: {
            x: cellPoint[0],
            y: cellPoint[1] - cellHeight / 2 + 15,
            text: echarts.format.formatTime('dd', api.value(0)),
            fill: '#777',
            textFont: api.font({fontSize: 14})
          }
        });

        return group;
      }
      this.chart.setOption( {
        tooltip: {
        },
        calendar: [{
          left: 'center',
          top: 'middle',
          cellSize: [70, 70],
          yearLabel: {show: false},
          orient: 'vertical',
          dayLabel: {
            firstDay: 1,
            nameMap: 'cn'
          },
          monthLabel: {
            show: false
          },
          range: '2020-09'
        }],
        series: [{
          type: 'custom',
          coordinateSystem: 'calendar',
          renderItem: renderItem,
          dimensions: [null, {type: 'ordinal'}],
          data: getVirtulData(2020)
        }]
      })
    },
  }

}
</script>

<style scoped>

</style>
