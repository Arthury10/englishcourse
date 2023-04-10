import React from 'react'

import { useController } from 'react-hook-form'
import { Input } from 'src/common/design/ui/Input'
import { FormTemplate } from 'src/components/FormTemplate'

type InputControllerProps = {
  name: string
  isRequired?: boolean
  label?: string
}

export const InputController: React.FC<InputControllerProps> = ({
  name,
  isRequired,
  label,
}) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({
    name,
  })

  return (
    <FormTemplate label={label} error={error} isRequired={isRequired}>
      <Input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </FormTemplate>
  )
}
