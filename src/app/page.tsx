"use client"
import { redirect,usePathname } from 'next/navigation'

export default function Root() {
  const pathname = usePathname()
  if(pathname.startsWith('/studio')) redirect('/studio')
  else redirect('/home')
}