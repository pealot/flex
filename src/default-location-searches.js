import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-lausanne',
    predictionPlace: {
      address: 'Lausanne, Suisse',
      bounds: new LatLngBounds(new LatLng(46.591708, 6.720815), new LatLng(46.504313, 6.560625)),
    },
  },
  {
    id: 'default-geneva',
    predictionPlace: {
      address: 'Genève, Suisse',
      bounds: new LatLngBounds(new LatLng(46.24713292, 6.1835059), new LatLng(46.17425426, 6.09201075)),
    },
  },
  {
    id: 'default-Vevey',
    predictionPlace: {
      address: 'Vevey, Suisse',
      bounds: new LatLngBounds(new LatLng(46.478264, 6.863417), new LatLng(46.456442, 6.832292)),
    },
  },
  {
    id: 'default-montreux',
    predictionPlace: {
      address: 'Montreux, Suisse',
      bounds: new LatLngBounds(new LatLng(46.44479471, 6.9258398), new LatLng(46.42598576, 6.90212902)),
    },
  },
  {
    id: 'default-bern',
    predictionPlace: {
      address: 'Berne, Suisse',
      bounds: new LatLngBounds(new LatLng(47.03198956, 7.55109842), new LatLng(46.87388179, 7.34986642)),
    },
  },
];
export default defaultLocations;
