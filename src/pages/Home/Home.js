import React, { Component } from 'react';
import axios from "axios";
import Chart from "react-google-charts";
import Form from '../../components/Form/Form';
import './Home.css'

class Home extends Component {

    state = {
        chartData: []
    }

    componentDidMount() {
        axios.get(`https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow`)
            .then(res => {
                const jsonObj = res.data
                let proessedData = [];
                jsonObj.items.map((item) => {
                    proessedData.push([item.name, item.count])
                });
                this.setState({ chartData: proessedData});
            })
    }

    convertToTimeStamp = (timeStr) => {
        
        timeStr = timeStr.split("-");
        timeStr.reverse();
        var newDate = new Date(timeStr[2], timeStr[1] - 1, timeStr[0]);
        console.log(newDate.getTime());
        return newDate.getTime();
    }

    

    onAdvanceSearchClick = (timeStampArr, pagesize, page) => {


        // let fromdate = this.convertToTimeStamp(timeStampArr[0]);

        
        // let todate = this.convertToTimeStamp(timeStampArr[1]);

        console.log();

        

       
        
        axios.get(`https://api.stackexchange.com/2.2/tags?page=5&pagesize=30&fromdate=1609459200&todate=1612137600&order=desc&sort=popular&site=stackoverflow`).then(res => {
            const jsonObj = res.data
            let proessedData = [];
            jsonObj.items.map((item) => {
                console.log(item, '>>>>')
                proessedData.push([item.name, item.count])
            });
            this.setState({ chartData: proessedData });
        })
    }



    render() {
        const { chartData } = this.state;
        if (chartData && chartData.items && chartData.items.length === 0) return <p>No enteries...</p>;
        return (
            <div className="chartWrapper">
                <Chart
                    width={'100%'}
                    height={'40vh'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Subject', 'Count'],
                        ...chartData
                    ]}
                    options={{
                        chart: {
                            title: 'Stackoverflow Dataset',
                            subtitle: 'Subjects vs Counts',
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
                <Form onSubmit={this.onAdvanceSearchClick} search={this.onAdvanceSearchClick}/>
            </div>
        );
    }
}

export default Home;



