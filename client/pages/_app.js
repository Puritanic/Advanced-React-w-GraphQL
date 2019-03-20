import App, { Container } from 'next/app';
import Page from '../components/Page';

/**
 * Next.js App component override. This file must be named _app.js
 * This is a component that will be wrapping all pages in the app
 * This is also where we put state that we want to be persistent among the pages,
 * as every component from the app will have the state declared here
 */
class MyApp extends App {
	render() {
		const { Component } = this.props;

		return (
			<Container>
				<Page>
					<Component />
				</Page>
			</Container>
		);
	}
}

export default MyApp;
