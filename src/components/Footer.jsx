import React, { PureComponent } from 'react'
//<h1 className='bg-blue-500 w-full mx-auto py-4 h-[calc(100vh-550px)] mt-[30px]'>Footer</h1>
class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <footer class="p-4">
                <p>© Copyright 2025 Arkady Co. . All Rights Reserved.</p>
            </footer>
        )
    }
}

export default Footer