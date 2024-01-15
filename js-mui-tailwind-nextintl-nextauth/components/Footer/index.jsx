'use client';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import ToggleColorMode from '@/components/ToggleColorMode';

export default function Footer({ component = 'footer' }) {
  const theme = useTheme();
  const style =
    theme.palette.mode === 'dark'
      ? { boxShadow: '0px 0px 1px 0px rgba(255, 255, 255, 1)' }
      : { boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 1)' };

  return (
    <Box component={component} className="py-6 text-center" style={style}>
      <Container maxWidth="xl">
        <LocaleSwitcher />
        <ToggleColorMode className="mr-4" />
        <Typography component="span" variant="body2" color="text.secondary">
          &copy; {' 2023-2024. '}
        </Typography>
      </Container>
    </Box>
  );
}
