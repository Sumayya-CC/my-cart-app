import { Component } from "react";
import "./Style.css";

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }
    handleChange = (event) => {
        this.setState({name:event.target.value})
    }
    submit = (event) => {
        event.preventDefault();
        this.props.getName(this.state.name);
        this.setState({name:""})
    }
    render() {
        return (
            <div className="center M30">
                <form onSubmit={this.submit}>
                    <label>Enter your name:</label>
                    <input type="text" id="user" className="input"
                    value={this.state.name} required
                    onChange={this.handleChange}/>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default Form;