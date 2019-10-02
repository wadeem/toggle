import React from 'react';
import './css/switch.css';

export default class Switch extends React.Component {
    state = {
        toggle: false
    };

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };

    render() {
        const buttonClassName = this.state.toggle
            ? 'toggle-btn'.concat(' toggle-btn-on')
            : 'toggle-btn'.concat(' toggle-btn.off');
        return <div>
            <input className='toggle-input'/>
            <button className={buttonClassName}
                    onClick={this.toggle}
            />
        </div>
    }
}
