import { FieldError } from 'react-hook-form'
import { FormControl } from 'src/common/design/ui/FormControl'
import { FormErrorMessage } from 'src/common/design/ui/FormErrorMessage'
import { FormLabel } from 'src/common/design/ui/FormLabel'

interface FormTemplateProps {
  children: React.ReactNode
  error?: FieldError
  isRequired?: boolean
  label?: string
}

export const FormTemplate = ({
  children,
  isRequired,
  error,
  label,
}: FormTemplateProps) => {
  return (
    <FormControl
      isRequired={isRequired ? true : false}
      isInvalid={error ? true : false}
    >
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
