'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided } from 'react-beautiful-dnd'
import { Plus, X, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


type Meal = {
  id: string
  name: string
  image: string
  isCooked: boolean
}

type DayMeals = {
  breakfast: Meal | null
  lunch: Meal | null
  dinner: Meal | null
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner']

export default function Planning() {
  const [weekPlan, setWeekPlan] = useState<{ [key: string]: DayMeals }>({
    Monday: { breakfast: null, lunch: null, dinner: null },
    Tuesday: { breakfast: null, lunch: null, dinner: null },
    Wednesday: { breakfast: null, lunch: null, dinner: null },
    Thursday: { breakfast: null, lunch: null, dinner: null },
    Friday: { breakfast: null, lunch: null, dinner: null },
  })

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const { source, destination } = result
    const [sourceDay, sourceMealType] = source.droppableId.split('-')
    const [destDay, destMealType] = destination.droppableId.split('-')

    const newWeekPlan = { ...weekPlan }
    const meal = newWeekPlan[sourceDay][sourceMealType as keyof DayMeals]

    newWeekPlan[sourceDay][sourceMealType as keyof DayMeals] = null
    newWeekPlan[destDay][destMealType as keyof DayMeals] = meal

    setWeekPlan(newWeekPlan)
  }

  const toggleCookedStatus = (day: string, mealType: keyof DayMeals) => {
    const newWeekPlan = { ...weekPlan }
    const meal = newWeekPlan[day][mealType]
    if (meal) {
      meal.isCooked = !meal.isCooked
      setWeekPlan(newWeekPlan)
    }
  }

  const addMeal = (day: string, mealType: keyof DayMeals) => {
    const newWeekPlan = { ...weekPlan }
    const newMeal: Meal = {
      id: `meal-${Date.now()}`,
      name: 'New Meal',
      image: '/placeholder.svg',
      isCooked: false,
    }
    newWeekPlan[day][mealType] = newMeal
    setWeekPlan(newWeekPlan)
  }

  const removeMeal = (day: string, mealType: keyof DayMeals) => {
    const newWeekPlan = { ...weekPlan }
    newWeekPlan[day][mealType] = null
    setWeekPlan(newWeekPlan)
  }

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">KitchenSync Meal Planner</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-5 gap-4">
          {DAYS.map((day) => (
            <div key={day} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">{day}</h2>
              {MEAL_TYPES.map((mealType) => (
                <Droppable key={`${day}-${mealType}`} droppableId={`${day}-${mealType}`}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="mb-4 bg-gray-50 p-2 rounded-md min-h-[100px]"
                    >
                      <h3 className="text-sm font-medium mb-2 text-gray-600 capitalize">{mealType}</h3>
                      {weekPlan[day][mealType as keyof DayMeals] ? (
                        <Draggable
                          draggableId={`${day}-${mealType}-${weekPlan[day][mealType as keyof DayMeals]?.id}`}
                          index={0}
                        >
                          {(provided: DraggableProvided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps}>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700">
                                    {weekPlan[day][mealType as keyof DayMeals]?.name}
                                  </span>
                                  <div className="flex items-center space-x-2">
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            className="p-1"
                                            onClick={() => toggleCookedStatus(day, mealType as keyof DayMeals)}
                                          >
                                            {weekPlan[day][mealType as keyof DayMeals]?.isCooked ? '🍽️' : '🍳'}
                                          </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{weekPlan[day][mealType as keyof DayMeals]?.isCooked ? 'Mark as not cooked' : 'Mark as cooked'}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="p-1"
                                      onClick={() => removeMeal(day, mealType as keyof DayMeals)}
                                    >
                                      <X className="h-4 w-4 text-gray-500" />
                                    </Button>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          )}
                        </Draggable>
                      ) : (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-gray-500 border-dashed"
                                onClick={() => addMeal(day, mealType as keyof DayMeals)}
                              >
                                <Plus className="h-4 w-4 mr-2" /> Add Meal
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to add a new meal</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          ))}
        </div>
      </DragDropContext>
      <div className="mt-8 text-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="text-gray-600">
                <Info className="h-4 w-4 mr-2" /> How to use
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Drag and drop meals to rearrange. Click the plate icon to mark as cooked.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}