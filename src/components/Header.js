import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    return (
        <header className="header">
            <h3>Job Finder</h3>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

export default Header
