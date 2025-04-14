import { Component } from "react";

// export class ClassComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "John Doe",
//             age: 30,
//             location: "New York",
//         }
//     }

//     // static getDerivedStateFromProps(props, state) {
//     //     console.log(props, "props");
//     //     console.log(state, "state");

//     //     return {
//     //         name: props.name,
//     //     }

//     //     // return null; // Return null to indicate no state change
//     // }

//     // shouldComponentUpdate() {
//     //     return false;
//     // }


//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log(prevProps, "prevProps");
//         console.log(prevState, "prevState");
//         return null;
//         // document.getElementById("div1").innerHTML =
//         //     "Before the update, the favorite was " + prevState.favoritecolor;
//     }


//     componentDidMount() {
//         console.log("componentDidMount called");

//         setTimeout(() => {
//             this.setState({ name: "REACT🤩" })
//         }, 1000)
//     }


//     componentDidUpdate(prevProps, prevState) {
//         console.log("ComponentDidMount called");

//         console.log(prevProps, "prevProps");
//         console.log(prevState, "prevState\n");
//         console.log("-------------------------");
//     }

//     handleChange = () => {
//         // ❌ Wrong way to change state
//         // this.state.name = "Jane Doe";
//         // this.state.age = 25;
//         // this.state.location = "Los Angeles";
//         this.setState({
//             name: "Imran",
//             age: 20,
//             location: "Puducherry",
//         });

//         console.log(this.state);

//     }



//     render() {
//         // console.log(this);

//         return (
//             <div>
//                 <h1>{this.props.data}</h1>
//                 <h2>Name : {this.state.name}</h2>
//                 <h2>Age : {this.state.age}</h2>
//                 <h2>Location : {this.state.location}</h2>
//                 <h3>Class Component</h3>
//                 <p>This is a class component.</p>
//                 <button onClick={this.handleChange}>Change</button>
//             </div>
//         );
//     }
// }



export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = "REACT"
    }

    handleChange = () => {
        setState("ReactJS");
    }

    render() {
        return (
            <>
                <div>{this.state} ClassComponent</div>
                <button onClick={handleChange}>Change</button>
            </>
        )
    }
}

