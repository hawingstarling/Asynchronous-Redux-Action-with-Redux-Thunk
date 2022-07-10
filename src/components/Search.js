import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserName } from './../actions'

function Search() {
    const [inputName, setInputName] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchUserName(inputName))
    }

    return ( 
        <div className="wrapper">
            <p>Enter username</p>
            <form action="">
                <input 
                    value={inputName} 
                    type="text" 
                    onChange={(e) => setInputName(e.target.value)} 
                    placeholder="Input name in here..." 
                />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
     );
}

export default Search;