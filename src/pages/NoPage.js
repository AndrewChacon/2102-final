import React from 'react';

class NoPage extends React.Component {
	render() {
		return (
			<>
				<h1 className='quiz-title' style={{ color: 'red' }}>
					This is a 404 error !
				</h1>
				<h2 className='quiz-title' style={{ color: 'blue' }}>
					Yipes
				</h2>
			</>
		);
	}
}

export default NoPage;
