import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Blog & Resources</h1>
          <p className="text-xl text-gray-700">
            Insights on trauma, healing, and the therapeutic journey
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* EMDR Article */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-200">
            <div className="p-8">
              <div className="text-sm text-accent-600 font-medium mb-2">
                TRAUMA THERAPY
              </div>
              <h2 className="text-3xl font-bold text-primary-800 mb-4">
                What Is EMDR Therapy and Why Is It Helpful for Trauma Survivors?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Eye Movement Desensitization and Reprocessing (EMDR) is a psychotherapy method designed to help people recover from trauma. If you're a trauma survivor, you might still feel as if the painful event is fresh or "stuck" in your mind...
              </p>
              <Link
                href="/blog/emdr-therapy-trauma-survivors"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
              >
                Read Full Article
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>

          {/* Coming Soon Placeholder */}
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">More articles coming soon...</p>
            <p className="text-gray-500 text-sm">
              Check back regularly for new insights on trauma healing, caregiver support, and mental wellness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-lg text-gray-700 mb-8">
            If you're interested in learning more about EMDR therapy or any of my services, I'd be happy to discuss how I can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-lg">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
