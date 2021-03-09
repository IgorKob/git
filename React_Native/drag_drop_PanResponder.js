// https://www.reactnative.express/app/gestures/pan_responder


// 1
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import usePanResponder from './usePanResponder'

export default function App() {
  const [state, panHandlers] = usePanResponder()

  const { dragging, initialY, initialX, offsetY, offsetX } = state

  const style = {
    backgroundColor: dragging ? '#2DC' : '#0BA',
    transform: [
      { translateX: initialX + offsetX },
      { translateY: initialY + offsetY },
    ],
  }

  return (
    <View style={styles.container}>
      <View
        // Put all panHandlers into the View's props
        {...panHandlers}
        style={[styles.square, style]}
      >
        <Text style={styles.text}>DRAG ME</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})


// 11  ./usePanResponder.js
import { useReducer, useRef } from 'react'
import { PanResponder } from 'react-native'

import { actionCreators, initialState, reducer } from './pan'

export default function usePanResponder() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Should we claim the interaction lock when the user presses down on the square?
  const handleStartShouldSetPanResponder = (e, gestureState) => true

  // We were granted the interaction lock, so start the drag!
  const handlePanResponderGrant = (e, gestureState) => {
    dispatch(actionCreators.start())
  }

  // Every time the touch/mouse moves, update the drag.
  const handlePanResponderMove = (e, gestureState) => {
    dispatch(actionCreators.move({ x: gestureState.dx, y: gestureState.dy }))
  }

  // When the touch/mouse is lifted, end the drag.
  const handlePanResponderEnd = (e, gestureState) => {
    dispatch(actionCreators.end({ x: gestureState.dx, y: gestureState.dy }))
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminate: handlePanResponderEnd,
    })
  )

  return [state, panResponder.current.panHandlers]
}

// 111   ./pan.js
const types = {
    START: 'START',
    MOVE: 'MOVE',
    END: 'END',
  }
  
  export const actionCreators = {
    start: () => ({ type: types.START }),
    move: (point) => ({ type: types.MOVE, payload: point }),
    end: (point) => ({ type: types.END, payload: point }),
  }
  
  export const initialState = {
    dragging: false,
    initialY: 50,
    initialX: 50,
    offsetY: 0,
    offsetX: 0,
  }
  
  export function reducer(state, action) {
    switch (action.type) {
      case types.START: {
        return { ...state, dragging: true }
      }
      // Keep track of how far we've moved in total
      case types.MOVE: {
        const { x, y } = action.payload
        return {
          ...state,
          offsetY: y,
          offsetX: x,
        }
      }
      // The drag is finished. Set the initialY and initialX so that
      // the new position sticks. Reset offsetY and offsetX for the next drag.
      case types.END: {
        const { x, y } = action.payload
        return {
          ...initialState,
          initialY: state.initialY + y,
          initialX: state.initialX + x,
        }
      }
    }
  }