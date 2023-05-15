import { FC, ReactNode } from "react";

interface ConditionProps {
  if?: unknown;
  children: ReactNode;
}

const Condition: FC<ConditionProps> = (props) => {
  const { if: condition, children } = props;
  return <>{condition && children}</>;
};

export default Condition;
