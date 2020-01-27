import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  touchableButton: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
  },
  listItem: {
    width: 10,
  },
  listItemDetails: {
    flex: 1,
  },
  listItemDetailsText: {
    color: '#000C66',
    marginTop: 5,
  },
});
export default styles;
