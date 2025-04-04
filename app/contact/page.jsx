import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Contact Us</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              We're here to help with any questions or concerns you may have
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-4">For general inquiries and support</p>
                      <a href="mailto:contact@datingapp.com" className="text-primary hover:underline">
                        contact@datingapp.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-4">Available Monday-Friday, 9am-5pm EST</p>
                      <a href="tel:+18001234567" className="text-primary hover:underline">
                        +1 (800) 123-4567
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                      <p className="text-muted-foreground mb-4">Our headquarters location</p>
                      <address className="not-italic text-primary">
                        123 Dating Street
                        <br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Message subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>

                <div className="h-[400px] bg-muted rounded-lg overflow-hidden">
                  {/* This would be a map in a real implementation */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Map would be displayed here</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on the "Sign Up" button in the top right corner of the homepage. You'll
                    need to provide your email, create a password, and complete your profile information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How does the matching algorithm work?</AccordionTrigger>
                  <AccordionContent>
                    Our matching algorithm considers multiple factors including your preferences, interests, location,
                    and behavior on the platform to suggest compatible matches. The more you interact with the app, the
                    better our suggestions become.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I change my location?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can change your location in your profile settings. Premium users can also use the "Travel
                    Mode" feature to match with people in other cities before traveling there.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent>
                    To cancel your subscription, go to your Account Settings, select "Subscription," and click on
                    "Cancel Subscription." Your premium features will remain active until the end of your current
                    billing period.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I report inappropriate behavior?</AccordionTrigger>
                  <AccordionContent>
                    You can report inappropriate behavior by clicking the "Report" button on a user's profile or in your
                    conversation with them. Our moderation team reviews all reports within 24 hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we take data security seriously. Your personal information is encrypted and stored securely. We
                    never share your data with third parties without your consent. You can review our Privacy Policy for
                    more details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    To delete your account, go to Account Settings, scroll to the bottom, and select "Delete Account."
                    This action is permanent and will remove all your data from our platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>What's the difference between free and premium accounts?</AccordionTrigger>
                  <AccordionContent>
                    Free accounts can browse profiles, receive matches, and send a limited number of messages. Premium
                    accounts get additional features like seeing who liked you, unlimited likes, advanced filters,
                    profile boosts, and more.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for? Contact our support team.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:support@datingapp.com">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Email Support
                  </a>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Customer Support</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 8:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>12:00 PM - 5:00 PM EST</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-medium mb-2">Emergency Support</h4>
                      <p className="text-sm text-muted-foreground">
                        For urgent safety concerns outside of regular hours, please email:
                      </p>
                      <a href="mailto:urgent@datingapp.com" className="text-primary hover:underline text-sm">
                        urgent@datingapp.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Support Options</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Email Support</p>
                          <p className="text-sm text-muted-foreground">For general inquiries and non-urgent issues</p>
                          <a href="mailto:support@datingapp.com" className="text-primary hover:underline text-sm">
                            support@datingapp.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Phone Support</p>
                          <p className="text-sm text-muted-foreground">
                            For immediate assistance during business hours
                          </p>
                          <a href="tel:+18001234567" className="text-primary hover:underline text-sm">
                            +1 (800) 123-4567
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Live Chat</p>
                          <p className="text-sm text-muted-foreground">
                            Available on the app and website during business hours
                          </p>
                          <Button variant="link" className="p-0 h-auto text-primary text-sm">
                            Start Chat
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4">Submit a Support Ticket</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-name">Name</Label>
                      <Input id="ticket-name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ticket-email">Email</Label>
                      <Input id="ticket-email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ticket-type">Issue Type</Label>
                    <select
                      id="ticket-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select an issue type</option>
                      <option value="account">Account Issues</option>
                      <option value="billing">Billing & Subscription</option>
                      <option value="technical">Technical Problems</option>
                      <option value="safety">Safety Concerns</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ticket-description">Description</Label>
                    <Textarea
                      id="ticket-description"
                      placeholder="Please describe your issue in detail"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit">Submit Ticket</Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

