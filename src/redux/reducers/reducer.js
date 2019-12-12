import { ADD_FEATURE } from '../actions/action';
import { REMOVE_FEATURE } from '../actions/action';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }

  export function reducer(state = initialState, action) {
    let addedFeatures = []
    switch (action.type) {
        case ADD_FEATURE:
            
            // state.additionalFeatures.forEach((e) => {
            //     if (e.id !== action.payload) {
            //         remainingFeatures.push(e)
            //     } else {
            //         addedFeatures.push(e)
            //     }
            // })
      return { ...state, 
            car: { ...state.car, 
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload]
            },
            additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
}
        case REMOVE_FEATURE:
            addedFeatures = state.car.features.filter(feature => feature.id !== action.payload.id)
            return { ...state,
                car: { ...state.car,
                price: state.car.price - action.payload.price,
                features: addedFeatures
                },
                additionalFeatures: [ ...state.additionalFeatures, action.payload ] }

        default:
            return state
    }
}