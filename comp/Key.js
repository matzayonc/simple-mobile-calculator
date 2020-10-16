import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Key(props){


	return (
		<TouchableOpacity style={styles.key} onPress={() => props.click(props.value)}>
			<Text style={styles.text}> {props.value} </Text>
		</TouchableOpacity>
	);
}



const styles = StyleSheet.create({
	text: { fontSize: 48, textAlign: 'center', color: 'white' },
	key: { backgroundColor: 'grey', flex: 1, alignItems: 'center' }

});
