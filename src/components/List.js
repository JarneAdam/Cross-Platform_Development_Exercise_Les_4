import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { issues } from '../../issues';
import Title from './Title';

const List = () => {
  const extractId = (id) => id.substr(3);
  const toUpper = (text) => text.substr(0, text.indexOf(' ')).toUpperCase();

  return (
    <View>
      <Title />
      {
        issues
          .filter(issue => issue.status == 'Open')
          .map(issue => (
            <View key={issue.id} style={[styles.issueItem, issue.assigned && issue.assigned.toLowerCase() === 'katerina larson' ? styles.katerina : styles.other]}>
              <Text>
                <Text style={styles.propName}>ID: </Text>
                {extractId(issue.id)}
              </Text>
              <Text>
                <Text style={styles.propName}>Omschrijving: </Text>
                {issue.description}
              </Text>
              <Text>
                <Text style={styles.propName}>Toegewezen aan: </Text>
                {toUpper(issue.assigned)}
              </Text>
            </View>
          ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  issueItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    marginBottom: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  propName: {
    fontWeight: '600'
  },
  katerina: {
    backgroundColor: 'rgba(243,183,183,0.39)'
  },
  other: {
    backgroundColor: 'rgba(147,147,210,0.55)'
  }
});

export default List;