import React from 'react';
import { StyleSheet, View, Image,Dimensions,ImageBackground,ScrollView} from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import "react-native-svg";

export default class AreaChartComponent extends React.PureComponent {
    constructor(props){
        super(props);
        
    }
    render() {
        let curwidth = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        const curData = this.props.data;
 
        return (
            <AreaChart
                style={{ height: 200  }}
                data={ curData }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid/>
            </AreaChart>
        )
    }
}