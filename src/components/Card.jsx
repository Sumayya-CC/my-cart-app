import { Component } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

class Card extends Component {
    onPlus = (count) => {
        this.props.setCount(this.props.index, count + 1);
    }
    onMinus = (count) => {
        if (count > 0) {
            this.props.setCount(this.props.index, count - 1);
        }
    }
    render() {
        const itemStyle = { paddingTop: "10px", fontSize: "20px" };
        return (
            <div className="row">
                <div style={itemStyle} className="box">{this.props.item.name} - ₹{this.props.item.price}</div>
                <div className="MT30">
                    <FaMinusCircle className="icon"
                        onClick={() => this.onMinus(this.props.item.count)} />
                    <span className="M10">{this.props.item.count}</span>
                    <FaPlusCircle className="icon"
                        onClick={() => this.onPlus(this.props.item.count)} />
                </div>
            </div>
        )
    }
}
export default Card;