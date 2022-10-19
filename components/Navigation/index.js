import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import Styles, {AppColors, AppFonts} from './AppStyles';
import MapViewNavigation, { NavigationModes, TravelModeBox, TravelIcons, Geocoder, TravelModes, DirectionsListView, ManeuverView, DurationDistanceView } from 'react-native-maps-navigation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyles from './MapStyles';
import Geolocation from '@react-native-community/geolocation';

const GOOGLE_API_KEY = 'AIzaSyBkM-98CkTuYhFeqpWwg3tlzuRX-a7Adjo';

const USE_METHODS = false;

const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Keychain Location Permission",
          message:
            "We need access to your location" +
            "to display the map.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the map");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

const Navigation = () => {

    const [destination, setDestination] = useState();
    const [isNavigation, setIsNavigation] = useState(false);
    const [travelMode, setTravelMode] = useState(TravelModes.DRIVING);
    const [origin, setOrigin] = useState({latitude: 37.78825, longitude: -122.4324});
    const [navigationMode, setNavigationMode] = useState(NavigationModes.IDLE);
    const [step,setStep] = useState(false);
    const [route, setRoute] = useState(false);

    let refMap = useRef(null);

    let refNavigation = useRef(null);

    const goDisplayRoute = () => {
        if(!validateRoute()) return;

        if(USE_METHODS) {

            this.refNavigation.displayRoute(
                this.state.origin,
                this.state.destination,
                {
                    mode: this.state.travelMode
                }
            ).then(route => {
                console.log(route);
            });

        } else {
            () => setNavigationMode(NavigationModes.ROUTE);
        }
    }

    const goNavigateRoute = () => {
        if (!validateRoute()) return;

        // There are two ways to navigate a route - either through the method
        // navigateRoute or by setting the props.
        // The difference is that you get instant feedback when using methods vs props.

        if (USE_METHODS) {

            this.refNavigation.navigateRoute(
                this.state.origin,
                this.state.destination,
                {
                    mode: this.state.travelMode
                }
            ).then(route => {
                this.setState({
                    isNavigation: true
                })
            });

        } else {
            () => setNavigationMode(NavigationModes.NAVIGATION);
        }
    }

    const validateRoute = () => {
        console.log(destination);
        console.log(destination.length);

        if (destination.length >= 3) {
            return true;
            console.log('bruh');
        }

        Alert.alert('Address required', 'You need to enter an address first');

        return false;
    }

    return (
        <View style={Styles.appContainer}>

                {isNavigation ? null : (
                  <View style={Styles.appHeader}>
                      <Text style={Styles.inputLabel}>Where do you want to go?</Text>
                      <View style={Styles.inputContainer}>
                          <TextInput style={Styles.input} placeholder='Search' onChangeText={destination => setDestination({destination})} value={destination}/>

                          <TouchableOpacity style={Styles.button} onPress={() => console.log(destination)}>
                              <Text style={Styles.buttonText}>{'\ue961'}</Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={Styles.button} onPress={() => goNavigateRoute()}>
                              <Text style={Styles.buttonText}>{'\ue975'}</Text>
                          </TouchableOpacity>

                      </View>
                      <TravelModeBox
                          onChange={travelMode => setTravelMode(travelMode)}
                          inverseTextColor={AppColors.background}
                          style={Styles.travelModeBox}
                      />
                  </View>
               )}

                    <View style={{flex:1}}>
                        <ManeuverView
                            step={step}
                            fontFamily={AppFonts.light}
                            fontFamilyBold={AppFonts.bold}
                        />
                        <MapView
                            ref={ref => refMap = ref}
                            provider={PROVIDER_GOOGLE}
                            style={Styles.map}
                            customMapStyle={MapStyles}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <MapViewNavigation
                                origin={origin}
                                destination={destination}
                                navigationMode={navigationMode}
                                travelMode={travelMode}
                                ref={ref => refNavigation = ref}
                                map={() => this.refMap}
                                apiKey={GOOGLE_API_KEY}
                                simulate={true}
                                onRouteChange={route => setRoute(route)}
                                onStepChange={(step, nextStep) => setStep(step, nextStep)}
                                displayDebugMarkers={true}
                                onNavigationStarted={route => console.log("Navigation Started")}
                                onNavigationCompleted={route => setIsNavigation(false)}
                            />
                        </MapView>
                    </View>

          </View>
    )
}

export default Navigation;