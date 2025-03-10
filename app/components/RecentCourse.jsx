"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { courses } from "@/data";
import { Star, User } from "lucide-react";
import { useState } from "react";

export default function RecentlyAddedCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-8 w-4/5 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Recently added courses</h2>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="relative cursor-pointer hover:shadow-lg border-0 rounded-none"
            onClick={() => setSelectedCourse(course)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <span className="text-xs font-bold text-orange-600">
                {course.category}
              </span>
              <h3 className="text-sm font-semibold mt-1">{course.title}</h3>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-500 w-4 h-4" />
                <span className="text-xs ml-1">{course.rating}</span>
                <User className="ml-4 w-4 h-4" />
                <span className="text-xs ml-1">{course.students} students</span>
              </div>
              <span className="block mt-2 font-bold">{course.price}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedCourse && (
        <Dialog
          open={!!selectedCourse}
          onOpenChange={() => setSelectedCourse(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedCourse.title}</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-gray-600">Course by Kevin Gilbert</p>
            <div className="flex items-center mt-2">
              <Star className="text-yellow-500 w-4 h-4" />
              <span className="text-xs ml-1">
                {selectedCourse.rating} (357,914 reviews)
              </span>
            </div>
            <p className="text-sm mt-2">
              {selectedCourse.students} students • Beginner • 6 hour
            </p>
            <div className="mt-2">
              <span className="text-gray-400 line-through">$20.00</span>
              <span className="text-red-600 text-lg font-bold ml-2">
                $14.00
              </span>
              <span className="text-green-600 ml-2 text-sm">56% OFF</span>
            </div>
            <ul className="text-sm mt-4">
              <li className="flex items-center">
                ✔ Learn to use Python professionally, learning both Python 2
                and Python 3!
              </li>
              <li className="flex items-center">
                ✔ Create games with Python, like Tic Tac Toe and Blackjack!
              </li>
            </ul>
            <Button className="w-full mt-4">Add To Cart</Button>
            <Button variant="outline" className="w-full mt-2">
              Course Detail
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
