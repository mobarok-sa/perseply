import Link from 'next/link';
import Footer from './components/Footer/Footer';





export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
    {/* //header */}
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          আরবি শিখুন সহজে
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          শুরু করুন আমাদের নবাগতদের জন্য আরবি কোর্স দিয়ে: <br />
          <span className="font-semibold text-green-600">৩০০ শব্দ ও বাক্যাংশ</span>
        </p>
    

      <Link
        href="/course"
        className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 transition"
      >
       আজই শেখা শুরু করুন
      </Link>




      </section>

      {/* Course Highlight */}
      <section id="course" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">নবাগতদের জন্য কোর্স</h2>
          <p className="text-gray-600 mb-8">
            আমাদের সাজানো কোর্সের মাধ্যমে আরবির মূল বিষয়গুলো আয়ত্ত করুন।
            ৩০০টি প্রয়োজনীয় শব্দ ও বাক্যাংশ শিখুন যা আপনাকে দৈনন্দিন কথোপকথনে সাহায্য করবে।
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">৩০০ শব্দ ও বাক্যাংশ</h3>
            <p className="text-gray-500 mb-4">
              সহজ পাঠ • উচ্চারণ শোনা • ব্যবহারিক উদাহরণ
            </p>
            <Link
              href="#enroll"
              className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 transition"
            >
              এখনই ভর্তি হন
            </Link>
          </div>
        </div>
      </section>

      {/* Why Learn Arabic */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🌍 বিশ্বজুড়ে সংযোগ</h3>
            <p className="text-gray-600 text-sm">
              আরবি ভাষায় কথা বলে ৪০০ মিলিয়নেরও বেশি মানুষ।
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">📚 নবাগতদের জন্য উপযোগী</h3>
            <p className="text-gray-600 text-sm">
              আমাদের পাঠগুলো একেবারে শুরু থেকে ধাপে ধাপে শেখানোর জন্য তৈরি।
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🎧 যেকোনো জায়গা থেকে শিখুন</h3>
            <p className="text-gray-600 text-sm">
              অডিও উদাহরণগুলো শুনুন এবং নিজের সুবিধামতো অনুশীলন করুন।
            </p>
          </div>
        </div>
      </section>

      {/* Footer in layout page */}
        <Footer variant="home" />
    </main>
  );
}
