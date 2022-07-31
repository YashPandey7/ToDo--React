import React from 'react';

const App = () => {

    const submit = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <div className='bg'>
                <div className='container card a'>
                    <h1 className='heading'>ToDo List</h1>
                <form onSubmit={submit}>
                <div className="row" >
                    <div className='col-md-8'>
                    <input type='text' placeholder='Enter Items to add' class="form-control"/>
                    </div>
                    <div className='col-md-4'>
                    <button type="submit" class="btn btn-primary active">+</button>
                    </div>
                </div>
                </form>
                    <ol>
                        <li>Apple</li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;