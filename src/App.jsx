import React, { useState } from 'react';

const App = () => {

    const [inputvalue , setinput] = useState('');
    const [addedvalue , setaddedvalue] = useState('');
    
    const inputevent = (event) =>{
        const value = event.target.value;

        setinput(value);
    }

    const submit = (event) => {
        event.preventDefault();
        setaddedvalue(inputvalue);
    }

    return(
        <>
            <div className='bg'>
                <div className='container card a'>
                    <h1 className='heading'>ToDo List</h1>
                
                    <form onSubmit={submit}>
                       <div className='input' style={{float:'left'}}>
                            <input type='text' placeholder='Enter Items to add' class="form-control" onChange={inputevent} value={inputvalue}/>
                        </div>
                        <div className='submitbtn'>
                            <button type="submit" class="btn btn-primary active" style={{width:'13%'}}> + </button>
                        </div>
                    </form><br/>

                    <div className='list'>
                        <ol className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-action">{addedvalue}</li>
                            
                            
                            {/* <li className="list-group-item list-group-item-action">orange</li>
                            <li className="list-group-item list-group-item-action">orange</li>
                            <li className="list-group-item list-group-item-action">orange</li> */}
                        </ol>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default App;