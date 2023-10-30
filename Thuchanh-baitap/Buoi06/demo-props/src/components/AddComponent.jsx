import { Component } from 'react';
class AddComponent extends Component {
    render() {
        return <h1>Total: {this.props.firstNum + this.props.secondNum}</h1>
    }
}
export default AddComponent;