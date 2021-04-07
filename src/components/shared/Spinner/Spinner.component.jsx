/*eslint-disable */
import React from 'react';
import SpinnerOverlay from './SpinnerOverlay.component';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log(typeof isLoading);
  return isLoading ? <SpinnerOverlay /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
