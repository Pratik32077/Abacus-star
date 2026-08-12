import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Abacus Star General Trading LLC",
  description:
    "Terms of Service governing the use of the Abacus Star General Trading LLC website.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms Of Services" updated="August 2026">
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing and using this website, you agree to be bound by these Terms of Service.
          If you do not agree with any part of these terms, please discontinue use of the
          website.
        </p>
      </LegalSection>

      <LegalSection heading="2. About Abacus Star">
        <p>
          Abacus Star General Trading LLC is a Dubai, UAE-based company operating across global
          trading, metals, minerals, electronics, management, consultancy, and IT services, as
          described on this website.
        </p>
      </LegalSection>

      <LegalSection heading="3. Use of Website Content">
        <p>
          All content on this website, including text, graphics, logos, and images, is the
          property of Abacus Star General Trading LLC unless otherwise noted, and is provided
          for informational purposes only. You may not reproduce, distribute, or modify any
          content without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection heading="4. Enquiries and Communications">
        <p>
          Enquiries submitted through our contact form are directed to{" "}
          <a href="mailto:info@abacus-star.com" className="text-brand-red hover:underline">
            info@abacus-star.com
          </a>
          . Submitting an enquiry does not constitute a binding business agreement between you
          and Abacus Star General Trading LLC.
        </p>
      </LegalSection>

      <LegalSection heading="5. Third-Party Services">
        <p>
          Certain services described on this website are offered in collaboration with 720
          Management Consulting. Any engagement with such third parties is subject to their own
          respective terms.
        </p>
      </LegalSection>

      <LegalSection heading="6. Limitation of Liability">
        <p>
          While we strive to keep the information on this website accurate and up to date,
          Abacus Star General Trading LLC makes no warranties regarding the completeness or
          accuracy of the content and shall not be liable for any loss arising from its use.
        </p>
      </LegalSection>

      <LegalSection heading="7. Changes to These Terms">
        <p>
          We may update these Terms of Service from time to time. Continued use of the website
          following any changes constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="8. Governing Law">
        <p>
          These terms are governed by the laws of the United Arab Emirates and the applicable
          regulations of the Emirate of Dubai.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact Us">
        <p>
          For any questions regarding these Terms of Service, please contact us at{" "}
          <a href="mailto:info@abacus-star.com" className="text-brand-red hover:underline">
            info@abacus-star.com
          </a>{" "}
          or Suite 1601, Saeed Tower-1, Sheikh Zayed Road, Dubai, U.A.E.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
