"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Dating App</span>
            </Link>

            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/discover" className="text-foreground/70 hover:text-primary px-3 py-2 text-sm font-medium">
                Discover
              </Link>
              <Link href="/match" className="text-foreground/70 hover:text-primary px-3 py-2 text-sm font-medium">
                Match
              </Link>
              <Link
                href="/how-it-works"
                className="text-foreground/70 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                How It Works
              </Link>
              <Link href="/premium" className="text-foreground/70 hover:text-primary px-3 py-2 text-sm font-medium">
                Premium
              </Link>
              <Link href="/safety" className="text-foreground/70 hover:text-primary px-3 py-2 text-sm font-medium">
                Safety
              </Link>
              <Link href="/about" className="text-foreground/70 hover:text-primary px-3 py-2 text-sm font-medium">
                About
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/discover" className="text-foreground hover:text-primary py-2 text-sm font-medium">
                    Discover
                  </Link>
                  <Link href="/match" className="text-foreground hover:text-primary py-2 text-sm font-medium">
                    Match
                  </Link>
                  <Link href="/how-it-works" className="text-foreground hover:text-primary py-2 text-sm font-medium">
                    How It Works
                  </Link>
                  <Link href="/premium" className="text-foreground hover:text-primary py-2 text-sm font-medium">
                    Premium
                  </Link>
                  <Link href="/safety" className="text-foreground hover:text-primary py-2 text-sm font-medium">
                    Safety
                  </Link>
                  <Link href="/about" className="text-foreground hover:text-primary py-2 text-sm font-medium">
                    About
                  </Link>

                  <div className="border-t border-border pt-4 mt-4">
                    {isLoggedIn ? (
                      <>
                        <Button className="w-full mb-2" asChild>
                          <Link href="/dashboard">Dashboard</Link>
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => setIsLoggedIn(false)}>
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button className="w-full mb-2" asChild>
                          <Link href="/signup">Sign Up</Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/login">Login</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

