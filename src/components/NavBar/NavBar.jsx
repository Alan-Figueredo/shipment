import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faQrcode, faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"
export const NavBar = ()=>{

    return(
            <div id="Navbar">
                <ul>
                    <li>
                        <button id="burger">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </li>
                    <li>
                        <select name="Create New" id="" >
                            <option value="">Create New</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <select name="Create New" id="" >
                            <option value="">Mega Menu</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <input type="search" name="NavSearch" id="NavSearch" placeholder="Search..."/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faQrcode} id="qrCode" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faQrcode} id="qrCode" />
                    </li>
                    <li>
                        <img src="images/USAFlag.png" alt="UsaFlag" id="flag"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell} id="bell"/>
                        <span className="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-danger">0</span>
                    </li>
                    <li>
                        <select name="Create New" id="" >
                            <option value="">Geneva</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGear} id="gear"/>
                    </li>
                </ul>
            </div>
    );
}