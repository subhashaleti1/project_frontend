import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClosePrivacyPolicy } from "../Actions/PrivacyPolicy";

const PrivacyReading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ClosePrivacyPolicy(dispatch);
  }, [dispatch]);
  return (
    <>
      <div className="row">
        <div
          style={{ marginLeft: "8%" }}
          className="col-10 p-3 mb-2 text-black"
        >
          <h2
            className="pt-4 pb-4"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Privacy Policy
          </h2>
          <p>
            We value the trust you place in us and recognize the importance of
            secure transactions and information privacy. This Privacy Policy
            describes how EasyShop collect, use, share or otherwise process your
            personal information through the website.By visiting this Platform,
            providing your information or availing out product/service, you
            expressly agree to be bound by the terms and conditions of this
            Privacy Policy, the Terms of Use and the applicable service/product
            terms and conditions, and agree to be governed by the laws of xyz
            country including but not limited to the laws applicable to data
            protection and privacy. If you do not agree please do not use or
            access our Platform.
          </p>
          <br />
          <h6 style={{ fontWeight: "bold" }}>Collection of Your Information</h6>

          <p className>
            When you use our Platform, we collect and store your information
            which is provided by you from time to time. In general, you can
            browse the Platform without telling us who you are or revealing any
            personal information about yourself. Once you give us your personal
            information, you are not anonymous to us. Where possible, we
            indicate which fields are required and which fields are optional.
            You always have the option to not provide information by choosing
            not to use a particular service, product or feature on the Platform.
            We may collect personal information (such as email address, delivery
            address, name, phone number, credit card/ debit card and other
            payment instrument details) from you when you set up an account or
            transact with us or participate in any event or contest. While you
            can browse some sections of our Platform without being a registered
            member, certain activities (such as placing an order or consuming
            our online content or services) do require registration.
          </p>

          <h6 style={{ fontWeight: "bold" }}>Profile Data</h6>
          <p>
            We use your personal information to provide the product and services
            you request. To the extent we use your personal information to
            market to you, we will provide you the ability to opt-out of such
            uses. We use your personal information to assist sellers and
            business partners in handling and fulfilling orders; enhancing
            customer experience; resolve disputes; troubleshoot problems; help
            promote a safe service; measure consumer interest in our products
            and services; customize and enhance your experience; detect and
            protect us against error, fraud and other criminal activity; enforce
            our terms and conditions; and as otherwise described to you at the
            time of collection of information.
          </p>

          <h6 style={{ fontWeight: "bold" }}>Children Information</h6>
          <p>
            Use of our Platform is available only to persons who can form a
            legally binding contract under the Federal Contract Act, 1872. We do
            not knowingly solicit or collect personal information from children
            under the age of 18 years. If you have shared any personal
            information of children under the age of 18 years, you represent
            that you have the authority to do so and permit us to use the
            information in accordance with this Privacy Policy.
          </p>

          <h6 style={{ fontWeight: "bold" }}>Data Retention</h6>
          <p>
            We retain your personal information in accordance with appliable
            laws, for a period no longer than is required for the purpose for
            which it was collected or as required under any applicable law.
            However, we may retain data related to you if we believe it may be
            necessary to prevent fraud or future abuse, to enable SVR to
            exercise its legal rights and/or defend against legal claims or if
            required by law or for other legitimate purposes. We may continue to
            retain your data in anonymised form for analytical and research
            purposes.
          </p>

          <h6 style={{ fontWeight: "bold" }}>Your Rights</h6>
          <p>
            We take every reasonable step to ensure that your personal
            information that we process is accurate and, where necessary, kept
            up to date, and any of your personal information that we process
            that you inform us is inaccurate (having regard to the purposes for
            which they are processed) is erased or rectified. You may access,
            correct, and update your personal information directly through the
            functionalities provided on the Platform. You may delete certain
            non-mandatory information by logging into our website and visiting
            Profile and Settings sections. You can also write to us at the
            contact information provided below to assist you with these
            requests. You have an option to withdraw your consent that you have
            already provided by writing to us at the contact information
            provided below. Please mention “for withdrawal of consent” in the
            subject line of your communication. We will verify such requests
            before acting upon your request. Please note, however, that
            withdrawal of consent will not be retroactive and will be in
            accordance with the terms of this Privacy Policy, related Terms of
            Use and applicable laws. In the event you withdraw consent given to
            us under this Privacy Policy, such withdrawal may hamper your access
            to the Platform or restrict provision of our services to you for
            which we consider that information to be necessary.
          </p>

          <h6 style={{ fontWeight: "bold" }}>Changes to this Privacy Policy</h6>
          <p>
            Please check our Privacy Policy periodically for changes. We may
            update this Privacy Policy to reflect changes to our information
            practices.
          </p>

          <h6 style={{ fontWeight: "bold" }}>
            Queries related to Privacy Policy
          </h6>
          <p>
            If you have a query, concern, or complaint in relation to collection
            or usage of your personal information under this Privacy Policy,
            please contact us at the contact information provided.
          </p>
        </div>
      </div>
    </>
  );
};
export default PrivacyReading;
