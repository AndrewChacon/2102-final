import React from 'react';

class Score extends React.Component {
	render() {
		return (
			<div className='me-content'>
				<h1 className='quiz-title me-title'>This page is about me</h1>
				<p className='quiz-option me-text'>
					David starts off as a street-smart but underprivileged
					teenager attending the prestigious Arasaka Academy, where he
					feels out of place among the wealthy elite. After a tragic
					incident involving his mother, who worked tirelessly to
					support his education, David is left with nothing but a
					cybernetic implant—a military-grade Sandevistan—found in her
					possessions. Driven by grief, desperation, and anger toward
					the system that oppressed them, he installs the implant and
					begins a journey that pulls him into the dangerous world of
					mercenaries, or "edge runners."
				</p>
				<p className='quiz-option me-text'>
					Over the course of the series, David grows into a bold and
					capable leader among a crew of outlaws. However, his
					relentless pursuit of power and freedom is tempered by the
					tragic consequences of living in a world where technology
					and ambition often come at the cost of humanity. His story
					is a cautionary tale about the price of survival and dreams
					in a society ruled by greed and exploitation.
				</p>
			</div>
		);
	}
}

export default Score;
