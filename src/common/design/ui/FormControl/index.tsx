import {
  FormControl as CHFormControl,
  FormControlProps as CHFormControlProps,
} from '@chakra-ui/react'

interface FormControlProps extends CHFormControlProps {
  children: React.ReactNode
}

export const FormControl = ({
  children,
  ...rest
}: FormControlProps) => {
  return <CHFormControl {...rest}>{children}</CHFormControl>
}
