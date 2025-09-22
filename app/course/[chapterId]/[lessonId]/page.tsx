

import courses from '../../../../data/courses.json';
import AudioList from './AudioList';

export async function generateStaticParams() {
  return courses.chapters.flatMap(chapter =>
    chapter.lessons.map(lesson => ({
      chapterId: chapter.id,
      lessonId: lesson.id
    }))
  );
}

export default function LessonPage({ params }) {
  const { chapterId, lessonId } = params;
  const chapter = courses.chapters.find(c => c.id === chapterId);
  if (!chapter) return <div>Chapter not found</div>;

  const lesson = chapter.lessons.find(l => l.id === lessonId);
  if (!lesson) return <div>Lesson not found</div>;



  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-green-600">MyArabicLogo</div>
        <nav className="space-x-6 flex items-center">
          <a href="/" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="/course" className="text-gray-700 hover:text-green-600">Course</a>
          <a href="/bn" className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">বাংলা</a>
        </nav>
      </header>

      {/* Lesson Content */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{lesson.title.en}</h1>
        <p className="text-gray-600 text-center mb-8">{lesson.intro?.en}</p>

         <div className="max-w-4xl mx-auto py-10 px-6">
          <h1 className="text-3xl font-bold mb-6">{lesson.title.en}</h1>
          <AudioList items={lesson.items} />
        </div>


      </section>
    </main>
  );
}
