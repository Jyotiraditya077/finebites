import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: March 14, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to FineBites. Your privacy is important to us, and we are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, and protect your data.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information when you use our services:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and delivery address.</li>
          <li><strong>Payment Information:</strong> We process payments securely, but do not store your credit card details.</li>
          <li><strong>Usage Data:</strong> Information about your interactions with our website, including pages visited and orders placed.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To provide and improve our food delivery services.</li>
          <li>To process transactions and send order confirmations.</li>
          <li>To communicate with you about promotions and offers.</li>
          <li>To ensure website security and prevent fraud.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We take appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration.
          However, no method of data transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services for payment processing and analytics. These providers are obligated to protect your information in compliance with this policy.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Request details about how your information is used.</li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>Email: support@finebites.com</p>
      </section>
    </div>
  );
}

export default Privacy;
