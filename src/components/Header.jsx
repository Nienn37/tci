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
                    <a href="/">Главная </a>
                    <a href="/about">О нас </a>
                    <a href="/blog">Блог </a>
                    <a href="/cart">Корзина</a>
                </div>
            </div>
        )
    }
}

export default Header