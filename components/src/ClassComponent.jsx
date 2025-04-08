import { Component } from "react";

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "John Doe",
            age: 30,
            location: "New York",
        }
    }

    handleChange = () => {
        // this.state.name = "Jane Doe";
        // this.state.age = 25;
        // this.state.location = "Los Angeles";
        this.setState({
            name: "Imran",
            age: 20,
            location: "Puducherry",
        });

        console.log(this.state);

    }


    render() {
        // console.log(this);

        return (
            <div>
                <h1>{this.props.data}</h1>
                <h2>Name : {this.state.name}</h2>
                <h2>Age : {this.state.age}</h2>
                <h2>Location : {this.state.location}</h2>
                <h3>Class Component</h3>
                <p>This is a class component.</p>
                <button onClick={this.handleChange}>Change</button>
            </div>
        );
    }
}

