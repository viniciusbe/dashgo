import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiContactsLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiDashboardLine} href="/users">
          Users
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Forms
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Automation
        </NavLink>
      </NavSection>
    </Stack>
  );
}
