import React from 'react';
import { Link } from 'react-router';

function Tab(props) {
    const style = {
        border: '1px solid #000',
        flexGrow: 1
    };
    return(
        <div style={style} >
            <Link activeClassName="current" to={"/"+props.name}>{props.name}</Link>
        </div>
    );
}

export default class Header extends React.Component {
    render() {
        return(
            <nav>
                <h1>FOMO</h1>
                <div className="tab-bar">
                    <Tab name="Feed" />
                    <Tab name="Nearby" />
                    <Tab name="Friends" />
                    <Tab name="More" />
                </div>
            </nav>
        );
    }
}