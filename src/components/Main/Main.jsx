import { Container, Row } from "react-bootstrap"
import ShipmentInformation from "../ShipmentInformation/ShipmentInformation"
import { SideBar } from "../SideBar/SideBar"
import "../Main/Main.css"
import { ManageShipments } from "../Manage Shipments/ManageShipments"
import { Shipments } from "../Shipments/Shipments"
export const Main =()=>{
    return(
        <div style={{backgroundColor:"rgb(242, 242, 244)"}}>
            <Row>
                <SideBar/>
                <div className="col" id="Main">
                    <Row>
                        <ShipmentInformation/>
                    </Row>
                    <ManageShipments/>
                    <Shipments/>
                </div>
            </Row>

        </div>

    )
}