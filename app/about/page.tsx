import Link from 'next/link'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Meet Melissa</h1>
          <p className="text-xl text-gray-700">
            Licensed Counselor | Caregiver | Advocate
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Hi, I'm Melissa Tredennick, and I'm thrilled to announce the opening of my private counseling practice.
            </p>

            <h2 className="mt-12 mb-6">My Journey</h2>
            <p className="text-gray-700 mb-6">
              I am passionate about supporting caregivers and individuals navigating medical trauma.
              As the wife of a paraplegic for over 22 years, I have lived through the daily challenges trauma brings—and the resilience it can inspire.
            </p>

            <p className="text-gray-700 mb-6">
              My personal journey through marriage, parenting, and life's complexities has given me a profound understanding of the emotional landscape that trauma creates.
              I know firsthand the isolation caregivers can feel, the weight of responsibility, and the strength it takes to keep moving forward each day.
            </p>

            <p className="text-gray-700 mb-6">
              But I also know the power of resilience, the importance of support, and the healing that comes from being truly understood.
              These experiences have shaped not only who I am as a person, but also who I am as a counselor.
            </p>

            <h2 className="mt-12 mb-6">Professional Background</h2>
            <p className="text-gray-700 mb-6">
              My graduate degree in psychology equips me to guide others with both empathy and expertise.
              I've dedicated my professional training to understanding trauma, resilience, and the therapeutic approaches that foster genuine healing and growth.
            </p>

            <p className="text-gray-700 mb-6">
              I am supervised by Charissa Lopez, LPC-S (License #73709), a respected professional in the field who provides guidance and oversight to ensure the highest quality of care.
            </p>

            <h2 className="mt-12 mb-6">My Approach</h2>
            <p className="text-gray-700 mb-6">
              In my practice, I work to create a safe, compassionate space where you can explore your experiences, process your emotions, and develop the tools you need to thrive.
              I believe therapy should be collaborative—we'll work together to identify your goals and create a path forward that honors your unique story.
            </p>

            <p className="text-gray-700 mb-6">
              I integrate various therapeutic approaches including traditional counseling, life coaching, and EMDR therapy to meet your individual needs.
              Whether you're seeking support to heal from trauma, navigate a life transition, or simply find more balance and peace in your daily life, I'm here to help.
            </p>

            <h2 className="mt-12 mb-6">Why I Do This Work</h2>
            <p className="text-gray-700 mb-6">
              I understand that taking the step to begin counseling can feel intimidating.
              You might wonder if it will really help, if someone can truly understand what you're going through, or if you even deserve to take time for yourself.
            </p>

            <p className="text-gray-700 mb-8">
              I believe counseling is a vital path to healing, growth, and finding strength in the midst of life's challenges.
              Whether you are seeking support to heal, grow, or tackle life's hurdles, I am here to help you navigate your journey with compassion, understanding, and professional expertise.
            </p>
          </div>

          {/* Credentials Box */}
          <div className="bg-primary-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Professional Credentials</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Graduate degree in psychology</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Supervised by Charissa Lopez, LPC-S (License #73709)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Trained in EMDR therapy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Specialization in trauma and caregiver support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Life coaching certification</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>22+ years of lived experience as a caregiver</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-700 mb-8">
              I'd be honored to support you on your journey toward healing and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                Explore My Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
