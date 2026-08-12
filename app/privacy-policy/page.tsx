import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Abacus Star General Trading LLC",
  description:
    "Privacy Policy for Abacus Star General Trading LLC, outlining how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2026">
      <LegalSection heading="1. Introduction">
        <p>
          Abacus Star General Trading LLC (&ldquo;Abacus Star&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to
          protecting any personal information you share with us through this website. This
          Privacy Policy explains what information we collect, how we use it, and the choices
          available to you.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>
          When you use our contact form, we collect the information you voluntarily provide,
          which may include your full name, email address, and the content of your message. We
          do not collect sensitive personal data through this website.
        </p>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>
          We use the information you submit solely to respond to your enquiry, whether related
          to trading, management, consultancy, IT services, or general business matters. We do
          not sell, rent, or trade your personal information to third parties.
        </p>
      </LegalSection>

      <LegalSection heading="4. Data Retention">
        <p>
          We retain enquiry information only for as long as necessary to respond to your request
          and maintain appropriate business records, after which it is securely deleted or
          anonymized.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <p>
          We implement reasonable administrative and technical safeguards designed to protect the
          information you share with us from unauthorized access, disclosure, alteration, or
          destruction.
        </p>
      </LegalSection>

      <LegalSection heading="6. Third-Party Links">
        <p>
          Our website may reference third-party organizations, such as 720 Management
          Consulting. We are not responsible for the privacy practices of external websites and
          encourage you to review their respective privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          You may request access to, correction of, or deletion of the personal information you
          have submitted to us by contacting us using the details below.
        </p>
      </LegalSection>

      <LegalSection heading="8. Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:info@abacus-star.com" className="text-brand-red hover:underline">
            info@abacus-star.com
          </a>{" "}
          or write to us at Suite 1601, Saeed Tower-1, Sheikh Zayed Road, Dubai, U.A.E.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
