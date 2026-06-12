import Image from "next/image";
import {
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">
              Michael
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Backend Developer passionate about
              Artificial Intelligence, Machine Learning,
              and scalable web applications.
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#about"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://Github.com/MichaelPransiscoP"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <Image
                      src="/icons/github.png"
                      alt="github"
                      width={28}
                      height={28}
                  />
              </a>

              <a
                href="https://www.Linkedin.com/in/michaelpransiscopurba/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <Image
                      src="/icons/linkedin.png"
                      alt="linkedin"
                      width={28}
                      height={28}
                  />
              </a>

              <a
                href="mailto:wermichael211@gmail.com"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <Mail />
              </a>

            </div>

            <a
              href="/cv.pdf"
              className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold px-6 py-3 rounded-xl"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm flex items-center gap-2">

            Made with

            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />

            by Michael Pransisco Purba © {new Date().getFullYear()}

          </p>

          <a
            href="#"
            className="flex items-center gap-2 bg-[#111827] hover:bg-cyan-500 hover:text-black transition px-4 py-2 rounded-xl"
          >
            <ArrowUp size={18} />

            Back to Top

          </a>

        </div>

      </div>

    </footer>
  );
}