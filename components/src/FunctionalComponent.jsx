import { useState } from "react";


// export const FunctionalComponent = () => {
//     // console.log(useState(5))
//     // const state = useState("REACT");
//     const [state, setState] = useState("REACT");
//     // let name = "React";


//     const handleChange = () => {
//         // name = "ReactJS";
//         // console.log(name);
//         // state[1]("ReactJS");
//         setState("ReactJS");

//     }

//     return (
//         <>
//             <div>{state} Functional Component</div>
//             <button onClick={handleChange}>Change</button>
//         </>
//     );
// };


export const FunctionalComponent = () => {
    const [state, setState] = useState("REACT");

    const handleChange = () => {
        setState("ReactJS");
    }

    return (
        <>
            <div>{state} Functional Component</div>
            <button onClick={handleChange}>Change</button>
        </>
    );
};
