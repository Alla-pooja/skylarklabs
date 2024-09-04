import React, { useState, useEffect } from 'react';
import useApi from '../api';
import { useHistory } from 'react-router-dom';

export default function Logout() {
	const history = useHistory();
    const api = useApi();

	useEffect(() => {
		const response = api.post('api/user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		api.defaults.headers['Authorization'] = null;
		// history.push('/login');
		window.location.href = '/login'
	});
	return <div>Logout</div>;
}
