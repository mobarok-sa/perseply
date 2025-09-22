"use client";


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Coffee, Smile, Hash } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  { title: "Greetings", icon: Smile, color: "bg-green-100" },
  { title: "Numbers", icon: Hash, color: "bg-blue-100" },
  { title: "Food", icon: Coffee, color: "bg-yellow-100" },
  { title: "Basics", icon: BookOpen, color: "bg-purple-100" },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Language Course</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
              <CardContent className="flex flex-col items-center p-6 gap-4">
                <div className={`p-4 rounded-full ${topic.color}`}>
                  <topic.icon className="w-8 h-8 text-gray-800" />
                </div>
                <h2 className="text-xl font-semibold">{topic.title}</h2>
                <Button className="rounded-xl mt-2">Start</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
