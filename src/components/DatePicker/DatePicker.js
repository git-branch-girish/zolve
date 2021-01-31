import React, {Component} from 'react';
import './DatePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, DatePicker,} from 'antd';
import "antd/dist/antd.css";

class DatePickerUI extends Component {

    // onChange = (date, dateString, abc) => {
    //     console.log(date, dateString);
    //     console.log(abc);
    // }

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

        return <Form.Item name="range-picker" label="Date Picker" {...rangeConfig}>
            <RangePicker />
        </Form.Item>;
}

}
export default DatePickerUI;