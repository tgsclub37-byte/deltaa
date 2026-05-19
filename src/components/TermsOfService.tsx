import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';

interface TermsOfServiceProps {
  onClose: () => void;
}

export default function TermsOfService({ onClose }: TermsOfServiceProps) {
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
            Terms of <span className="text-cyan-400">Service</span>
          </h1>
          <p className="text-gray-400 font-rajdhani mb-8">Last updated: May 20, 2025</p>

          <div className="space-y-8 text-gray-300 font-rajdhani leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Delta 999 Gaming Platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Delta 999 for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on Delta 999</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Disclaimer</h2>
              <p>
                The materials on Delta 999's website are provided on an 'as is' basis. Delta 999 makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Limitations</h2>
              <p>
                In no event shall Delta 999 or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Delta 999's website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Delta 999's website could include technical, typographical, or photographic errors. Delta 999 does not warrant that any of the materials on the website are accurate, complete, or current. Delta 999 may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Links</h2>
              <p>
                Delta 999 has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Delta 999 of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Modifications</h2>
              <p>
                Delta 999 may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at support@delta999.com or call +1-555-824-2814.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
