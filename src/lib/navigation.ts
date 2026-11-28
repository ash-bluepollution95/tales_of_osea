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

  { title: "Information", children: [
      { title: "Disclaimers", href: "/disclaimer" },
	  { title: "Disclosure", href: "/disclosure" },
	  { title: "Responsibilities", href: "/responsibilities" },
      { title: "Credits", href: "/credits" },
  ]},
  { title: "Legal", children: [
      { title: "Copyright", href: "/copyright" },
	  { title: "Privacy", href: "/privacy" },
	  { title: "Terms", href: "/terms" },
  ]},
   { title: "Connect", children: [
  { title: "Contact", href: "/contact" },
  	   { title: "Collaborate", href: "/collaborate" },
	   	   { title: "Audition", href: "/audition" },
   ]}, 
  
]