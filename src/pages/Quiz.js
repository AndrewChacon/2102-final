import React from 'react';
import my_state from './my_state';

const my_questions = [
	{
		id: 1,
		question: 'What is the capital of Connecticut?',
		answers: [
			{ answer: 'Stamford', isCorrect: false },
			{ answer: 'Storrs', isCorrect: false },
			{ answer: 'Hartford', isCorrect: true },
		],
	},
	{
		id: 2,
		question: 'What is the square root of 16?',
		answers: [
			{ answer: '4', isCorrect: true },
			{ answer: '8', isCorrect: false },
			{ answer: '16', isCorrect: false },
		],
	},
	{
		id: 3,
		question: 'What type of number is 101?',
		answers: [
			{ answer: 'prime', isCorrect: true },
			{ answer: 'composite', isCorrect: false },
			{ answer: 'neigher', isCorrect: false },
			{ answer: 'both', isCorrect: false },
		],
	},
];

class Quiz extends React.Component {
	state = {
		score: 0,
		count: 0,
	};

	incrementScore = () => {
		this.setState({
			score: this.state.score + 1,
		});
		this.setState({
			count: this.state.count + 1,
		});
		alert('You are correct!');
	};

	dontIncrementScore = () => {
		this.setState({
			count: this.state.count + 1,
		});
		alert('Sorry - not correct');
	};

	handleSubmit = () => {
		my_state.my_score = this.state.score;
		my_state.my_count = this.state.count;

		alert('Total score: ' + this.state.score + '/' + this.state.count);
	};

	render() {
		return (
			<div className='quiz-content'>
				<h1 className='quiz-title'>My Questions</h1>
				{my_questions.map(quest => (
					<div>
						<h2 className='quiz-question'>{quest['question']}</h2>
						{quest['answers'].map(ans => (
							<div className='quiz-option'>
								<label>
									<div class='check'></div>
									<input
										class='quiz-radio'
										type='radio'
										name={quest['id']}
										key={quest['id']}
										onClick={
											ans['isCorrect']
												? this.incrementScore
												: this.dontIncrementScore
										}
										value={ans['isCorrect']}
									/>
									{ans['answer']}
								</label>
								<br />
							</div>
						))}
					</div>
				))}
				<br />
				<button className='btn quiz-btn' onClick={this.handleSubmit}>
					Submit
				</button>
			</div>
		);
	}
}

export default Quiz;
