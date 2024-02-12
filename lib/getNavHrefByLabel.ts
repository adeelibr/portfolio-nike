import { NAV_LINKS } from "@/constants";

// @description utility type to extract label types from NAV_LINKS
type NavLinkLabel = (typeof NAV_LINKS)[number]["label"];

function getNavHrefByLabel(label: NavLinkLabel): string {
  const link = NAV_LINKS.find(
    (link) => link.label.toLowerCase() === label.toLowerCase()
  );
  return link?.href.replace('#', '') as string;
}

export default getNavHrefByLabel;
