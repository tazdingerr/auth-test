import { FC } from "react";
import { LayoutAppProps } from ".";

export const LayoutApp: FC<LayoutAppProps> = (props: LayoutAppProps) => {
  const isLoading = false;

  return isLoading ? <>Loading...</> : <>{props.children}</>;
};
