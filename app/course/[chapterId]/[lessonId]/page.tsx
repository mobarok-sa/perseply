import Link from "next/link";
import courses from "../../../../data/courses.json";
import AudioList from "./AudioList";
import { BookOpen } from "lucide-react";
import Footer from "@/app/components/Footer/Footer";

export async function generateStaticParams() {
  return courses.chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({
      chapterId: chapter.id,
      lessonId: lesson.id,
    }))
  );
}

interface LessonPageParams {
  chapterId: string;
  lessonId: string;
}

export default async function LessonPage({
  params,
}: {
  params: LessonPageParams;
}) {
  const awaitedParams = await Promise.resolve(params); // workaround for Next params
  const { chapterId, lessonId } = awaitedParams;

  const chapter = courses.chapters.find((c) => c.id === chapterId);
  if (!chapter)
    return <div className="text-center py-20">Chapter not found</div>;

  const lesson = chapter.lessons.find((l) => l.id === lessonId);
  if (!lesson)
    return <div className="text-center py-20">Lesson not found</div>;

  const audioItems = lesson.items.map((item) => ({
    ...item,
    url: item.audio,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-900">
    

      {/* Lesson Content */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          {lesson.title.en}
        </h1>
        <p className="text-gray-600 mb-8">
          Practice pronunciation, meaning, and examples interactively.
        </p>
        <AudioList items={audioItems} />
      </section>


    
      <section className="max-w-4xl mx-auto px-6 pb-16 flex justify-between">
        {chapter.lessons.indexOf(lesson) > 0 ? (
          <Link
            href={`/course/${chapter.id}/${chapter.lessons[chapter.lessons.indexOf(lesson) - 1].id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-700 transition"
          >
            Previous Lesson
          </Link>
        ) : null}
        {chapter.lessons.indexOf(lesson) < chapter.lessons.length - 1 ? (
          <Link
            href={`/course/${chapter.id}/${chapter.lessons[chapter.lessons.indexOf(lesson) + 1].id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-700 transition"
          >
            Next Lesson
          </Link>
        ) : null}
      </section>

      {/* Footer in layout page */}
      <Footer variant="course" />
      
    </main>
  );
}
