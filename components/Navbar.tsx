"use client"
import * as React from 'react'
import { NavbarServices, Services } from '@/constants/services'
import { AboutMenu } from '@/constants/about'
import { cn } from '@/lib/utils'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button'

import Link from 'next/link'
import { formAtom } from '@/lib/store/atoms/formAtom'


const Navbar = () => {
  const [formOpen, setFormOpen] = useRecoilState(formAtom);
  
  return (
    <nav className='px-12 z-50 max-md:px-3 top-0 py-7 flex flex-row justify-between items-center'>
      <Link href={'/'}>
        <div className='flex flex-row gap-10 items-center'>
          <div className='flex flex-row gap-3 items-center'>
            <iframe loading="lazy" style={{"position": "static", "width": "40px", "height": "40px", "border": "none", "padding": "0", "margin": "0"}}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGI8tmTbA8&#x2F;jd2dMANmUIHUn2JChdmWNA&#x2F;view?embed">
            </iframe>
            <h1 className='font-bold max-sm:text-xl text-2xl inconsolata-heading'>InfinitySprint</h1>
          </div>
          <NavbarMenu></NavbarMenu>
        </div>
      </Link>
    
      <Button variant={'ghost'} onClick={()=>{setFormOpen(!formOpen)}}
      className='text-lg font-normal max-xl:hidden'>Contact us</Button>
      
      <MobileNavBar></MobileNavBar>
    </nav>
  )
}


const NavbarMenu = () => {
  return <NavigationMenu>
    <NavigationMenuList className='max-xl:hidden'>

      <NavigationMenuItem>
        <NavigationMenuTrigger className='bg-transparent'>Solutions</NavigationMenuTrigger>
        <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 z-50 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {NavbarServices.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  
                >
                  
                </ListItem>
              ))}
            </ul>          
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className='bg-transparent'>About us</NavigationMenuTrigger>
        <NavigationMenuContent className='relative'>
        <ul className="grid w-[400px] gap-3 z-50 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
              {AboutMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                >
                  
                </ListItem>
              ))}
            </ul> 
        </NavigationMenuContent>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>

}

const MobileNavBar = () => {
  const [formOpen, setFormOpen] = useRecoilState(formAtom);
  return <Sheet>
    <SheetTrigger className='font-light z-40 xl:hidden text-md text-white border-none px-3 py-1 rounded'>Info</SheetTrigger>
    <SheetContent className='bg-black border-0 text-white w-full' side='left'>
      <SheetHeader>
        <SheetTitle>
          <div className='flex flex-row gap-5 items-center'>
          <iframe style={{width: '60px', height: '60px', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGI8tmTbA8&#x2F;jd2dMANmUIHUn2JChdmWNA&#x2F;view?embed">
          </iframe>
            <h1 className='font-bold max:text-3xl text-xl inconsolata-heading'>InfinitySprint</h1>
          </div>
        </SheetTitle>
        <SheetDescription>
          <MobileNavbarMenu></MobileNavbarMenu>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

}

const MobileNavbarMenu = () => {
  return <Accordion type="single" collapsible className='mt-5'>
    <AccordionItem value="item-1">
      <AccordionTrigger className='no-underline text-white hover:no-underline text-lg font-light'>Solutions</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col w-full flex-wrap gap-2'>
          {NavbarServices.map(component => {
            return <div className='flex flex-col content-center gap-3 px-4 py-2 cursor-pointer justify-start' key={component.title}>
              <div className='font-normal text-md text-left'>{component.title}</div>
            </div>
          })}
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className='no-underline text-white hover:no-underline text-lg font-light'>About us</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col w-full flex-wrap gap-2'>
          {AboutMenu.map(component => {
            return <div className='flex flex-col content-center gap-3 px-4 py-2 cursor-pointer justify-start' key={component.title}>
              <div className='font-normal text-md text-left'>{component.title}</div>
            </div>
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>

}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar