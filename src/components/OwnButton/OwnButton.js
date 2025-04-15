import { Button } from "./OwnButton.styles..js";

export function OwnButton({ onClick, children, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {children && <p>{children}</p>}
    </Button>
  );
}
