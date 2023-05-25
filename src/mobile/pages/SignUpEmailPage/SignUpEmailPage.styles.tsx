import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '$green',
  },
  containerContent: {
    marginLeft: '10rem',
    marginRight: '10rem',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '$headerHeight',
    paddingBottom: '$doubleSpace',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24rem',
  },
  logo: {
    width: '90rem',
    height: '90rem',
  },
  textInput: {
    marginBottom: '$singleSpace',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '$singleSpace',
  },
});

export default styles;
