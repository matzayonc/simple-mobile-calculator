import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function screen(props){

	return (
		<View style={styles.view}>
			<Text style={styles.expr}> {props.expr} </Text>
			<Text style={styles.eval}> {props.solution} </Text>
		</View>
		)
}

const styles = StyleSheet.create({
	view: { flex: 2, backgroundColor: 'lightblue' },
	expr: { color: 'white', textAlign: 'right', fontSize: 30, marginTop: 40},
	eval: { color: 'white', textAlign: 'right', fontSize: 70, marginTop: 40}
});
