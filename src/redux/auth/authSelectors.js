const isAuthenticated = state => state.auth.token;

const getUserEmail = state => state.auth.user.email;

const hasError = state => state.auth.error;

export default {
	isAuthenticated,
	getUserEmail,
	hasError,
};
