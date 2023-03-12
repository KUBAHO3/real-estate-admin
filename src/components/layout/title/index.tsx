import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, Typography } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src="/Heaven-logo.jpg" alt="Heaven" width="80px" />
          // <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
          //   🏘️
          // </Typography>
        ) : (
          // <img src="/Heaven-logo.jpg" alt="Heaven" width="140px" />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "blue", fontWeight: 700 }}>
            Heaven
          </Typography>
        )}
      </Link>
    </Button>
  );
};
