import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
@see https://nextjs.org/docs/#custom-document
 * @desc _document is only rendered on the server side and not on the client side. This is going to compile app with rendered styles
 * so that we can avoid FOUC - flash of un-styled content.
 * Note that event handlers like onClick can't be added to this file
 */
export default class MyDocument extends Document {
	/**
	 * Will always run before render happens - getInitialProps will render on the server
	 * We can fetch data here, or just collectStyles in this case
	 */
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html lang="en">
				<Head>{this.props.styleTags}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
