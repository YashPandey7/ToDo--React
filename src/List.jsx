import React from 'react';

const List = (props) => {
    
    

    return (
        <>
            
            {/* <li className="list-group-item list-group-item-action" >
                <div className='row'>
                    <div className='col-2'>
                        <span className='listindex'>{props.showindex}.</span>
                    </div>
                    
                    <div className='col-8'>
                        <span>{props.listvalue}</span>
                    </div>
                    
                    
                    <div className='col-2'> 
                        <button className="material-symbols-outlined btn btn-primary active" style={{padding:'8px'}} 
                        onClick={() => {
                            props.delete(props.id)
                        }}>delete</button>  
                    </div>
                    
                </div>  
            </li> */}

            <div style={{borderBottom:'1px solid #bbb', paddingBottom:'10px' , marginTop:'10px'}}>
                <span className='listindex' style={{float:'left', width:'10%'}}>{props.showindex}.</span>
                    
                <span>
                    <li className="list-group abc" style={{float:'left'}}>{props.listvalue}</li>
                </span>
                   
                <button className="material-symbols-outlined btn btn-primary active" style={{float:'Right'}} onClick={() => {
                        props.delete(props.id)
                    }}>delete</button>  
            </div>
            
            
        </>
    );
}
export default List;