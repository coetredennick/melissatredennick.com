'use client'

import Link from 'next/link'
import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string | React.ReactNode
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-accent-600 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-primary-700 pr-8">{question}</h3>
        <svg
          className={`w-6 h-6 text-accent-600 flex-shrink-0 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-700 prose prose-lg max-w-none">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What can I expect in the first session?",
      answer: (
        <>
          <p>
            The first session is all about getting to know each other and understanding what brings you to therapy.
            We'll discuss your concerns, goals, and what you hope to achieve through counseling. I'll also explain
            my approach and answer any questions you have about the therapeutic process.
          </p>
          <p>
            This is a collaborative process, and it's important that you feel comfortable. There's no pressure to
            share more than you're ready to—we'll move at your pace. By the end of our first session, we'll have
            a clearer picture of how we can work together to support your healing and growth.
          </p>
        </>
      ),
    },
    {
      question: "How do I know if counseling is right for me?",
      answer: (
        <>
          <p>
            If you're feeling overwhelmed, stuck, or like you could benefit from support navigating life's
            challenges, counseling can help. You don't need to be in crisis to seek therapy—many people come to
            counseling to work on personal growth, manage stress, or process difficult experiences.
          </p>
          <p>
            Some signs that counseling might be helpful include:
          </p>
          <ul>
            <li>Feeling anxious, depressed, or emotionally overwhelmed</li>
            <li>Struggling with a difficult life transition or loss</li>
            <li>Having trouble in relationships</li>
            <li>Dealing with trauma or past experiences that still affect you</li>
            <li>Wanting to understand yourself better and grow as a person</li>
            <li>Feeling burned out or overwhelmed by caregiving responsibilities</li>
          </ul>
          <p>
            If you're unsure whether counseling is right for you, I offer consultations where we can discuss your
            situation and determine if working together would be a good fit.
          </p>
        </>
      ),
    },
    {
      question: "What's the difference between in-person and virtual sessions?",
      answer: (
        <>
          <p>
            Both in-person and virtual sessions offer the same quality of care and therapeutic support. The main
            difference is the format:
          </p>
          <p>
            <strong>In-Person Sessions:</strong> You'll meet with me at my Houston office. Some people prefer the
            structure of coming to a dedicated therapy space and find it easier to focus without home distractions.
          </p>
          <p>
            <strong>Virtual Sessions:</strong> We'll connect via secure video call. This option offers flexibility,
            eliminates travel time, and allows you to attend sessions from the comfort of your own space. Virtual
            sessions are ideal if you have mobility challenges, a busy schedule, or simply prefer the convenience.
          </p>
          <p>
            Both formats are equally effective, and you can choose whichever works best for your lifestyle and preferences.
            You can even switch between formats if your needs change.
          </p>
        </>
      ),
    },
    {
      question: "How long are sessions and how often will we meet?",
      answer: (
        <>
          <p>
            Individual therapy sessions are typically 50-60 minutes long. When we first begin working together,
            I usually recommend weekly sessions to build momentum and establish a strong therapeutic relationship.
          </p>
          <p>
            As you progress and feel more stable, we might reduce the frequency to every other week or monthly
            sessions. The exact schedule will depend on your needs, goals, and what works best for you.
          </p>
          <p>
            We'll regularly check in about the frequency of our sessions to ensure it's meeting your needs.
          </p>
        </>
      ),
    },
    {
      question: "Do you accept insurance?",
      answer: (
        <>
          <p>
            Insurance coverage varies by provider and plan. I recommend contacting your insurance company directly
            to inquire about your mental health benefits and out-of-network coverage.
          </p>
          <p>
            I can provide you with a superbill (detailed receipt) that you can submit to your insurance company
            for potential reimbursement. Many insurance plans offer some level of out-of-network benefits.
          </p>
          <p>
            During our initial consultation, we can discuss payment options and work together to find an
            arrangement that fits your situation.
          </p>
        </>
      ),
    },
    {
      question: "What is EMDR and how is it different from regular therapy?",
      answer: (
        <>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is a specialized form of therapy designed to help
            people heal from trauma and distressing life experiences. Unlike traditional talk therapy, which
            focuses primarily on discussing your experiences, EMDR uses bilateral stimulation (such as eye movements)
            to help your brain process traumatic memories.
          </p>
          <p>
            During EMDR, you'll recall traumatic memories while following specific eye movements or other forms of
            bilateral stimulation. This process helps your brain reprocess the memories in a way that reduces their
            emotional intensity and allows natural healing to occur.
          </p>
          <p>
            EMDR can be particularly effective for trauma, PTSD, anxiety, and other conditions where disturbing
            memories continue to impact your daily life. Many people experience significant relief in fewer sessions
            than traditional therapy alone.
          </p>
        </>
      ),
    },
    {
      question: "Is what we discuss confidential?",
      answer: (
        <>
          <p>
            Yes, confidentiality is a cornerstone of the therapeutic relationship. Everything you share in our
            sessions is private and protected by law. I will not share any information about you without your
            written consent.
          </p>
          <p>
            There are a few legally mandated exceptions to confidentiality:
          </p>
          <ul>
            <li>If there is imminent risk of harm to yourself or others</li>
            <li>If there is suspected abuse of a child, elderly person, or dependent adult</li>
            <li>If I receive a court order requiring me to release information</li>
          </ul>
          <p>
            Beyond these rare exceptions, your privacy is completely protected. You can feel safe sharing openly
            in our sessions.
          </p>
        </>
      ),
    },
    {
      question: "What if I'm in crisis or need help between sessions?",
      answer: (
        <>
          <p>
            If you're experiencing a mental health emergency or crisis, please call 911 or go to your nearest
            emergency room immediately. You can also contact the National Suicide Prevention Lifeline at
            988 (call or text) for 24/7 crisis support.
          </p>
          <p>
            For non-emergency concerns between sessions, you can reach out via email or phone, and I'll respond
            as soon as possible. However, please note that I may not be able to respond immediately, especially
            outside of business hours.
          </p>
          <p>
            During our work together, we'll also create a safety plan and identify resources you can use if you
            need support between sessions.
          </p>
        </>
      ),
    },
    {
      question: "How long will I need to be in therapy?",
      answer: (
        <>
          <p>
            The length of therapy varies greatly depending on your individual needs, goals, and circumstances.
            Some people find relief and achieve their goals in a few months, while others benefit from longer-term
            support.
          </p>
          <p>
            Factors that influence duration include:
          </p>
          <ul>
            <li>The complexity of the issues you're addressing</li>
            <li>Your personal goals for therapy</li>
            <li>How quickly you feel you're making progress</li>
            <li>Whether you're dealing with ongoing challenges or past experiences</li>
          </ul>
          <p>
            We'll regularly discuss your progress and reassess whether therapy is still serving you. The goal
            is not to keep you in therapy indefinitely, but to help you develop the tools and insights you need
            to thrive on your own. You're always in control of when you feel ready to conclude therapy.
          </p>
        </>
      ),
    },
    {
      question: "What makes your approach unique?",
      answer: (
        <>
          <p>
            My approach is unique because it combines professional training with deeply personal lived experience.
            As the wife of a paraplegic for over 22 years, I understand firsthand what it means to live with medical
            trauma and the challenges of long-term caregiving. This isn't just theoretical knowledge for me—it's my life.
          </p>
          <p>
            I bring both empathy born of experience and expertise developed through my graduate degree in psychology
            and specialized training in EMDR and trauma-informed care. I know what it's like to feel overwhelmed,
            isolated, and stretched beyond your limits. I also know that healing and resilience are possible.
          </p>
          <p>
            My approach is collaborative, compassionate, and practical. We'll work together as partners in your
            healing journey, and I'll provide you with tools and strategies you can use in your daily life, not
            just during our sessions.
          </p>
        </>
      ),
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700">
            Find answers to common questions about counseling and my practice
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-accent-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-accent-800">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              If you have additional questions or concerns that aren't addressed here, I'd be happy to discuss
              them with you. Feel free to reach out, and we can schedule a brief consultation to talk about your
              needs and how I might be able to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Me
              </Link>
              <a href="tel:713-502-3457" className="btn-secondary">
                Call: 713-502-3457
              </a>
            </div>
          </div>

          {/* Crisis Resources */}
          <div className="mt-8 bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-red-800">Crisis Resources</h3>
            <p className="text-gray-700 mb-4">
              If you're in crisis and need immediate help:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Emergency:</strong> Call 911
              </li>
              <li>
                <strong>National Suicide Prevention Lifeline:</strong>{' '}
                <a href="tel:988" className="text-accent-600 hover:text-accent-700 font-medium">
                  988
                </a>{' '}
                (call or text, 24/7)
              </li>
              <li>
                <strong>Crisis Text Line:</strong> Text "HELLO" to{' '}
                <a href="sms:741741" className="text-accent-600 hover:text-accent-700 font-medium">
                  741741
                </a>
              </li>
              <li>
                <strong>SAMHSA National Helpline:</strong>{' '}
                <a href="tel:1-800-662-4357" className="text-accent-600 hover:text-accent-700 font-medium">
                  1-800-662-4357
                </a>{' '}
                (24/7, free, confidential)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's work together on your journey toward healing and growth
          </p>
          <Link href="/contact" className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
