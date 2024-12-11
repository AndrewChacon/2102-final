import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1 className='title'>This is the HOME stubb</h1>
				<div className='box'>
					<div className='box--inner'>
						<div className='content'>
							<Link className='btn' to='/Quiz'>
								[quiz]
							</Link>{' '}
							{}
							<Link className='btn' to='/Score'>
								[score]
							</Link>{' '}
							{}
							<Link className='btn' to='/Contact'>
								[contact]
							</Link>{' '}
							{}
							<Link className='btn' to='/About'>
								[about]
							</Link>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
