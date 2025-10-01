import React from "react";

function AddButton ({ handleClick }) {
    const [chidl, setChild] = React.useState(0);
    return (
    <button onClick={handleClick}>Add Child</button>
    );

}
export default AddButton;