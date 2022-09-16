import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    paddingHorizontal: 32
  },
  logo: {
    width: 71,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: '100%'
  },
  contentList: {
    maxHeight: 320,
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start' 
  }
});



