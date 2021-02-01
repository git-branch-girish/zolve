import {Component} from 'react'; 
import DatePicker from '../DatePicker/DatePicker'
import './Form.css';

class Form extends Component{

    state = {
        timeStamps:'',
        pagesize: '',
        page:'',
        error: false,
        errMsg: ''
    }

    dateTimeStamp = (dateString) => {
        // console.log(dateString,'2222>>>>>>>>>>>>');
        this.setState({
            timeStamps:dateString
        })
    }

    onPageSizeChange = (e) => {
        this.setState({
            pagesize: e.target.value
        })
    }

    onPageChange = (e) => {
        this.setState({
            page: e.target.value
        })
    }

    onSubmitHandler= () => { 
        const { timeStamps, pagesize, page} = this.state;
        if (timeStamps && pagesize && page ) {
            this.props.search(timeStamps, pagesize, page);
            this.setState({
                error: false,
                errMsg: ''
            })
            
        }else{
            this.setState({
                error: true,
                errMsg: 'All feilds are required!!!'
            })
        }
    }


    render() {
        return (
            <div>
                <h4 className="advanceSearch">Advance Search</h4>
                <div className="formController">
                    <DatePicker selectedDates={this.dateTimeStamp}/>

                    <div style={{ width: '100%' }}>
                        <label>Pagesize*:</label>
                        <input 
                            style={{ width: '100%'}} 
                            type="number" 
                            name="pagesize" 
                            className="pageSize" 
                            onChange={this.onPageSizeChange}
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <label>Page:*</label>
                        <input 
                            style={{ width: '100%' }} 
                            type="number" 
                            name="page" 
                            className="page" 
                            onChange={this.onPageChange}
                        />
                    </div>

                </div>
                {this.state.error && <p style={{color: 'red'}}>{this.state.errMsg}</p>}
                <input className="searchBtn" type="submit" value="Submit" onClick={this.onSubmitHandler} />
            </div>
        );
    }
    
}

export default Form;
