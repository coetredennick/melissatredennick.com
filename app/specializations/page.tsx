import Link from 'next/link'

export default function Specializations() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Specializations</h1>
          <p className="text-xl text-gray-700">
            Expert support grounded in lived experience and professional training
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            My specializations are deeply informed by my personal journey as a long-term caregiver and my professional training in psychology. I bring both empathy and expertise to support individuals and families facing medical trauma and the unique challenges of caregiving.
          </p>
        </div>
      </section>

      {/* Medical Trauma Support */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-accent-600 text-white p-8 md:p-12">
            <h2 className="text-white mb-4">Medical Trauma Support</h2>
            <p className="text-accent-50 text-lg">
              Compassionate care for individuals and families navigating medical crises and their lasting impact
            </p>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary-700">Understanding Medical Trauma</h3>
            <p className="text-gray-700 mb-6">
              Medical trauma can occur when you or someone you love experiences a serious illness, injury, medical procedure, or diagnosis. The impact extends far beyond the physical—it affects your emotional well-being, relationships, sense of safety, and outlook on life.
            </p>

            <p className="text-gray-700 mb-8">
              As someone who has lived with medical trauma for over 22 years, I understand firsthand how it reshapes your world. I know the fear, the uncertainty, the grief for the life you thought you'd have, and the daily challenge of adapting to a new reality.
            </p>

            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 text-primary-800">Common Experiences with Medical Trauma:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Flashbacks or intrusive thoughts about medical events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Anxiety around medical appointments or procedures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Hypervigilance about health symptoms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Difficulty trusting medical professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Feeling isolated or misunderstood</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Grief over lost abilities or lifestyle changes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Relationship strain due to medical challenges</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Struggle to maintain hope for the future</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-primary-700">How I Can Help</h3>
            <p className="text-gray-700 mb-6">
              I provide a safe space to process the emotional impact of medical trauma, whether it happened recently or years ago. We'll work together to:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Process traumatic memories</strong>
                  <p className="text-gray-600">Using EMDR and other trauma-informed approaches to reduce the emotional intensity of difficult memories</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Develop coping strategies</strong>
                  <p className="text-gray-600">Build practical tools for managing anxiety, fear, and the ongoing challenges of medical situations</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Navigate relationship changes</strong>
                  <p className="text-gray-600">Address how medical trauma affects your relationships and communication with loved ones</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Rebuild a sense of safety</strong>
                  <p className="text-gray-600">Work toward feeling secure again in your body and your life</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Find meaning and resilience</strong>
                  <p className="text-gray-600">Discover your inner strength and create a meaningful path forward</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Caregiver Support */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-primary-700 text-white p-8 md:p-12">
            <h2 className="text-white mb-4">Caregiver Support</h2>
            <p className="text-primary-50 text-lg">
              Specialized support for those who care for others—because caregivers need care too
            </p>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary-700">The Caregiver's Journey</h3>
            <p className="text-gray-700 mb-6">
              As the wife of a paraplegic for over 22 years, I intimately understand the caregiver experience. I know the profound love that motivates us, the exhaustion that follows, the guilt that creeps in, and the isolation that can feel overwhelming.
            </p>

            <p className="text-gray-700 mb-8">
              Caregiving is one of the most demanding yet underrecognized roles anyone can take on. It requires physical stamina, emotional resilience, constant problem-solving, and often comes with little support or acknowledgment. You may feel invisible, depleted, or like you're losing yourself in the process of caring for someone else.
            </p>

            <div className="bg-accent-50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 text-accent-800">Common Caregiver Challenges:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Chronic stress and burnout</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Compassion fatigue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Guilt about needing help</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Loss of personal identity</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Social isolation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Relationship strain</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Financial pressure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Decision-making burden</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-primary-700">Support Tailored for Caregivers</h3>
            <p className="text-gray-700 mb-6">
              In our work together, you'll have a space that's entirely yours—a place where you can be honest about your struggles, your feelings, and your needs without judgment or guilt. We'll focus on:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Preventing and addressing burnout</strong>
                  <p className="text-gray-600">Recognize early warning signs and develop sustainable self-care practices</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Managing stress and complex emotions</strong>
                  <p className="text-gray-600">Process feelings of grief, resentment, anger, love, and everything in between</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Setting healthy boundaries</strong>
                  <p className="text-gray-600">Learn to say no, ask for help, and prioritize your own well-being</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Reconnecting with yourself</strong>
                  <p className="text-gray-600">Rediscover who you are beyond the caregiver role</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Building resilience</strong>
                  <p className="text-gray-600">Develop strength and coping skills for the long haul</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-primary-700">Navigating difficult decisions</strong>
                  <p className="text-gray-600">Get support in making hard choices about care, resources, and your own life</p>
                </div>
              </li>
            </ul>

            <div className="bg-primary-50 rounded-lg p-6">
              <p className="text-gray-700 italic">
                "You cannot pour from an empty cup. Taking care of yourself isn't selfish—it's essential. As caregivers, we often struggle with this truth, but I've learned through my own journey that seeking support and prioritizing our own well-being makes us better able to care for those we love."
              </p>
              <p className="text-primary-700 font-semibold mt-4">— Melissa Tredennick</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">You Don't Have to Face This Alone</h2>
          <p className="text-xl mb-8 text-accent-50">
            Whether you're navigating medical trauma or the challenges of caregiving, I'm here to support you with understanding, expertise, and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="bg-accent-700 hover:bg-accent-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg border-2 border-white">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
