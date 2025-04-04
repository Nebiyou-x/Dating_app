"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { X, Plus, Upload, Check } from "lucide-react"

export default function ProfileSetupPage() {
  const [step, setStep] = useState(1)
  const [interests, setInterests] = useState(["Travel", "Music"])
  const [newInterest, setNewInterest] = useState("")

  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest])
      setNewInterest("")
    }
  }

  const removeInterest = (interest) => {
    setInterests(interests.filter((i) => i !== interest))
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <Card className="w-full max-w-3xl">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Complete Your Profile</CardTitle>
            <div className="text-sm text-muted-foreground">Step {step} of 4</div>
          </div>
          <CardDescription>Let's set up your profile to help you find better matches</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <p className="text-sm text-muted-foreground">Tell us about yourself</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About Me</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell potential matches about yourself, your interests, and what you're looking for"
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, State" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" placeholder="What do you do?" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Select>
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="college">Some College</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD or Higher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" placeholder="Height in cm or ft/in" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">Photos</h3>
                <p className="text-sm text-muted-foreground">Add photos to your profile</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-4 ${
                      index === 1 ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    {index === 1 ? (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                          <Check className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-sm font-medium">Profile Photo</p>
                        <p className="text-xs text-muted-foreground mt-1">Uploaded</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">Upload Photo</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Photo Guidelines:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Photos should clearly show your face</li>
                  <li>• Include at least one full-body photo</li>
                  <li>• Avoid group photos for your main profile picture</li>
                  <li>• Photos should be recent (within the last year)</li>
                  <li>• No explicit or inappropriate content</li>
                </ul>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">Interests & Preferences</h3>
                <p className="text-sm text-muted-foreground">Help us find your perfect match</p>
              </div>

              <div className="space-y-4">
                <Label>Your Interests</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="px-3 py-1.5">
                      {interest}
                      <button
                        className="ml-2 text-muted-foreground hover:text-foreground"
                        onClick={() => removeInterest(interest)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add an interest"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addInterest()}
                  />
                  <Button type="button" size="icon" onClick={addInterest}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Age Preference</Label>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>18</span>
                    <span>65+</span>
                  </div>
                  <Slider defaultValue={[25, 40]} min={18} max={65} step={1} className="my-4" />
                  <div className="flex justify-between text-sm">
                    <span>Min: 25</span>
                    <span>Max: 40</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="distance">Maximum Distance</Label>
                  <Select defaultValue="50">
                    <SelectTrigger id="distance">
                      <SelectValue placeholder="Select maximum distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 miles</SelectItem>
                      <SelectItem value="10">10 miles</SelectItem>
                      <SelectItem value="25">25 miles</SelectItem>
                      <SelectItem value="50">50 miles</SelectItem>
                      <SelectItem value="100">100 miles</SelectItem>
                      <SelectItem value="any">Any distance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationship">Looking For</Label>
                  <Select>
                    <SelectTrigger id="relationship">
                      <SelectValue placeholder="What are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual Dating</SelectItem>
                      <SelectItem value="serious">Serious Relationship</SelectItem>
                      <SelectItem value="friendship">Friendship</SelectItem>
                      <SelectItem value="marriage">Marriage</SelectItem>
                      <SelectItem value="undecided">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">Verification</h3>
                <p className="text-sm text-muted-foreground">Verify your profile to build trust</p>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Why Verify?</h4>
                  <p className="text-sm text-muted-foreground">
                    Verified profiles receive 30% more matches and appear higher in search results. Verification helps
                    build trust in our community and ensures everyone's safety.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Photo Verification</CardTitle>
                      <CardDescription>Confirm your identity with a selfie</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                          <Upload className="h-8 w-8 text-muted-foreground" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Take a selfie matching the pose shown on screen to verify it's really you.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Start Verification</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Phone Verification</CardTitle>
                      <CardDescription>Verify your phone number</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We'll send a verification code to your phone to confirm it's yours.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Send Code
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
          ) : (
            <div></div>
          )}

          {step < 4 ? <Button onClick={nextStep}>Continue</Button> : <Button>Complete Profile</Button>}
        </CardFooter>
      </Card>
    </div>
  )
}

