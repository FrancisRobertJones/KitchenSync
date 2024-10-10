'use client'
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "../ui/avatar"
import { Star } from "lucide-react"
import { ScrollBar } from "../ui/scroll-area"

export const TestimonialSection = () => {
    const testimonials = [
      { name: 'Alice Johnson', avatar: '/placeholder.svg?height=40&width=40', rating: 5, text: 'Game changer!' },
      { name: 'Bob Smith', avatar: '/placeholder.svg?height=40&width=40', rating: 4, text: 'Like having a personal chef!' },
      { name: 'Carol Davis', avatar: '/placeholder.svg?height=40&width=40', rating: 5, text: 'Saves me so much time!' },
      { name: 'David Wilson', avatar: '/placeholder.svg?height=40&width=40', rating: 4, text: 'No more double purchases!' },
    ]
  

    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-[350px] shrink-0">
                  <CardHeader>
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal">
              <ScrollBar />
            </ScrollBar>
          </ScrollArea>
        </div>
      </section>
    )
  }