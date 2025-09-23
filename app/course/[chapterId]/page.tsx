import courses from '../../../data/courses.json';
import Link from 'next/link';




export async function generateStaticParams() {
  return courses.chapters.flatMap(chapter =>
    chapter.lessons.map(lesson => ({ chapterId: chapter.id, lessonId: lesson.id }))
  );
}



interface ChapterPageParams {
  chapterId: string;
}

export default async  function ChapterPage({ params }: { params: ChapterPageParams }) {

// Use imported courses data directly
  const chapter = courses.chapters.find(c => c.id === params.chapterId);

  if (!chapter) return <div className="text-center py-20">Chapter not found</div>;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-green-600">MyArabicLogo</div>
        <nav className="space-x-6 flex items-center">
          <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/course" className="text-gray-700 hover:text-green-600">Course</Link>
          <Link href="/bn" className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">বাংলা</Link>
        </nav>
      </header>

      {/* Chapter Content */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{chapter.title.en}</h1>
        <ul className="space-y-6">
          {chapter.lessons.map(lesson => (
            <li key={lesson.id} className="p-6 bg-gradient-to-r from-green-50 to-white rounded-2xl shadow flex justify-between items-center">
              <span className="font-semibold text-lg md:text-xl">{lesson.title.en}</span>
              <Link href={`/course/${chapter.id}/${lesson.id}`} className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 transition">
                Open Lesson
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}





// export default function ChapterPage({ params }) {
//   const chapter = courses.chapters.find(c => c.id === params.chapterId);

//   if (!chapter) return <div>Chapter not found</div>;

//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       {/* Header with Logo and Menu */}
//       <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
//         <div className="text-2xl font-bold text-green-600">MyArabicLogo</div>
//         <nav className="space-x-6 flex items-center">
//           <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
//           <Link href="/course" className="text-gray-700 hover:text-green-600">Course</Link>
//           <Link href="/bn" className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">বাংলা</Link>
//         </nav>
//       </header>

//       {/* Chapter Content */}
//       <section className="max-w-5xl mx-auto py-10 px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{chapter.title.en}</h1>
//         <ul className="space-y-6">
//           {chapter.lessons.map(lesson => (
//             <li key={lesson.id} className="p-6 bg-gradient-to-r from-green-50 to-white rounded-2xl shadow flex justify-between items-center">
//               <span className="font-semibold text-lg md:text-xl">{lesson.title.en}</span>
//               <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 transition">Open Lesson</a>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </main>
//   );
// }

