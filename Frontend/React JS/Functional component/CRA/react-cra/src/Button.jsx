import React from 'react';

function Button(props){
    const [click, setClick] = React.useState(0);

    return (
        <>
            <button className="Button" onClick={setClick.bind(this, click + 1)}>{props.children}</button>
            <p>{click}</p>
        </>
    )
}

export default Button;