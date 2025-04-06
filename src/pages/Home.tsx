import React, { PureComponent, ReactNode } from 'react'
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Text } from '../components/Text';

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <>
                <Button size="medium" color="primary" title="Принять" onClick={()=>alert("hello")}/>
                <Text size="large" color="primary" align="left" title="Hello, world!"/>
                <Input size="large" borderColor="primary" placeholder="Hello"/>
            </>
        )
    }
}

export default Home
