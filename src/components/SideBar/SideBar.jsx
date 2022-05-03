import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import "../SideBar/SideBar.css"
export const SideBar =()=>{
    return(
            <div className="col-2 card" id="sideBar">
                <h1 className='mt-3'>Shipment Search</h1>
                <p className='mt-3'>Shipment Number</p>
                <textarea rows="10" cols="50"></textarea>
                <h2>Status</h2>
                <Row>
                    <div className='col-1'>
                        <input type="checkbox" className='mt-2' name=" Auto Tendered" id="AutoTendered" />
                    </div>
                    <div className='col'>
                        <label htmlFor="AutoTendered">AutoTendered</label>
                    </div>
                </Row>
                <Row>
                    <div className='col-1'>
                        <input type="checkbox" className='mt-2' name="Closed" id="Closed" />
                    </div>
                    <div className='col'>
                        <label htmlFor="Closed">Closed</label>
                    </div>
                </Row>
                <Row>
                    <div className='col-1'>
                        <input type="checkbox" className='mt-2 mb-3' name="BOL" id="BOL"/>
                    </div>
                    <div className='col'>
                        <label htmlFor="BOL">BOL</label>
                    </div>
                </Row>

                <label htmlFor="ShipDate">Ship Date</label>
                <input type="text" name="ShipDate" id="ShipDate" />

                <label htmlFor="CreatedDate">Created Date</label>
                <input type="text" name="CreatedDate" id="CreatedDate" />

                <label htmlFor="ShipmentTerms">Shipment Terms</label>
                <select name="ShipmentTerms" id="ShipmentTerms">
                    <option value=""></option>
                </select>
            </div>
    )
}