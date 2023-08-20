
/*search component for movies*/
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Replay from '@mui/icons-material/Replay';
export default function Search(props){
    const { setSearchText, reset } = props;
    const [searchValue, setSearchValue] = useState('');
    // to handle the search keyword
    function handleOnChange(event) {
        setSearchValue(event.target.value);
    };
    function resetValue() {
        reset();
        setSearchValue('');
    };
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: "center",
            width: '80%',
            margin: '0 auto',
        }}>
            <input
                style={{
                    flex: 0.8,
                    height: 34,
                    borderRadius: 5,
                    border: '1px solid #4e5766',
                    boxShadow: '1px 0.5px #07090d',
                    backgroundColor: '#cdd5e3',
                    color: '#151b26'
                }}
                name="text"
                type="text"
                placeholder="Search"
                onChange={event => handleOnChange(event)}
                value={searchValue}
            />
            <button style={{
                flex: 0.2,
                height: 40,
                marginLeft: 2,
                borderRadius: 5,
                borderColor: '313f58',
                backgroundColor: '#151b26',
                color: '#c0cadc'
            }}
                onClick={() => setSearchText(searchValue)}>Search</button>
            <IconButton onClick={resetValue}>
                    <Replay sx={{ color: '#6880ab' }} />
            </IconButton>
        </div>
    );
}