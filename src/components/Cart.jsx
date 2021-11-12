import { Component } from "react";
import Card from "./Card";
import Form from "./Form";
import "./Style.css";

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            items: [
                { name: "Bottle", price: 60, count: 0 },
                { name: "Pen", price: 5, count: 0 },
                { name: "Book", price: 20, count: 0 },
                { name: "Bag", price: 500, count: 0 },
                { name: "Umbrella", price: 400, count: 0 },
            ],
            total: 0
        }
    }
    getName = (data) => {
        this.setState({ name: data })
    }
    setCount = (index, count) => {
        this.setState({
            items: this.state.items.map((item, i) => {
                return index !== i ? item : { ...item, count: count }
            })
        }, () => { this.totalPrice() });
    }
    totalPrice = () => {
        let total = 0;
        this.state.items.map((item, i) => total += item.price * item.count);
        this.setState({ total: total });
    }
    render() {
        return (
            <div className="center">
                {!this.state.name && <Form getName={this.getName} />}
                {this.state.name && <div>
                    <h1>{this.state.name}'s Cart</h1>
                    {this.state.items.map((item, i) => {
                        return <Card key={i} item={item} index={i}
                            setCount={this.setCount} />
                    })}
                    <h2>Total: ₹{this.state.total}</h2>
                </div>}
            </div>
        )
    }
}
export default Cart;