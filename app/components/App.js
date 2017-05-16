var React = require('react');
var Popular = require('./Popular')

class App extends React.Component {
	constructor() {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
	}
	render() {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		return (
			<ul className='languages'>
				{languages.map(function (lang) {
					return (
						<li key={lang}>
							{lang}
						</li>
					)
				})}
			</ul>
		)
	}
}

module.exports = App;