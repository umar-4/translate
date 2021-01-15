import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}
	renderBtn(color) {
		return (
			<button className={`ui ${color} button`}>
				<LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
			</button>
		);
	}
	render() {
		return <ColorContext.Consumer>{(color) => this.renderBtn(color)}</ColorContext.Consumer>;
	}
}
export default Button;
