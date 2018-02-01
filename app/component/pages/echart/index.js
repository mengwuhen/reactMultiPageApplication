import React from 'react';
import ReactEcharts from 'echarts-for-react';
export default class Index extends React.Component {
   
    render() {
        const PieOption = () => {
            return  {
                title: {
                    text: '饼图'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: "horizontal",
                    x: "center",
                    y: 'bottom',
                    data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                },
                series: [
                    {
                        name:'',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
            
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直达', selected:true},
                            {value:679, name:'营销广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    },
                    {
                        name:'',
                        type:'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: ' {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                   
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data:[
                            {value:335, name:'直达'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1048, name:'百度'},
                            {value:251, name:'谷歌'},
                            {value:147, name:'必应'},
                            {value:102, name:'其他'}
                        ]
                    }
                ]
            }
            
        }

        const RadarOption = () => {
            return   {
                title: {
                    text: '多雷达图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'center',
                    data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
                },
                radar: [
                    {
                        indicator: [
                            {text: '品牌', max: 100},
                            {text: '内容', max: 100},
                            {text: '可用性', max: 100},
                            {text: '功能', max: 100}
                        ],
                        center: ['25%','40%'],
                        radius: 80
                    },
                    {
                        indicator: [
                            {text: '外观', max: 100},
                            {text: '拍照', max: 100},
                            {text: '系统', max: 100},
                            {text: '性能', max: 100},
                            {text: '屏幕', max: 100}
                        ],
                        radius: 80,
                        center: ['50%','60%'],
                    },
                    {
                        indicator: (function (){
                            var res = [];
                            for (var i = 1; i <= 12; i++) {
                                res.push({text:i+'月',max:100});
                            }
                            return res;
                        })(),
                        center: ['75%','40%'],
                        radius: 80
                    }
                ],
                series: [
                    {
                        type: 'radar',
                         tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [
                            {
                                value: [60,73,85,40],
                                name: '某软件'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 1,
                        data: [
                            {
                                value: [85, 90, 90, 95, 95],
                                name: '某主食手机'
                            },
                            {
                                value: [95, 80, 95, 90, 93],
                                name: '某水果手机'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 2,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [
                            {
                                name: '降水量',
                                value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                            },
                            {
                                name:'蒸发量',
                                value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
                            }
                        ]
                    }
                ]
            };
            
        }

        
        return(
            <div style={{overflow:'hidden'}}>
            <ReactEcharts
                style={{height: '300px', width: '100%'}}
                option={PieOption()}
                notMerge={true}
                lazyUpdate={true}
            />

            <ReactEcharts
                style={{height: '300px', width: '100%',marginTop:'25px'}}
                option={RadarOption()}
                notMerge={true}
                lazyUpdate={true}
            />

            </div>)
    }
}