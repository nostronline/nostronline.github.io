import React from "react"; // Import useState for defining state variables
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/utility/Card";
import CopyText from "./components/utility/CopyText";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pb-10">
        <Header>
          <div className="flex">
            <div className="relay-url-container flex self-center after:bg-white dark:after:bg-slate-900 p-3 rounded-md after:rounded-md">
              <span className="text-sm text-slate-900 dark:text-slate-50">
                Relay URL:&nbsp;&nbsp;
              </span>
              <CopyText value={"wss://relay.nostronline.online"} />
            </div>
          </div>
        </Header>
        <main className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-1 gap-6 sm:gap-8">
            <Card
              className="order-last xl:order-first md:col-span-5 xl:col-span-1"
              heading="What is Nostr?"
            >
              <div className="pt-5 px-10 pb-8">
                <div className="flex items-start gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm mb-10 mt-5">
                    Nostr is a simple, open protocol that enables global,
                    decentralized, and censorship-resistant social media.
                  </span>
                </div>
                <div className="items-start gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-md bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-0 dark:shadow-none dark:highlight-white/5">
                    Simple
                  </span>
                  <div className="mt-3">
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                      The protocol is based on very simple & flexible event
                      objects (which are passed around as plain JSON) and uses
                      standard elliptic-curve cryptography for keys and signing.
                      The only supported transport is websockets connections
                      from clients to relays. This makes it easy to write
                      clients and relays and promotes software diversity.
                    </p>
                  </div>
                </div>
                <div className="items-start gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-md bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-0 dark:shadow-none dark:highlight-white/5">
                    Resilient
                  </span>
                  <div className="mt-3">
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                      Because Nostr doesn&apos;t rely on a small number of
                      trusted servers for moving or storing data, it&apos;s very
                      resilient. The protocol assumes that relays will disappear
                      and allows users to connect and publish to an arbitrary
                      number of relays that they can change over time.
                    </p>
                  </div>
                </div>
                <div className="items-start gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-md bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-0 dark:shadow-none dark:highlight-white/5">
                    Verifiable
                  </span>
                  <div className="mt-3">
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                      Because Nostr accounts are based on public-key
                      cryptography it&apos;s easy to verify messages were really
                      sent by the user in question.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                      Like HTTP or TCP-IP, Nostr is a protocol; an open standard
                      upon which anyone can build. Nostr is not an app or
                      service that you sign up for.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card
              className="order-last xl:order-first md:col-span-5 xl:col-span-1"
              heading="What is Angor?"
            >
              <div className="pt-5 px-10 pb-8">
                <div className="flex items-start gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm mb-10 mt-5">
                    Angor is a decentralized crowdfunding platform leveraging
                    Bitcoin and nostr, providing a secure and transparent
                    environment for project owners and investors. With Angor,
                    investors maintain control of their funds through timelock
                    contracts, while project owners benefit from aligned
                    incentives and investor protection. It&apos;s the future of
                    crowdfunding, empowering participation in innovative
                    projects with confidence.
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </main>
        <Footer
          leftContent={<>&copy; NOSTR ONLINE 2024</>}
          rightContent={
            <>
              Powered by{" "}
              <a
                href="https://github.com/nostronline/relay"
                target="_blank"
                className="underline underline-offset-2"
                rel="noreferrer"
              >
                NOSTR ONLINE
              </a>
            </>
          }
        />
      </div>
    </Layout>
  );
}
