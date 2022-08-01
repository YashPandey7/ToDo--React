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

    const deletebtn = (id) => {
        // console.log('deleted');
        // console.log(id);

        setaddedvalue((olditems) => {
            return olditems.filter((arr, index) => {
                return index !== id ;
            });
        });

    };

    return(
        <>
            <div className='bg'>
                <div className='container card p-3 mb-5 rounded a'>
                    <h1 className='heading'>ToDo List</h1>
                
                    <form onSubmit={submit}>
                       <span className='input' style={{float:'left'}}>
                            <input type='text' placeholder='Enter Items to add' className="form-control " onChange={inputevent} value={inputvalue} required/>
                        </span>
                        <span className='submitbtn'>
                            <button type="submit" className="btn btn-primary active" style={{float:'right'}}>
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </button>
                        </span>
                    </form><br/>

                    <div className='list'>
                        <ol className="list-group list-group-flush">
                            
                            {addedvalue.map((val ,index) => {
                                    return(
                                        <>
                                            <List 
                                            key={index}
                                            id={index}
                                            listvalue={val}
                                            showindex={index+1} 
                                            delete={deletebtn}
                                            />
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