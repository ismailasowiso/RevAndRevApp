import React from 'react';
import logo from './logo.svg';
import moon from './Images/moon2.png';
import msgbook from './Images/msgbook.jpeg';
import './App.css';
import { IAppRevRevPropsState } from './Interfaces/IRevRevApp';
import { TOMES } from './Mocks/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterLangue from './Components/FilterLangue';

export class AppRevRev extends React.Component<{}, IAppRevRevPropsState>{
    constructor(props: any) {
        super(props);

        this.state = {
            langue:""
        }
    }
    componentDidMount() {

    }
    render(): JSX.Element {
        return (
            <div className="background-container">
                <img className='moon' src={moon} alt="moon"/>
                <img className='msgbook' src={msgbook} alt="msgbook"/>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <FilterLangue Langue={this.state.langue} />
            </div>
        );
    }
}

export default AppRevRev;
