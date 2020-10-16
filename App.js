import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Key from './comp/Key'
import Screen from './comp/Screen'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expr: '',
			calculated: ''
		};
		this.addChar = this.addChar.bind(this)
	}

	addChar(char){
		if(char == '=')
			this.calcExpresion()
		else
			this.setState({expr: this.state.expr += char})
	}

	removeLast(){
		let tab = this.state.expr.split('')
		tab.pop()
		this.setState({expr: tab.join('')})
	}

	calcExpresion(){
		try {
			this.setState({calculated: eval(this.state.expr)})
			
		} catch (err) {
			this.setState({calculated: 'Błąd'})
		}
	}


	render() {
		const createKeys = i => {
			return <Key click={this.addChar} key={i} value={i}/>
		}

		//actions.push(<Key click={()=>this.setState({expr: ''})} key='ce' value='ce'/>)


		return (
			<View style={{flex: 1}}>
				<Screen solution={this.state.calculated} expr={this.state.expr}/>
				<View style={{flex: 4, flexDirection: 'row'}}>
					
					<View style={styles.column}>
						{[1, 4, 7, '.'].map(createKeys)}
					</View>
					<View style={styles.column}>
						{[2, 5, 8, 0].map(createKeys)}
					</View>
					<View style={styles.column}>
						{[3, 6, 9].map(createKeys)}
						<Key click={this.calcExpresion.bind(this)} key='=' value='='/>
					</View>
					<View  style={styles.column}>
						{['+', '-', '*', '/'].map(createKeys)}
						<Key click={this.removeLast.bind(this)} key='c' value='c'/>
					</View>
					
				</View>
			</View>
		)
	}
}

export default App;


const styles = StyleSheet.create({
	column: { fontSize: 48, flex: 1 }
});

