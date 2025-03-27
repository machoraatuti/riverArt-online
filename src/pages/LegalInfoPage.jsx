import { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

const sections = [
  { id: 'terms', title: 'Terms of Service' },
  { id: 'privacy', title: 'Privacy Policy' },
  { id: 'refund', title: 'Refund Policy' },
  { id: 'return', title: 'Return Policy and Process' },
  { id: 'cancellation', title: 'Cancellation Policy' },
  { id: 'shipping', title: 'Shipping Policy' },
  { id: 'cookies', title: 'Cookie Policy' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'accessibility', title: 'Accessibility Statement' },
  { id: 'contact', title: 'Contact Us' },
];

const legalText = `Terms of Service

Effective Date: March 27, 2025

Welcome to River Art Online. By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.

1. Use of the Site

You may use our website to browse and purchase digital art. You agree not to use the site for any unlawful purpose or to violate any laws in your jurisdiction.

2. Account Registration

You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account and password.

3. Purchases

All digital artwork sold is licensed for personal use only unless otherwise specified. You may not resell or redistribute the artwork.

4. Intellectual Property

All content, including images, designs, and text, is the property of River Art Online or its artists and is protected by copyright laws.

5. Modifications

We reserve the right to update or change these terms at any time. Continued use of the site constitutes acceptance of the new terms.


---

Privacy Policy

Effective Date: March 27, 2025

River Art Online values your privacy. This policy explains how we collect, use, and protect your information.

1. Information We Collect

Personal information (e.g., name, email, billing address)

Usage data (e.g., pages visited, time spent on site)

2. How We Use Information

To process transactions

To improve our website

To communicate with you regarding your orders or account

3. Data Protection

We implement industry-standard security measures to protect your data.

4. Cookies

We use cookies to enhance user experience and track site usage. You can disable cookies in your browser settings.

5. Third-Party Services

We do not sell your personal information. We may share information with third-party providers necessary to operate our business (e.g., payment processors).

6. Your Rights

You have the right to access, correct, or delete your personal information by contacting us.

---

Refund Policy

Effective Date: March 27, 2025

Due to the digital nature of our products, all sales are final. However, we want you to be satisfied with your purchase.

1. Refund Eligibility

Refunds may be granted under the following conditions:

You did not receive the digital file

The file is corrupted or not as described

2. Requesting a Refund

To request a refund, please contact us within 7 days of purchase with your order details and the issue encountered.

3. Resolution Process

We will investigate the issue and may offer a replacement or refund at our discretion.

---

Return Policy and Process

Effective Date: March 27, 2025

Due to the nature of digital products, returns are not applicable. Once a digital file has been successfully delivered or downloaded, it cannot be returned.

1. Exceptions

In rare cases, we may consider returns if:

The file you received does not match the description or listing

You received the wrong artwork due to a system error

2. Process for Return Consideration

To request a return exception, email us at support@riverartonline.com within 7 days of your purchase. Include your order ID, a description of the issue, and supporting evidence such as screenshots.

We will review your request and respond within 3–5 business days.

---

Cancellation Policy

Effective Date: March 27, 2025

1. Order Cancellation

You may cancel your order if the digital file has not yet been delivered or downloaded.

To cancel your order, contact us immediately at support@riverartonline.com with your order ID. If the download has not occurred, we will cancel and refund your order.

2. Completed Downloads

If your digital file has already been accessed or downloaded, the order cannot be canceled.

---

Shipping Policy

Effective Date: March 27, 2025

River Art Online specializes in digital art. As such, no physical shipping is required.

1. Delivery Method

All digital art files are delivered electronically via download link upon successful payment.

2. Delivery Time

Digital files are typically available immediately after purchase. In rare cases, processing may take up to 24 hours.

3. Issues with Delivery

If you do not receive your download link, please check your spam folder or contact our support team.

---

Cookie Policy

Effective Date: March 27, 2025

This Cookie Policy explains how River Art Online uses cookies and similar technologies when you visit our website.

1. What Are Cookies?

Cookies are small data files stored on your device that help websites remember information about you.

2. Types of Cookies We Use

Essential Cookies: Required for the website to function properly

Performance Cookies: Collect data on how users interact with the site

Functionality Cookies: Remember user preferences and settings

3. Managing Cookies

You can set your browser to refuse all or some browser cookies. However, if you disable cookies, some features of our site may not function properly.

---

Disclaimer

Effective Date: March 27, 2025

All content provided on River Art Online is for informational and artistic purposes only. While we strive for accuracy and quality, we make no warranties or guarantees of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, or services.

1. Artistic Content

The digital artworks offered on our platform are created by various artists. We are not responsible for any interpretations, misrepresentations, or emotional responses related to the content of the artworks.

2. No Professional Advice

Nothing on this website should be construed as professional advice. Users should consult the appropriate professional for any specific advice tailored to their situation.

3. Limitation of Liability

River Art Online shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website or the purchase of any products.



---

Accessibility Statement

Effective Date: March 27, 2025

River Art Online is committed to making our digital platform accessible to as many people as possible, regardless of technology or ability.

1. Accessibility Measures

We take the following measures to ensure accessibility:

Use of semantic HTML and ARIA roles

Keyboard navigability

Color contrast that meets WCAG standards

Responsive design for all screen sizes

2. Ongoing Efforts

We continually improve the accessibility of our website to meet or exceed applicable standards and guidelines, including WCAG 2.1 Level AA.

3. Feedback and Support

If you experience any difficulty accessing any part of our site or need assistance, please contact us. We welcome your feedback and will work to address your concerns promptly.

Email: support@riverartonline.com
Phone: +1 (419)-326-5575

---

Contact Us

If you have any questions about our legal policies, you can reach us at:

Email: support@riverartonline.com
Phone: +1 (419)-326-5575

River Art Online
1209 Mountain Road Place NE
Albuquerque, New Mexico 87110
USA.
`;

const LegalInfoPage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to toggle the side drawer
    
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer visibility
    };
  
    return (
      <div className="dark">
        <Navbar />
        <SubHeader current="Legal Information" />
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
          <section className="bg-indigo-600 text-white py-8 px-4 shadow-md sticky top-0 z-10 text-center sm:py-6 sm:px-3">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 sm:text-xl">River Art Online Legal Center</h1>
            <p className="text-sm md:text-md sm:text-xs">Your rights, our responsibilities — here’s everything you need to know.</p>
          </section>
  
          {/* Hamburger Button for Legal Info Drawer */}
          <button 
            className="lg:hidden fixed top-6 left-4 z-30 text-white text-2xl"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? '×' : '☰'}
          </button>
  
          {/* Side Drawer for small screens */}
          <div 
            className={`lg:hidden fixed top-0 left-0 w-64 bg-gray-800 text-white z-30 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
          >
            <div className="p-4">
              <ul className="flex flex-col gap-4 text-sm font-medium">
                {sections.map((section) => (
                  <li key={section.id}>
                    <ScrollLink
                      to={section.id}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="cursor-pointer block px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400"
                      activeClass="font-bold underline"
                      onClick={toggleDrawer} // Close drawer on section click
                    >
                      {section.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Vertical Side Navigation for large screens */}
          <nav className="lg:fixed lg:top-30 lg:left-4 z-10 bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg max-h-screen overflow-y-auto hidden lg:block">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {sections.map((section) => (
                <li key={section.id}>
                  <ScrollLink
                    to={section.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer block px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400"
                    activeClass="font-bold underline"
                  >
                    {section.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
  
          {/* Main content with padding for mobile screens */}
          <main className="lg:max-w-4xl mx-auto px-4 sm:px-6 py-10 prose prose-indigo dark:prose-invert lg:ml-64">
            {legalText.split('---').map((section, index) => (
              <section
                key={sections[index]?.id || index}
                id={sections[index]?.id}
                className="scroll-mt-24 border-b pb-10 mb-10"
                dangerouslySetInnerHTML={{ __html: section.replace(/\n/g, '<br/>') }}
              />
            ))}
          </main>
  
          {showScrollTop && (
            <button
              onClick={() => scroll.scrollToTop()}
              className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          )}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default LegalInfoPage;
