import React from 'react';
import SecondsTop from './SecondsTop.js'
import SecondsBottom from './SecondsBottom.js'
class Seconds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let state = this.state;
        return (
            <div className="cont">
                <SecondsTop {...this.props} />
                {/*这里我写了三中传值方法*/}
                <SecondsBottom {...state}/>
            </div>
        );
    }
}

export default Seconds;