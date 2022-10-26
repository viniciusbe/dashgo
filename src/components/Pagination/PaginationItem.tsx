import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem(props: PaginationItemProps) {
  const { isCurrent = false, number } = props;

  const commomProps = { size: "sm", fontSize: "xs", width: 4 };

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
