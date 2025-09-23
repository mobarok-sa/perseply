import courses from "../../../data/courses.json";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/app/components/Footer/Footer";

export async function generateStaticParams() {
  return courses.chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({
      chapterId: chapter.id,
      lessonId: lesson.id,
    }))
  );
}

interface ChapterPageParams {
  chapterId: string;
}

export default async function ChapterPage({
  params,
}: {
  params: ChapterPageParams;
}) {
  const chapter = courses.chapters.find((c) => c.id === params.chapterId);

  if (!chapter)
    return <div className="text-center py-20">Chapter not found</div>;

  return (
     <main className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white text-gray-900">
     
     <div className="flex-1">
      {/* Chapter Intro */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          {chapter.title.en}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the lessons in this chapter. Unlock knowledge step by step.
        </p>
      </section>

      {/* Lessons Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chapter.lessons.map((lesson, idx) => (
          <Card
            key={lesson.id}
            className="rounded-2xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <BookOpen className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">
                {idx + 1}. {lesson.title.en}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Link href={`/course/${chapter.id}/${lesson.id}`} className="w-full">
                <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
                  Start Lesson <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
      </div>



      {/* Footer in layout page */} 
        <Footer variant="course" />
    </main>
  );
}
