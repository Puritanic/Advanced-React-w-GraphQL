import Head from 'next/head';

/**
 *  This component takes care of the all of the meta tags that we put in the html document head
 */
const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<link rel="shortcut icon" href="/static/favicon.png" />
		<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
		<title>Sick Fits!</title>
	</Head>
);

export default Meta;
