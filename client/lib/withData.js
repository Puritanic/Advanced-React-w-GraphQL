import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

import { endpoint } from '../config';

/**
 *
 * @param headers {Object} - needed for authentication purposes and for setting up custom http headers to the request
 */
function createClient({ headers }) {
	return new ApolloClient({
		uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
        /**
         * This is sort of like express middleware, will be called on every single request we make
         * @param operation
         */
		request: operation => {
			operation.setContext({
				fetchOptions: {
					credentials: 'include',
				},
				headers,
			});
		},
	});
}

export default withApollo(createClient);
