import React from 'react';
import { useModal } from '../contexts/ModalContext';

const Modal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-xl">
          <div className="max-h-[80vh] overflow-y-auto text-white space-y-6">
            <h2 className="text-lg font-semibold tracking-[2px] uppercase mb-8">
              User Agreements / Terms / Privacy Policies
            </h2>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">1. Use of the Website</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                This demonstrative technical website, provided without any warranty, is intended solely for immediate personal online viewing, for non-commercial and nonprofit purposes. Permission is required for any other use. Please read this entire agreement before using this website.
              </p>
              <ul className="list-disc pl-6 text-xs text-gray-300 space-y-2 tracking-[2px] uppercase">
                <li>Copy, modify, or distribute the website without authorization.</li>
                <li>Attempt to bypass the website's security measures.</li>
                <li>Use the website in a way that may harm it or affect its performance.</li>
                <li>Disassemble or decompile the website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">2. Permitted Use</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                You are allowed to use the website for personal and non-commercial purposes. Any other use without explicit written authorization from Bolted is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">3. Disclaimer for Website Use</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                The website is provided "as is" and "as available." Bolted makes no warranties, express or implied, about the functionality, accuracy, or availability of the website.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">4. Responsible Use</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                By using Bolted, the user acknowledges and accepts that the functionality of this website is designed exclusively for demonstration. The generation of shortened links is merely a demonstrative feature.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">5. Attributions</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                For social media icons licensed under the Creative Commons Attribution 4.0 International license - Attribution: Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">6. Information We Collect</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                Bolted may collect and store certain information about your use of the website. This may include, but is not limited to, non-personal information such as device type, browser type, and usage patterns.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">7. Modifications and Termination</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                Bolted reserves the right to modify, suspend, or terminate the website at any time without prior notice.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">8. Limitation of Liability</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                Bolted will not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the website.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">9. Privacy Policy</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                By using our website, you agree to the use of cookies and consent to the use of tracking technologies such as Google Analytics. Our Cookie Policy provides details on what cookies are, how we use them, the involvement of third-party partners, your cookie options, and additional information.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-base font-medium tracking-[2px] uppercase">10. Contact</h3>
              <p className="text-xs text-gray-300 leading-relaxed tracking-[2px] uppercase">
                For any inquiries or concerns about this user agreement, terms and conditions, or privacy policies, please email us at contact@ivanluna.dev.
              </p>
            </section>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={closeModal}
              className="px-6 py-2 text-xs tracking-[2px] uppercase bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;