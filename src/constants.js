const BASE_URL = 'https://salty-stream-81295.herokuapp.com';

export default {
	BASE_URL,
	BASE_API: `${BASE_URL}/api`,
	routes: {
		App: 'App',
		Auth: 'Auth',
		// APP
		Home: 'Home',
		// AUTH
		RoleSelection: 'RoleSelection',
		ConfirmationCode: 'ConfirmationCode',
		UserInformation: 'UserInformation',
		Login: 'Login',
		Logout: 'Logout',
	},
	STATUS: {
		SUCCESS: 'SUCCESS'
	},
	confirmationCode: '1234'
}