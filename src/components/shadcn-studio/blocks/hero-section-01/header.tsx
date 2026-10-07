import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent
} from '@/components/ui/cubby-ui/navigation-menu';
import type { NavigationSection } from '@/lib/navigation';

import { cn } from '@/lib/utils'


import { MenuIcon } from "lucide-react"



type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  return (
    <header className={cn('sticky top-0 z-50 h-16 border-b bg-background/85 bg-gradient-to-b from-white/[0.06] to-transparent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-center gap-6 px-4 sm:px-6 lg:px-8'>


        {/* Navigation */}
        <NavigationMenu className='max-md:hidden' closeDelay={250}>
          <NavigationMenuList className='flex-wrap justify-start gap-0'>
            {navigationData.map((navItem) => (
  <NavigationMenuItem key={navItem.title}>
    {'href' in navItem ? (
      <NavigationMenuLink
        href={navItem.href}
        standalone
        className='bg-transparent! px-3 py-1.5 text-base! font-medium text-foreground/90 hover:text-primary'
      >
        {navItem.title}
      </NavigationMenuLink>
    ) : (
      <>
        <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {navItem.children.map((child) => (
            <NavigationMenuLink key={child.title} href={child.href}>
              {child.title}
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </>
    )}
  </NavigationMenuItem>
))}
          </NavigationMenuList>
        </NavigationMenu>


        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
  

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant='outline' size='icon-lg' />}>
              <MenuIcon
              />
              <span className='sr-only'>Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item) =>
  'href' in item ? (
    <DropdownMenuItem key={item.title}>
      <a href={item.href}>{item.title}</a>
    </DropdownMenuItem>
  ) : (
    <DropdownMenuGroup key={item.title}>
      <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
      {item.children.map((child) => (
        <DropdownMenuItem key={child.title}>
          <a href={child.href}>{child.title}</a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuGroup>
  ),
)}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
