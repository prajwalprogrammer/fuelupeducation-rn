import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface StudentProps {
  color: string
  height: number
  width: number
}

const Student: React.FC<StudentProps> = ({
  color,
  height,
  width,
}: StudentProps) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Svg
        id='Icons'
        height={height}
        viewBox='0 0 74 74'
        width={width}
        fill={color}>
        <Path d='m37 72a1 1 0 0 1 -1-1v-28.2a1 1 0 0 1 .224-.63c4.063-5.01 9.674-6.64 17.653-5.126a1 1 0 0 1 .813.982v10.287a1 1 0 0 1 -2 0v-9.449c-6.682-1.1-11.252.236-14.69 4.3v24.774c3.227-3.356 8.149-4.129 14.69-2.3v-7.36a1 1 0 0 1 2 0v8.7a1 1 0 0 1 -1.306.952c-7.742-2.488-12.816-1.327-15.51 3.549a1 1 0 0 1 -.874.521z' />
        <Path d='m37 72a1 1 0 0 1 -.875-.517c-2.694-4.876-7.769-6.037-15.511-3.549a1 1 0 0 1 -1.306-.952v-8.7a1 1 0 0 1 2 0v7.359c6.545-1.831 11.466-1.054 14.691 2.3v-24.781c-3.438-4.059-8-5.4-14.691-4.3v9.448a1 1 0 0 1 -2 0v-10.282a1 1 0 0 1 .813-.982c7.978-1.512 13.59.115 17.654 5.126a1 1 0 0 1 .225.63v28.2a1 1 0 0 1 -1 1z' />
        <Path d='m56.125 59.945a6.67 6.67 0 1 1 6.164-6.65 6.429 6.429 0 0 1 -6.164 6.65zm0-11.3a4.679 4.679 0 1 0 4.164 4.65 4.432 4.432 0 0 0 -4.164-4.65z' />
        <Path d='m17.875 59.945a6.67 6.67 0 0 1 0-13.3 6.67 6.67 0 0 1 0 13.3zm0-11.3a4.679 4.679 0 0 0 0 9.3 4.679 4.679 0 0 0 0-9.3z' />
        <Path d='m59.563 50.079a1 1 0 0 1 -1-1v-11.535a6.815 6.815 0 0 0 -6.8-6.814h-29.526a6.815 6.815 0 0 0 -6.8 6.814v11.535a1 1 0 0 1 -2 0v-11.535a8.818 8.818 0 0 1 8.8-8.814h29.525a8.818 8.818 0 0 1 8.8 8.814v11.535a1 1 0 0 1 -.999 1z' />
        <Path d='m37 26a12 12 0 1 1 12-12 12.011 12.011 0 0 1 -12 12zm0-22a10 10 0 1 0 10 10 10.01 10.01 0 0 0 -10-10z' />
      </Svg>
      <Text style={{ color, marginTop: 8 }}>Student</Text>
    </View>
  )
}

export default Student
