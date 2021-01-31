import DatePicker from '../DatePicker/DatePicker'
import './Form.css';

function Form() {
    return (
        <div>
            <h4 className="advanceSearch">Advance Search</h4>
            <div className="formController">
                <DatePicker/>
                <div style={{width:'100%'}}>
                    <label>Pagesize:</label>
                    <input style={{ width: '100%' }} type="text" name="pagesize" className="pageSize"/>
                </div>
                  
                <div style={{ width: '100%' }}>
                    <label>Page</label>
                    <input style={{ width: '100%' }} type="text" name="page" className="page"/>
                 </div>            
            </div>
            <input className="searchBtn" type="submit" value="Submit" />
        </div>
    );
}

export default Form;
