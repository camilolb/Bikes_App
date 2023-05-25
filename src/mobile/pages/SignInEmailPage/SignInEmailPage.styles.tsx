import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$green',
    padding: 10,
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
    width: '$carrouselImageContainerHeight',
    height: '$carrouselImageContainerHeight',
  },
  textInput: {
    marginBottom: '$singleSpace',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '$singleSpace',
  },
  buttonRegister: {
    marginBotton: '100rem',
  },
});

export default styles;
