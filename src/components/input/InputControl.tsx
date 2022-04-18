import React, { useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { IInputProps, Input } from "./Input";
import { IInputHelperTextProps, InputHelperText } from "./InputHelperText";
import { IInputLabelProps, InputLabel } from "./InputLabel";

type ISubProps = IInputHelperTextProps & IInputLabelProps & IInputProps;

interface IInputControlProps extends ISubProps {
  forwardedRef: React.Ref<unknown>;
}

const StyledInput = styled(Input)`
  margin-top: 0.25rem;
`;

const StyledInputHelperText = styled(InputHelperText)`
  margin-top: 0.125rem;
`;

export const OnboardingForm: React.FC<IInputControlProps> = ({
  forwardedRef,
  ...props
}) => {
  const inputRef = useRef();
  useImperativeHandle(forwardedRef, () => inputRef.current);
  return (
    <div {...props}>
      <InputLabel {...props} />
      <StyledInput ref={inputRef} {...props} />
      <StyledInputHelperText {...props} />
    </div>
  );
};