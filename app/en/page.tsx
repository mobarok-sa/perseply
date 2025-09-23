import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header with Logo and Menu */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold text-blue-600">
          MyArabicLogo
        </div>

        {/* Menu */}
        <nav className="space-x-6 flex items-center">
          <Link href="#course" className="text-gray-700 hover:text-blue-600">
            Course
          </Link>
          <Link href="#enroll" className="text-gray-700 hover:text-blue-600">
            Enroll
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            বাংলা
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Learn Arabic with Ease
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          Start your journey with our beginner-friendly Arabic course: <br />
          <span className="font-semibold text-blue-600">300 Words & Phrases</span>
        </p>
        <Link
          href="#course"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Start Learning Today
        </Link>
      </section>

      {/* Course Highlight */}
      <section id="course" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Beginner Course</h2>
          <p className="text-gray-600 mb-8">
            Master the basics of Arabic with our carefully designed course.
            Learn 300 essential words and phrases that will help you communicate in everyday situations.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">300 Words & Phrases</h3>
            <p className="text-gray-500 mb-4">
              Simple lessons • Audio pronunciation • Practical examples
            </p>
            <Link
              href="#enroll"
              className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Learn Arabic */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🌍 Connect Globally</h3>
            <p className="text-gray-600 text-sm">
              Arabic is spoken by over 400 million people worldwide.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">📚 Beginner Friendly</h3>
            <p className="text-gray-600 text-sm">
              Our lessons are designed for absolute beginners with step-by-step guidance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">🎧 Learn Anywhere</h3>
            <p className="text-gray-600 text-sm">
              Access audio examples and practice at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="enroll" className="bg-blue-600 text-white text-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="mb-6">Enroll in our Beginner Arabic Course today.</p>
        <Link
          href="#"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition"
        >
          Enroll Now
        </Link>
      </footer>
    </main>
  );
}