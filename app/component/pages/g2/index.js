import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend , Coord, Shape} from 'bizcharts';
// import BizCharts from 'bizcharts'
import DataSet from '@antv/data-set'
import {assign} from 'lodash'



//柱状图
const data = [
    { genre: 'Sports', sold: 275, income: 2300 },
    { genre: 'Strategy', sold: 115, income: 667 },
    { genre: 'Action', sold: 120, income: 982 },
    { genre: 'Shooter', sold: 350, income: 5271 },
    { genre: 'Other', sold: 150, income: 3710 }
  ];
  
  // 定义度量
  const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
  };

  //词云
const wordData = [{
    "x": "China",
    "value": 1383220000,
    "category": "asia"
  }, {
    "x": "India",
    "value": 1316000000,
    "category": "asia"
  }, {
    "x": "United States",
    "value": 324982000,
    "category": "america"
  }, {
    "x": "Indonesia",
    "value": 263510000,
    "category": "asia"
  }, {
    "x": "Brazil",
    "value": 207505000,
    "category": "america"
  }, {
    "x": "Pakistan",
    "value": 196459000,
    "category": "asia"
  }, {
    "x": "Nigeria",
    "value": 191836000,
    "category": "africa"
  }, {
    "x": "Bangladesh",
    "value": 162459000,
    "category": "asia"
  }, {
    "x": "Russia",
    "value": 146804372,
    "category": "europe"
  }, {
    "x": "Japan",
    "value": 126790000,
    "category": "asia"
  }, {
    "x": "Mexico",
    "value": 123518000,
    "category": "america"
  }, {
    "x": "Ethiopia",
    "value": 104345000,
    "category": "africa"
  }]

  function getTextAttrs(cfg) {
    return assign({}, {
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,
        rotate: cfg.origin._origin.rotate,
        text: cfg.origin._origin.text,
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,
        fill: cfg.color,
        textBaseline: 'Alphabetic'
    }, cfg.style);
}

 // 给point注册一个词云的shape
 Shape.registerShape('point', 'cloud', {
    drawShape(cfg, container) {
        const attrs = getTextAttrs(cfg);
        return container.addShape('text', {
            attrs: assign(attrs, {
                x: cfg.x,
                y: cfg.y
            })
        });
    }
});

const dv = new DataSet.View().source(wordData);
const range = dv.range('value');
const min = range[0];
const max = range[1];
dv.transform({
    type: 'tag-cloud',
    fields: ['x', 'value'],
    size: [500, 500],
    font: 'Verdana',
    padding: 0,
    timeInterval: 5000, // max execute time
    rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (random == 2) {
            random = 0;
        }
        return random * 90; // 0, 90, 270
    },
    fontSize(d) {
        if (d.value) {
            return ((d.value - min) / (max - min)) * (80 - 24) + 24;
        }
        return 0;
    }
})

    const scale={
        x: {nice: true},
        y: {nice: true}
      }
  



  export default class Index extends React.Component{
      render(){
          return (
              <div style={{overflow:'hidden'}}>
                    <div style={{float:'left'}}>
                        <Chart width={600} height={500} data={data} scale={cols}>
                            <Axis name="genre" />
                            <Axis name="sold" />
                            <Legend position="top" dy={-20} />
                            <Tooltip />
                            <Geom type="interval" position="genre*sold" color="genre" />
                        </Chart>
                    </div>

                    <div style={{width:'500px',height:'500px',border:'1px solid transparent',float:'right'}} >
                        <Chart  data={dv} scale={scale} padding={0} forceFit style={{marginTop:'25px'}}>
                            <Tooltip showTitle={false} />
                            <Coord reflect="y"  />
                            <Geom type='point' position="x*y" color="category" shape='cloud' tooltip='value*category' />
                        </Chart>
                    </div>
                   
              </div>
          )
      }
  }