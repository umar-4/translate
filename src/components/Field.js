import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext;
	render() {
		const value = this.context === 'english' ? 'Name' : 'Naam';
		return (
			<div className="ui Field">
				<label>{value}</label>
				<input />
			</div>
		);
	}
}

export default Field;
