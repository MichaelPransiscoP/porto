"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-cyan-400">
            Contact
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Interested in working together or have a project in mind?
            Feel free to reach out through any of the platforms below.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-6">

            <div className="bg-[#111827] rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <Mail className="text-black" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    wermichael211@gmail.com
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <Phone className="text-black" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +62 819-4917-9779
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <MapPin className="text-black" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Bandung, Indonesia
                  </p>
                </div>

              </div>

            </div>

            <div className="flex gap-4 pt-4">

              <a
                href="https://github.com/MichaelPransiscoP"
                target="_blank"
                className="w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <Image
                      src="/icons/github.png"
                      alt="github"
                      width={28}
                      height={28}
                  />
              </a>

              <a
                href="https://www.linkedin.com/in/michaelpransiscopurba/"
                target="_blank"
                className="w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <Image
                      src="/icons/linkedin.png"
                      alt="linkedin"
                      width={28}
                      height={28}
                  />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1e293b] rounded-xl p-4 outline-none border border-transparent focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1e293b] rounded-xl p-4 outline-none border border-transparent focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#1e293b] rounded-xl p-4 outline-none border border-transparent focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-[#1e293b] rounded-xl p-4 outline-none border border-transparent focus:border-cyan-400 resize-none"
              />

              <button
                type="submit"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}