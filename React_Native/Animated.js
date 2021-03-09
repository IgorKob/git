// https://www.reactnative.express/app/animation/animated


//                       Цей API має 4 основні частини:
// Animated.Value - обернути числове значення, яке ми хочемо використовувати в стилі
// Animated.View,, Animated.Text... - використовувати компонент, що підтримує анімовані стилі
// Animated.timing,, Animated.spring... - виберіть тип анімації
// .start() - запустити анімацію


// 1
import React, { useRef } from 'react'
import { Animated } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  // ...
}

// 2
import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  return (
    <>
      <Button title="Animate" />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}



// 3
import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  return (
    <>
      <Button
        title="Animate"
        onPress={() => {
          const animation = Animated.timing(value.current, {
            toValue: 1,
            useNativeDriver: true,
          })

          animation.start()
        }}
      />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}