import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: '20rem',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: '$headerHeightText',
  },
  headerText: {
    marginTop: '$singleSpace',
    textAlign: 'center',
  },

  productsContainer: {
    marginTop: '$singleSpace',
  },
  productListContainer: {
    // overflow: 'scroll',
    // height: '$containerListProducts',
  },
  productScrollView: {
    marginTop: '$singleSpace',
    padding: '$middleSpace',
    borderRadius: '$middleSpace',
    backgroundColor: '$white',
    shadowColor: '$black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '$doubleSpace',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: '$borderRadiusSmall',
    backgroundColor: '$white',
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: '500',
    fontSize: '4rem',
  },
  centerAlight: {
    textAlign: 'center',
  },
});

export default styles;
