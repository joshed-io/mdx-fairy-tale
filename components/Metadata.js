import React from "react";
import { useTheme } from '@mdx-deck/components';

const Metadata = props => {
  const theme = useTheme();
  return theme.metadata[props.field];
};

export default Metadata;
