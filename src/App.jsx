import React, { useState } from 'react';
import List from './List';

const App = () => {

    const [inputvalue , setinput] = useState('');
    const [addedvalue , setaddedvalue] = useState([]);
    
    const inputevent = (event) =>{
        const value = event.target.value;
        setinput(value);
    }

    const submit = (event) => {
        event.preventDefault();
        setaddedvalue((olditems) => {
            return [...olditems , inputvalue];
        });
        setinput('');
    }


    return(
        <>
            <div className='bg'>
                <div className='container card a'>
                    <h1 className='heading'>ToDo List</h1>
                
                    <form onSubmit={submit}>
                       <div className='input' style={{float:'left'}}>
                            <input type='text' placeholder='Enter Items to add' className="form-control" onChange={inputevent} value={inputvalue} required/>
                        </div>
                        <div className='submitbtn'>
                            <button type="submit" className="btn btn-primary active" style={{width:'13%'}}> + </button>
                        </div>
                    </form><br/>

                    <div className='list'>
                        <ol className="list-group list-group-flush">
                            
                            {addedvalue.map((val ,index) => {
                                    return(
                                        <>
                                            <List listvalue={val} showindex={index+1} />
                                        </>
                                    );
                                }
                            )}
                            
                        </ol>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default App;