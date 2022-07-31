import React from 'react';

const List = (props) => {
    
    const deletebtn = () => {
        console.log('deleted');
    }

    return (
        <>
            
            <li className="list-group-item list-group-item-action" >
                <div className='row'>
                    <div className='col-2'>
                        <span className='listindex'>{props.showindex}.</span>
                    </div>
                    
                    <div className='col-8'>
                        <span>{props.listvalue}</span>
                    </div>
                    
                    
                    <div className='col-2'> 
                        <button className="material-symbols-outlined btn btn-primary" style={{padding:'8px'}} onClick={deletebtn}>delete</button>  
                    </div>
                    
                </div>  
            </li>
        </>
    );
}
export default List;