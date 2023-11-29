import React, { useContext } from 'react';
import './LandingPage.css';
import { AuthContext } from './Auth';
import { Button } from '@mui/material';
import { Link} from 'wouter';

const LandingPage: React.FC = () => {
    const customButtonStyle = {
        color: 'white',
    };

    const EmployeeLogin = () => {
        const { role } = useContext(AuthContext);
        if (role === '') 
        {
            return  <Link to="/login">
                        <Button style={customButtonStyle} className="button-hover-effect">
                            Employee Login
                        </Button>
                    </Link>
        }
        return <div></div>
    }

    return (

        <div className="landing-page background-image">
            <div className="content">
                <h1>MESS WAFFLES</h1>
                <div id='customer-button-container'>
                    <Link to="/customer">
                        <a>
                            <Button id='customer-button'style={customButtonStyle} className="button-hover-effect">
                                Order Here
                            </Button>
                        </a>

                    </Link>
                </div>
                
                <EmployeeLogin />
                <Link to="/managerItems">
                    <Button style={customButtonStyle} className="button-hover-effect">
                        manager temp
                    </Button>
                </Link>
                <Link to="/managerIngredients">
                    <Button style={customButtonStyle} className="button-hover-effect">
                        manager ingredients
                    </Button>
                </Link>
                <Link to="/server">
                    <Button style={customButtonStyle} className="button-hover-effect">
                        Server page
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default LandingPage;










