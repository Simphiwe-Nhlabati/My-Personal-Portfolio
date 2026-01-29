import React from 'react';
import { Container as MuiContainer, ContainerProps } from '@mui/material';

type Props = ContainerProps & {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children, sx, ...rest }) => {
  return (
    <MuiContainer
      sx={{
        py: { xs: 6, md: 8 },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiContainer>
  );
};
