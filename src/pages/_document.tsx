import * as React from 'react';
import Document, { DocumentContext } from 'next/document';
import DefaultLayout from '../layouts/index'
import { ServerStyleSheet } from 'styled-components';

/**
 * 全ページの高階コンポーネント
 * サーバサイドで実行される共通処理を記述する。
 */
export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
        })

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
        };
    }

    render() {
        return <DefaultLayout />
    }
}