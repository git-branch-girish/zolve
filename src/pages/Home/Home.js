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

    render() {
        const { chartData } = this.state;
        if (chartData && chartData.items && chartData.items.length === 0) return <p>No enteries, sorry</p>;
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
                <Form />
            </div>
        );
    }
}

export default Home;



