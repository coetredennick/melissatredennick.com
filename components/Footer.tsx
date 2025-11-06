import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Melissa Tredennick Counseling PLLC
            </h3>
            <p className="text-primary-100 mb-2">
              Supervised by Charissa Lopez, LPC-S
            </p>
            <p className="text-primary-100">License #73709</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-primary-100">
              <p>
                <a href="tel:713-800-3687" className="hover:text-white transition-colors">
                  713-800-3687
                </a>
              </p>
              <p>
                <a href="mailto:info@melissatredcounseling.com" className="hover:text-white transition-colors">
                  info@melissatredcounseling.com
                </a>
              </p>
              <p className="mt-4">
                4265 Woodway Drive, Ste 745<br />
                Houston, TX 77057
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-100 hover:text-white transition-colors">
                  About Melissa
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/specializations" className="text-primary-100 hover:text-white transition-colors">
                  Specializations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} Melissa Tredennick Counseling PLLC. All rights reserved.</p>
          <p className="mt-2 text-sm">
            In-person and virtual sessions available
          </p>
        </div>
      </div>
    </footer>
  )
}
