import phone from '../assets/phone.png'
import icon from '../assets/icon.png'

function Header(){
    return(
        <div className="header">
            
            <div className="littleHeader">
                <h3 className="Geo">
                    GEO  ENG
                </h3>
                <h3 className="Eng">
                    
                </h3>
                <h3 className="Phone">
                    <img src={phone} alt="" />
                    557 74 79 10
                    
                </h3>
                <div className="icon">
                    <img src={icon} className="icon1" alt="" />
                    <h2>
                        log in
                    </h2>
                </div>
               
            </div>
        </div>
    )
}

export default Header