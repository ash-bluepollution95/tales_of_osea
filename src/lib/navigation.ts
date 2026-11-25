export type NavigationLink = { title: string; href: string }
export type NavigationGroup = {  title: string; children: NavigationLink[]  }
export type NavigationSection = NavigationLink | NavigationGroup

export const navigationData: NavigationSection[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Characters", href: "/characters" },
  { title: "Story", children: [
		{ title: "World", href: "/world" },
    	  { title: "Stories", href: "/stories" }, 
  ]},
  { title: "Media", children: 
  [{ title: "Soundtrack", href: "/soundtrack" },
   { title: "Episodes", href: "/episodes" },   ]},
  { title: "Community", children: [
      { title: "Collaborate", href: "/collaborate" },
      { title: "Credits", href: "/credits" },
  ]},
  
  { title: "Information", children: [
      { title: "Disclaimers", href: "/disclaimer" },
	  { title: "Disclosure", href: "/disclosure" },
  ]},
  { title: "Legal", children: [
      { title: "Copyright", href: "/copyright" },
	  { title: "Privacy", href: "/privacy" },
	  { title: "Terms", href: "/terms" },
  ]},
  
  
]