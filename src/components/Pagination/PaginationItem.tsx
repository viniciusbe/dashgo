import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem(props: PaginationItemProps) {
  const { isCurrent = false, number, onPageChange } = props;

  const commomProps = {
    onClick: () => onPageChange(number),
    size: "sm",
    fontSize: "xs",
    width: 4,
  };

  const variantProps = isCurrent
    ? {
        colorScheme: "pink",
        disabled: true,
        _disabled: {
          bgColor: "pink.500",
          cursor: "default",
        },
      }
    : { bgColor: "gray.700", _hover: { bg: "gray.500" } };

  const buttonProps = { ...commomProps, ...variantProps };

  return <Button {...buttonProps}>{number}</Button>;
}
