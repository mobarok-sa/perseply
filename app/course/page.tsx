import courses from "../../data/courses.json";
import Link from "next/link";

import {Book} from "lucide-react";


export default function CoursePage() {



  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-900">
      {/* Header with Logo and Menu */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-green-600 tracking-tight">
          MyArabicLogo
        </div>
        <nav className="space-x-6 flex items-center">
          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Home
          </Link>
          <Link
            href="/course"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Course
          </Link>
        </nav>
      </header>

      {/* Course Intro */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Arabic Beginner Course
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master the basics of Arabic step by step. Unlock lessons by completing
          chapters and track your progress as you learn.
        </p>
      </section>

      {/* Chapter Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.chapters.map((chapter, idx) => {
            
             
            return (
              <div
                key={chapter.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition group flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 bg-green-100 rounded-full group-hover:scale-110 transition ${chapter.color} `}>
                    
                    <Book className="w-7 h-7 text-gray-800" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {idx + 1}. {chapter.title.en}
                  </h2>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  {chapter.lessons.length} Lessons
                </p>

           

                <Link
                  href={`/course/${chapter.id}`}
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-700 transition text-center"
                >
                  Start Chapter
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
