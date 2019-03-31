import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import withData from '../lib/withData';
import Page from '../components/Page';

/**
 * Next.js App component override. This file must be named _app.js
 * This is a component that will be wrapping all pages in the app
 * This is also where we put state that we want to be persistent among the pages,
 * as every component from the app will have the state declared here
 */
class MyApp extends App {
	/**
	 * getInitialProps receives a context (ctx) object with the following properties:
	 * @param pathname - path section of URL
	 * @param query - query string section of URL parsed as an object
	 * @param asPath - String of the actual path (including the query) shows in the browser
	 * @param req - HTTP request object (server only)
	 * @param res - HTTP response object (server only)
	 * @param err - Error object if any error is encountered during the rendering
	 */
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		// This exposes the query to the user (we'll need this later for pagination)
		pageProps.query = ctx.query;

		return pageProps;
	}

	render() {
		const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
					<Page>
						<Component />
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withData(MyApp);
