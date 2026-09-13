import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/cubby-ui/navigation-menu';

import { cn } from '@/lib/utils'


import { MenuIcon } from "lucide-react"

export type NavigationSection = {
  title: string
  href: string
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  return (
    <header className={cn('sticky top-0 z-50 h-16', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-center gap-6 px-4 sm:px-6 lg:px-8'>


        {/* Navigation */}
        <NavigationMenu className='max-md:hidden'>
          <NavigationMenuList className='flex-wrap justify-start gap-0'>
            {navigationData.map(navItem => (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  href={navItem.href}
                  className='text-muted-foreground hover:text-primary bg-transparent! px-3 py-1.5 text-base! font-medium'
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>


        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
  

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon-lg'>
                <MenuIcon
                />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <a href={item.href}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
