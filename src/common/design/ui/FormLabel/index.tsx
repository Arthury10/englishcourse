import {
  FormLabel as CHFormLabel,
  FormLabelProps as CHFormLabelProps,
} from '@chakra-ui/react'

interface FormLabelProps extends CHFormLabelProps {
  children: React.ReactNode
}

export const FormLabel = ({ children, ...rest }: FormLabelProps) => {
  return <CHFormLabel {...rest}>{children}</CHFormLabel>
}
