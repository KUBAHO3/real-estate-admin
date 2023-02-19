import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, Typography } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          // <img src="/refine-collapsed.svg" alt="Refine" width="28px" />
          <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
            🏘️
          </Typography>
        ) : (
          // <img src="/refine.svg" alt="Refine" width="140px" />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "blue", fontWeight: 700 }}>
            Heaven
          </Typography>
        )}
      </Link>
    </Button>
  );
};
