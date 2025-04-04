"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, X, MessageCircle, Filter, Search, Settings, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("discover")

  return (
    <div className="container mx-auto max-w-6xl py-6 px-4 md:px-6 lg:px-8">
      <Tabs defaultValue="discover" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="md:w-1/3 lg:w-1/4">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Filters</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Age Range</span>
                      <span className="text-sm font-medium">18-45</span>
                    </div>
                    <Slider defaultValue={[18, 45]} min={18} max={80} step={1} className="my-4" />

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm">Distance</span>
                      <span className="text-sm font-medium">50 miles</span>
                    </div>
                    <Slider defaultValue={[50]} min={1} max={100} step={1} className="my-4" />

                    <div className="space-y-3 mt-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="online" className="text-sm">
                          Online Now
                        </Label>
                        <Switch id="online" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="photos" className="text-sm">
                          Has Photos
                        </Label>
                        <Switch id="photos" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="verified" className="text-sm">
                          Verified Profiles
                        </Label>
                        <Switch id="verified" defaultChecked />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="search" className="text-sm">
                        Search by Interests
                      </Label>
                      <div className="flex mt-1">
                        <Input id="search" placeholder="e.g. hiking, music" />
                        <Button size="icon" className="ml-2">
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full mt-4" variant="outline">
                      <Filter className="mr-2 h-4 w-4" /> Apply Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center w-full mb-6">
              <Button asChild className="w-full md:w-auto">
                <Link href="/match">
                  <Heart className="mr-2 h-4 w-4" />
                  Start Matching
                </Link>
              </Button>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((profile) => (
                  <Card key={profile} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={`/placeholder.svg?height=300&width=400`}
                        alt="Profile"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white text-xl font-semibold">Jessica, 28</h3>
                        <p className="text-white/90 text-sm">New York, NY • 5 miles away</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">Travel</Badge>
                        <Badge variant="secondary">Photography</Badge>
                        <Badge variant="secondary">Hiking</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Love exploring new places and capturing moments. Looking for someone to share adventures with.
                      </p>
                      <div className="flex justify-between">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <X className="h-5 w-5 text-destructive" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Heart className="h-5 w-5 text-primary" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="matches" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Your Matches</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((match) => (
                  <div key={match} className="text-center">
                    <div className="relative mx-auto w-20 h-20 mb-2">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={`/placeholder.svg?height=80&width=80`} alt="Match" />
                        <AvatarFallback>M{match}</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background"></div>
                    </div>
                    <p className="font-medium text-sm">Sarah</p>
                    <p className="text-xs text-muted-foreground">New match</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <Card className="flex h-[600px] overflow-hidden">
            <div className="w-1/3 border-r border-border">
              <div className="p-3 border-b border-border">
                <Input placeholder="Search conversations..." />
              </div>
              <ScrollArea className="h-[552px]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((conversation) => (
                  <div
                    key={conversation}
                    className={`flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer ${conversation === 1 ? "bg-muted" : ""}`}
                  >
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Contact" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="font-medium truncate">Jessica Davis</p>
                        <span className="text-xs text-muted-foreground">2m ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Hey, how's your day going? Would you like to...
                      </p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="p-3 border-b border-border flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Contact" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Jessica Davis</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  <div className="flex items-end gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Contact" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-sm">Hey there! I noticed we both like hiking. What's your favorite trail?</p>
                    </div>
                    <span className="text-xs text-muted-foreground">10:32 AM</span>
                  </div>

                  <div className="flex items-end justify-end gap-2">
                    <span className="text-xs text-muted-foreground">10:35 AM</span>
                    <div className="bg-primary text-primary-foreground rounded-lg rounded-br-none p-3 max-w-[80%]">
                      <p className="text-sm">
                        Hi Jessica! Yes, I love hiking too. My favorite is probably the Cascade Trail. Have you been
                        there?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Contact" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-sm">
                        I haven't, but I've heard great things about it! Would you like to go sometime? I'm free this
                        weekend.
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">10:38 AM</span>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-3 border-t border-border">
                <div className="flex gap-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button>Send</Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

