import React from 'react';
import './css/switch.css';

export default class Switch extends React.Component {

    state = {
        toggle: false
    };

    toggle = () => {
        this.setState(state => ({
            toggle: !state.toggle
        }))
    };

    render() {
        const btnClassName = this.state.toggle
            ? 'toggle-btn'.concat(' toggle-btn-on')
            : 'toggle-btn'.concat(' toggle-btn-off');

        return <div>
            <input className='toggle-input'/>
            <button className={btnClassName} onClick={this.toggle}/>
        </div>
    }
}
