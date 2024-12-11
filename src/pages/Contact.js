import React from 'react';

import '../index.css';
import MyComponent from './MyComponent';

class Contact extends React.Component {
	greeting(name) {
		alert('Greeting ' + name);
	}

	hello(name) {
		alert('Hello ' + name);
	}

	render() {
		return (
			<>
				<div>
					<br />
					<div>
						<h1 className='quiz-title'>Greetings!</h1>
						<button
							className='btn'
							onClick={() => this.greeting('CSE 2102 Class')}>
							Say hello
						</button>
						<br />
					</div>
				</div>
				<MyComponent />
			</>
		);
	}
}

export default Contact;
