import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='bg-yellow-400'>
                <a href="/">Home </a>
                <a href="/about">About </a>
                <a href="/blog">Blog </a>
            </div>
        )
    }
}

export default Header