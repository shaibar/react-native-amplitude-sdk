/**
 * Stub of AmplitudeSDK for Android.
 *
 * @providesModule AmplitudeSDK
 * @flow
 */
'use strict';

// Libraries
import {NativeModules} from 'react-native';

// Native Modules
const {AmplitudeSDKAndroid} = NativeModules;


class Amplitude {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  initializeApiKey(key, trackSessionEvents) {
    return AmplitudeSDKAndroid.initializeApiKey(key, trackSessionEvents ? trackSessionEvents : false);
  }

  // --------------------------------------------------
  // Identify
  // --------------------------------------------------
  setUserId(userId) {
    return AmplitudeSDKAndroid.setUserId(userId.toString());
  }

  setUserProperties(properties) {
    return AmplitudeSDKAndroid.setUserProperties(properties);
  }

  clearUserProperties() {
    return AmplitudeSDKAndroid.clearUserProperties();
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name) {
    return AmplitudeSDKAndroid.logEvent(name);
  }

  logEventWithProps(name, properties) {
    return AmplitudeSDKAndroid.logEventWithProps(name, properties);
  }

  // --------------------------------------------------
  // Revenue
  // --------------------------------------------------
  logRevenue(productIdentifier, quantity, amount) {
     return AmplitudeSDKAndroid.logRevenue(productIdentifier, quantity, amount); 
  }
}


export default new Amplitude();
