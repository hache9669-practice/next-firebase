import React from 'react';
import Head from 'next/head';
import {CountButton} from '../components/CountButton';

type Props = {
    title: string;
}

class App extends React.Component<Props> {
    static async getInitialProps(): Promise<Props> {
        return { title: 'Hello World' };
    }

    render() {
        return <>
            <Head>
                <title>{this.props.title}</title>
            </Head>
            <CountButton initial={0}/>
        </>
    }
}

export default App;
