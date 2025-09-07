"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {

  const handleSignin = async () => {
    return await authClient.signIn.social({ provider: 'google' })

  }

  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/" className="flex text-center gap-2">
          <Image src={"/assets/icons/logo.svg"} alt="logo" width={32} height={32} />
          <h1>ManRcder</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {
                Array.from({ length: 5 }).map((_, index) => (
                  <Image src={"/assets/icons/star.svg"} alt="star" width={32} height={32} key={index} />
                ))
              }
            </figure>
            <p>
              SnapCast makes screen recording easy. From quick walkthroughs to full presentations, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image src={"/assets/images/jason.png"} alt="logo" width={64} height={64} className="rounded-full" />
              <div>
                <h2>
                  Andrian jason
                </h2>
                <p>product Designer ,Open Ai</p>
              </div>
            </article>
          </section>
        </div>
        <p className="text-center">
          @ ManRcder {(new Date().getFullYear())}
        </p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href={"/"}>
            <Image src={"/assets/icons/logo.svg"} alt={"logo"} width={40} height={40} />
            <h1>
              ManRcder
            </h1>
          </Link>
          <p>Create and share your very first video <span>ManRcder</span> in Free mode and enjoy Recording with loved ones</p>
          <button onClick={handleSignin}>
            <Image src={"/assets/icons/google.svg"} alt="logo" width={34} height={34} />
            <span>Sign-in with Google</span>
          </button>
        </section>
      </aside>
    </main>
  )
}
