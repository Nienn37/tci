import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
            <div class="bg-white shadow-sm">
                <div class="flex justify-start items-center p-4 gap-4">
                    <a href="/">Home </a>
                    <a href="/about">About </a>
                    <a href="/blog">Blog </a>
                </div>
            </div>
        )
    }
}

export default Header