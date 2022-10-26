import { createContext, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

type SidebarDrawerContextData = UseDisclosureReturn;
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

interface SidebarDrawerProvider {
  children: React.ReactNode;
}

export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
