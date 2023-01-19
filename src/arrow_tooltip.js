import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function ArrowTooltips() {
  return (
    <Tooltip title="Thanks for hovering! I'm a tooltip" arrow placement="right-start">
      <Button><b>Hover over me!</b></Button>
    </Tooltip>
  );
}