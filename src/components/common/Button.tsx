import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

type Props = ButtonProps & {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, sx, ...rest }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      sx={{
        borderRadius: 999,
        px: 3,
        py: 1.25,
        fontWeight: 600,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
