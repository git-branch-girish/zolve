import React, {Component} from 'react';
import './DatePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, DatePicker,} from 'antd';
import "antd/dist/antd.css";

class DatePickerUI extends Component {

    onChange = (date, dateString, abc) => {
        console.log(date, dateString);
        console.log(abc);
    }

    render() {
        const { RangePicker } = DatePicker;

        const rangeConfig = {
            rules: [
                {
                    allowEmpty: false,
                    type: 'array',
                    message: 'Please select time!',
                },
            ],
        };

        
        
        const TimeRelatedForm = () => {
            const onFinish = (fieldsValue) => {
                // Should format date value before submit.
                const rangeValue = fieldsValue['range-picker'];

                const values = {
                    ...fieldsValue,
                    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),

                    'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],

                };

                //Getting input values
                console.log('Received values of form: ', values);
            };

            return <Form.Item name="range-picker" label="Date Picker" {...rangeConfig}>
                <RangePicker/>
            </Form.Item>;
        };
        return <TimeRelatedForm />
}

}
export default DatePickerUI;