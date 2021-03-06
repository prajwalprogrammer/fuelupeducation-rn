import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, Theme, Box, makeStyles } from '../Theme'
interface BProps {
  onPress: () => void
  title?: string
  icon?: string
}

const Button: React.FC<BProps> = ({ title, icon, onPress }: BProps) => {
  const styles = useStyles()
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...onPress}>
      <Text variant='buttonText'>{title}</Text>
      <Box>{icon}</Box>
    </TouchableOpacity>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
    margin: theme.spacing.s,
    borderRadius: theme.borderRadii.m,
    width: 80,
  },
}))
export default Button
