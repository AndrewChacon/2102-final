import React from 'react';
import '../index.css';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			radio_value: '',
		};
	}

	onChange = event => {
		this.setState({
			radio_value: event.target.value,
		});
	};

	render() {
		return (
			<div className='quiz-content component-content'>
				<br />
				<label>
					<input
						type='radio'
						name='radio'
						value='1'
						className='quiz-radio'
						onChange={this.onChange}
					/>{' '}
					First button
				</label>{' '}
				<br />
				<br />
				<label>
					<input
						type='radio'
						name='radio'
						value='2'
						className='quiz-radio'
						onChange={this.onChange}
					/>{' '}
					Second button
				</label>{' '}
				<br />
				<br />
				<label className='component-option'>
					<input
						className='quiz-radio'
						type='radio'
						name='radio'
						value='3'
						onChange={this.onChange}
					/>{' '}
					Third button
				</label>{' '}
				<br />
				<br />
				<br />
				<p className='selected'>
					The selected value is: {this.state.radio_value}
				</p>
			</div>
		);
	}
}

export default MyComponent;
