import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Supporting caregivers and individuals navigating medical trauma through compassionate, expert counseling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Schedule Consultation
              </Link>
              <Link href="/about" className="btn-secondary text-lg">
                Learn More About Melissa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Meet Melissa</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hi, I'm Melissa Tredennick, and I'm thrilled to announce the opening of my private counseling practice.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I am passionate about supporting caregivers and individuals navigating medical trauma.
            As the wife of a paraplegic for over 22 years, I have lived through the daily challenges trauma brings—and the resilience it can inspire.
            My personal journey through marriage, parenting, and life's complexities has given me a profound understanding of the struggles, life coaching, EMDR and more through both in person and virtual visits.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            My graduate degree in psychology equips me to guide others with empathy and expertise. Whether you are seeking support to heal, grow, or tackle life's hurdles, I am here to help.
          </p>
        </div>
      </section>

      {/* Call to Action - Taking the First Step */}
      <section className="bg-accent-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-accent-800">Taking the First Step</h2>
          <p className="text-lg text-gray-700 mb-8">
            Taking the step to begin counseling can feel intimidating, but I believe it's a vital path to healing, growth, and finding strength in the midst of life's challenges.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container">
        <h2 className="text-center mb-12">How I Can Support You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-700">Individual Counseling</h3>
            <p className="text-gray-600 mb-4">
              Personalized therapy sessions to help you navigate life's challenges, process trauma, and build resilience.
            </p>
            <Link href="/services" className="text-accent-600 hover:text-accent-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-700">Life Coaching</h3>
            <p className="text-gray-600 mb-4">
              Guidance and support to help you achieve your goals, navigate transitions, and find your inner strength.
            </p>
            <Link href="/services" className="text-accent-600 hover:text-accent-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-700">EMDR Therapy</h3>
            <p className="text-gray-600 mb-4">
              Evidence-based trauma treatment to help you process difficult memories and reduce their emotional impact.
            </p>
            <Link href="/services" className="text-accent-600 hover:text-accent-700 font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Areas of Specialization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Medical Trauma Support</h3>
              <p className="text-gray-700 mb-4">
                Having lived with medical trauma firsthand, I understand the unique challenges you face.
                I provide compassionate support for individuals and families navigating medical crises,
                chronic illness, and the ongoing impact of medical trauma.
              </p>
              <Link href="/specializations" className="text-accent-600 hover:text-accent-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Caregiver Support</h3>
              <p className="text-gray-700 mb-4">
                As a long-term caregiver myself, I deeply understand the emotional toll and challenges caregivers face.
                I offer specialized support to help you manage stress, prevent burnout, and find balance while caring for loved ones.
              </p>
              <Link href="/specializations" className="text-accent-600 hover:text-accent-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Flexible Session Options</h2>
          <p className="text-lg text-gray-700 mb-8">
            I offer both in-person sessions at my Houston office and virtual visits to accommodate your needs and preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-primary-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">In-Person Sessions</h3>
              <p className="text-gray-600">
                4265 Woodway Drive, Ste 745<br />
                Houston, TX 77057
              </p>
            </div>
            <div className="p-6 border-2 border-accent-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent-700">Virtual Visits</h3>
              <p className="text-gray-600">
                Secure, confidential online sessions from the comfort of your home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl mb-8 text-accent-50">
            Contact me today to schedule your consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get in Touch
            </Link>
            <a href="tel:713-800-3687" className="bg-accent-700 hover:bg-accent-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Call: 713-800-3687
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
