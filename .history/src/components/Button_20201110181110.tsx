import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, Theme, Box, makeStyles } from '../Theme'
interface BProps {
  onPress: () => void
  title?: string
  icon?: string
  selected?: boolean
}

const Button: React.FC<BProps> = ({
  title,
  icon,
  selected,
  onPress,
}: BProps) => {
  const styles = useStyles()
  return (
    <TouchableOpacity style={styles.container} {...selected} {...onPress}>
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
  },
}))
export default Button
