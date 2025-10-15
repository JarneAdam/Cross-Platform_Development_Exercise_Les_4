import React from 'react';
import { View, Text } from 'react-native';
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
            <View>
              <Text>Id: {extractId(issue.id)}</Text>
              <Text>Omschrijving: {issue.description}</Text>
              <Text>Toegewezen aan: {toUpper(issue.assigned)}</Text>
              <Text>----------</Text>
            </View>
          ))
      }
    </View>
  );  
}

export default List;