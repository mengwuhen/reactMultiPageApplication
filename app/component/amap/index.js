import React from 'react'
import { Map } from 'react-amap';
import Heatmap from 'react-amap-plugin-heatmap';

export default class Index extends React.Component {
    
    render(){
        const points = [
            {"lng":116.191031,"lat":39.988585,"count":100},
            {"lng":116.389275,"lat":39.925818,"count":60},
            {"lng":116.287444,"lat":39.810742,"count":200},
            {"lng":116.481707,"lat":39.940089,"count":30},
            {"lng":116.410588,"lat":39.880172,"count":200},
            {"lng":116.394816,"lat":39.91181,"count":10},
            {"lng":116.416002,"lat":39.952917,"count":150}
        ];

        const visible = true; 
        const radius = 30; 
        const gradient = {
            '0.8':'rgb(255, 255, 0)',
            '0.5':'rgb(255, 0, 255)',
            '0.2':'rgb(0, 255, 255)',
        };
        const zooms = [3, 18];
        const dataSet = {
          data: points,
          max: 100
        }
         
        const pluginProps = {
          visible,
          radius,
          gradient,
          zooms,
          dataSet
        }

  
        const events = {
            created: (ins) => {console.log(ins)},
            click: (e) => {console.log(e)}
        }
        return (
            <div style={{width: '500px', height: '500px'}}>
                <Map  amapkey={'788e08def03f95c670944fe2c78fa76f'} events={events} >
                    <Heatmap {...pluginProps} />
                </Map>
            </div>
        )
    }
}