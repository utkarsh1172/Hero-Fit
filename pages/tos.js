import Head from "next/head";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-xl mx-auto">
      <Head>
        <title>Terms and Conditions - Hero Fit</title>
      </Head>
      <div className="p-4">
        <Link href='/' className="btn btn-ghost">Back</Link>
        <h1 className="text-4xl font-extrabold tracking tight pb-6">
          Terms and Conditions
        </h1>

        <div>
          1. Introduction
          <br />
          By using Hero Fit you confirm your acceptance of, and agree to be
          bound by, these terms and conditions.
          <br />
          <br />
          2. Agreement to Terms and Conditions
          <br />
          This Agreement takes effect on the date on which you first use the
          Hero Fit application.
          <br />
          <br />
          3. License Duration
          <br />
          This license is perpetual, with the exception of you breaking any part
          of this license, in which case you los all rights under the license.
          <br />
          <br />
          5. Disclaimer
          <br />
          It is not warranted that FITYMI will meet your requirements or that
          its operation will be uninterrupted or error free. All express and
          implied warranties or conditions not stated in this Agreement
          (including without limitation, loss of profits, loss or corruption of
          data, business interruption or loss of contracts), so far as such
          exclusion or disclaimer is permitted under the applicable law are
          excluded and expressly disclaimed. This Agreement does not affect your
          statutory rights.
          <br />
          <br />
          6. Warraties and Limitation of Liability
          <br />
          FITYMI does not give any warranty, guarantes or other term as to the
          quality, fitness for purpose or otherwise S the software. Hero Fit shall
          not be liable to you by reason of any representation (unless
          fraudulent), or any implied warranty, condition or other term, or any
          duty at common law, for any loss of profit or any indirect, special or
          consequential loss, damage, costs, expenses or other claims (whether
          caused by FITYMISapos;s negligence or the negligence of its servants
          or agents or otherwise) which arise out of or in connection with the
          provision of any goods or services by Hero Fit.
          <br/>
          <br/>
          7. Responsibilities
          <br/>
          Hero Fit is not responsible for what the user does with the user-generated content.
          <br/>
          8. General Terms and Law 
          <br/>
          This Agreement is governed by the laws of france.
          <br/>
          <br/>
          Last updated: 21 february 2023.
        </div>
      </div>
    </div>
  );
};


export default PrivacyPolicy;