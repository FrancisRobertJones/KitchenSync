'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export const RecipeSection = () => {
    const [activeTab, setActiveTab] = useState('add')
  
    return (
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="add">Add Your Own Recipe</TabsTrigger>
          <TabsTrigger value="generate">AI Recipe Generator</TabsTrigger>
        </TabsList>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add Your Own Recipe</CardTitle>
              <CardDescription>Input your recipe details below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter recipe name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="ingredients">Ingredients</Label>
                    <Input id="ingredients" placeholder="Enter ingredients (comma-separated)" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea id="instructions" placeholder="Enter cooking instructions" className='h-36 align-top pt-2 pb-2'/>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Recipe</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="generate">
          <Card>
            <CardHeader>
              <CardTitle>AI Recipe Generator</CardTitle>
              <CardDescription>Generate recipes based on ingredients you have.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="ingredients">Available Ingredients</Label>
                    <Input id="ingredients" placeholder="Enter ingredients you have" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="preferences">Dietary Preferences</Label>
                    <Input id="preferences" placeholder="E.g., vegetarian, low-carb, etc." />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Clear</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Generate Recipe</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    )
  }