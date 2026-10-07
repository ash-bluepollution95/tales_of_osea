export type NavigationLink = { title: string; href: string }
export type NavigationGroup = {  title: string; children: NavigationLink[]  }
export type NavigationSection = NavigationLink | NavigationGroup

export const navigationData: NavigationSection[] = [
  { title: "Home", href: "/" },
  { title: "Story", children: [
      { title: "About", href: "/about" },
      { title: "Characters", href: "/characters" },
      { title: "World", href: "/world" },
      { title: "Episodes", href: "/episodes" },
  ]},
  { title: "Soundtrack", href: "/soundtrack" },
  { title: "Community", children: [
      { title: "Collaborate", href: "/collaborate" },
      { title: "Credits", href: "/credits" },
  ]},
  { title: "Legal", children: [
      { title: "Copyright", href: "/copyright" },
      { title: "Disclaimers", href: "/disclaimer" },
	  { title: "Privacy", href: "/privacy" },
	  { title: "Terms", href: "/terms" },
  ]},
  
]