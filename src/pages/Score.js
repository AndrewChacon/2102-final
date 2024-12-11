import React from 'react';
import my_state from './my_state';

class Score extends React.Component {
	render() {
		return (
			<>
				<h1 className='quiz-title'>This is the Score page</h1>
				<h2 className='quiz-question'>
					{' '}
					Your score so far is {my_state.my_score} /{' '}
					{my_state.my_count}{' '}
				</h2>
				<br />
				<br />
			</>
		);
	}
}

export default Score;
