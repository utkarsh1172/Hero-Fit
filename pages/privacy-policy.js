import Head from "next/head";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-xl mx-auto">
      <Head>
        <title>PRivacy Policy - Hero Fit</title>
      </Head>
      <div className="p-4">
        <Link className="btn btn-ghost">Back</Link>
        <h1 className="text-4xl font-extrabold tracking tight pb-6">
          Privacy Policy
        </h1>

        <div>
          Your privacy is important to us. It is Hero Fit&apos;s policy to
          respect your privacy regarding any information we may collect from you
          across our website, and other sites we own and operate.
          <br />
          <br />
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we&apps;
          ll protect within commecercially acceptable means to prevent lossand
          theft, as well as unauthrised access, disclosure, copying, use or
          modification.
          <br />
          <br />
          We don&apos;t share any personally identifying information publicaly
          or with third-parties, except when required when required to be law.
          <br />
          <br />
          We act in the capacity of a data controller and data processor with
          regard to the personal data processed through Hero Fit and the
          services in terms of the applicable data protection laws, including
          the EU
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;