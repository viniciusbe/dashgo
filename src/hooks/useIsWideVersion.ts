import { useBreakpointValue } from "@chakra-ui/react";

export function useIsWideVersion() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return isWideVersion;
}
