import {
  FormErrorMessage as CHFormErrorMessage,
  FormErrorMessageProps as CHFormErrorMessageProps,
} from '@chakra-ui/react'

interface FormErrorMessageProps extends CHFormErrorMessageProps {
  children: React.ReactNode
}

export const FormErrorMessage = ({
  children,
  ...rest
}: FormErrorMessageProps) => {
  return <CHFormErrorMessage {...rest}>{children}</CHFormErrorMessage>
}
