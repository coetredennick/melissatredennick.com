import Link from 'next/link'

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Services</h1>
          <p className="text-xl text-gray-700">
            Comprehensive support tailored to your unique journey
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            I offer a range of therapeutic services designed to support you through life's challenges.
            Whether you're navigating trauma, seeking personal growth, or needing support as a caregiver,
            I'm here to help you find your path to healing and resilience.
          </p>
        </div>

        {/* Individual Counseling */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-accent-600 text-white p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-white">Individual Counseling</h2>
              </div>
              <p className="text-accent-50 text-lg">
                Personalized therapy to help you navigate life's challenges and build lasting resilience
              </p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                Individual counseling provides a safe, confidential space where you can explore your thoughts, feelings, and experiences with a compassionate professional who understands.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">What We Address:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Trauma and PTSD</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Anxiety and depression</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Medical trauma</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Caregiver stress and burnout</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Life transitions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Relationship challenges</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Grief and loss</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Self-esteem and identity</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">What to Expect:</h3>
              <p className="text-gray-700 mb-4">
                In our sessions, we'll work together to understand your experiences, identify patterns, and develop practical strategies for healing and growth. I create a warm, non-judgmental environment where you can feel safe to be yourself and explore what matters most to you.
              </p>
            </div>
          </div>
        </div>

        {/* Life Coaching */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary-700 text-white p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-white">Life Coaching</h2>
              </div>
              <p className="text-primary-50 text-lg">
                Goal-oriented support to help you achieve your aspirations and unlock your potential
              </p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                Life coaching focuses on helping you move forward, set meaningful goals, and create actionable plans to achieve them. It's about finding your inner strength and building the life you want to live.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">Areas of Focus:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Setting and achieving goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Career transitions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Work-life balance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Building confidence</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personal growth</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Overcoming obstacles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Creating healthy habits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Finding purpose and meaning</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">My Approach:</h3>
              <p className="text-gray-700 mb-4">
                Life coaching is collaborative and action-oriented. We'll identify what you want to achieve, explore what's holding you back, and create concrete strategies to move you forward. I'll provide accountability, encouragement, and practical tools to help you stay on track.
              </p>
            </div>
          </div>
        </div>

        {/* EMDR Therapy */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-accent-700 text-white p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-white">EMDR Therapy</h2>
              </div>
              <p className="text-accent-50 text-lg">
                Evidence-based trauma treatment for lasting healing
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">What is EMDR?</h3>
              <p className="text-gray-700 mb-6">
                Eye Movement Desensitization and Reprocessing (EMDR) is a scientifically proven therapy that helps people heal from trauma and distressing life experiences. Unlike traditional talk therapy, EMDR uses bilateral stimulation (such as eye movements) to help your brain process traumatic memories in a way that reduces their emotional impact.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">How EMDR Helps:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduces the emotional intensity of traumatic memories</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Helps process disturbing experiences that feel "stuck"</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Alleviates symptoms of PTSD, anxiety, and depression</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Allows you to remember events without being overwhelmed</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Promotes natural healing processes in the brain</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">Who Can Benefit:</h3>
              <p className="text-gray-700 mb-4">
                EMDR is particularly effective for individuals who have experienced:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Medical trauma</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Accidents or injuries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Childhood trauma</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Loss and grief</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Anxiety and panic</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Disturbing life events</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-primary-700">What to Expect:</h3>
              <p className="text-gray-700 mb-4">
                EMDR typically involves eight phases, starting with history-taking and preparation, moving through the processing of specific memories, and concluding with evaluation. Sessions are conducted in a safe, controlled environment, and you remain in control throughout the process. Many people experience significant relief in fewer sessions than traditional therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Format */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Flexible Session Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">In-Person Sessions</h3>
              <p className="text-gray-700 mb-4">
                Meet with me at my comfortable Houston office for face-to-face sessions.
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong><br />
                4265 Woodway Drive, Ste 745<br />
                Houston, TX 77057
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-accent-700">Virtual Visits</h3>
              <p className="text-gray-700 mb-4">
                Connect from anywhere with secure, confidential online sessions via video call.
              </p>
              <p className="text-gray-600">
                <strong>Benefits:</strong><br />
                No travel time, flexible scheduling, comfort of your own space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact me today to discuss which service is right for you and schedule your first session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Schedule a Consultation
            </Link>
            <Link href="/faq" className="btn-secondary text-lg">
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
