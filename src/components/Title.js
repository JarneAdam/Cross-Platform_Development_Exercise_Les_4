import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => <Text style={styles.container}>Open issues</Text>;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 5
    },
});

export default Title;