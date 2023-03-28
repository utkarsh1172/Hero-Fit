import Head from "next/head";
import Image from "next/image";
import { Rubik } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HeroFit</title>
      </Head>
      <Link href="signup" className="btn btn-primary">
        Sign Up
      </Link>
      <Link href="login" className="btn btn-primary">
        Log In
      </Link>
    </>
  );
}
