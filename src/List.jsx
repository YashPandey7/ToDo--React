import React from 'react';

const List = (props) => {
    return (
        <>
            <li className="list-group-item list-group-item-action">
                {props.listvalue}
            </li>
        </>
    );
}
export default List;