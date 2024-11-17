import React from 'react';
import Head2 from './UI/Head2';

const Policy = () => {
  return (
    <div className="policy pad80">
      <div className='container'>
        <Head2>Privacy Policy</Head2>
            <div className='row mt-5'>
                <div className='col-12'>

                <Head2 as='h4'>Introduction</Head2>
                <p>At TechWeb, we prioritize the privacy of our users. This policy outlines how we collect, use, and protect your personal information.</p>

                <h2>Information We Collect</h2>
        <p>We collect various types of information, including information that you provide directly to us, data about your use of our website, and data collected through cookies or other tracking technologies.</p>

        <h2>How We Use Your Information</h2>
        <p>Your information is used to improve your experience on our website, process transactions, provide customer support, and personalize content and advertising.</p>

        <h2>Information Sharing</h2>
        <p>We do not sell your personal information to third parties. However, we may share information with third-party service providers for purposes such as hosting, analytics, and customer support.</p>

        <h2>Security</h2>
        <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information, and to opt out of certain data collection practices.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy from time to time. We encourage you to review it periodically.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this policy, please contact us at support@techweb.com.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Policy;
8