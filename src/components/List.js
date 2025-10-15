import { View, Text } from 'react-native';
import { issues } from '../../issues';

const List = () => {

    const extractId = (id) => {
        if (!id || id.length <= 3) return id || '';
        return id.slice(3);
    };

    const toUpper = (name) => {
        if (!name) return '';
        const idx = name.indexOf(' ');
        const firstPart = idx === -1 ? name : name.slice(0, idx);
        return firstPart.toUpperCase();
    };

    const openIssues = issues.filter(issue => issue.status === 'Open');

    return (
        <View>
            {openIssues.map(issue => (
                <View key={issue.id}>
                    <Text>ID: {extractId(issue.id)}</Text>
                    <Text>Omschrijving: {issue.description}</Text>
                    <Text>Toegewezen aan: {toUpper(issue.assigned)}</Text>
                    <Text>----------</Text>
                </View>
            ))}
        </View>
    );
};

export default List;