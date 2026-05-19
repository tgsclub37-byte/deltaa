import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <section className="min-h-screen bg-[#050510] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={onClose}
          whileHover={{ x: -3 }}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <HiArrowLeft />
          Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-b from-white/5 to-white/2 border border-white/10 p-8 sm:p-12"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
        >
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-2">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="text-gray-400 font-rajdhani mb-8">Last updated: May 20, 2025</p>

          <div className="space-y-8 text-gray-300 font-rajdhani leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Delta 999 Gaming Platform ("we", "our", or "us") operates the Delta 999 website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes to provide and improve our Service to you:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, Cookies and Usage Data</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address, browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Use of Data</h2>
              <p>Delta 999 uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To gather analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical and security issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us immediately. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove such information from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us by email at privacy@delta999.com or by phone at +1-555-824-2814.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information. Please contact us if you wish to exercise any of these rights.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
