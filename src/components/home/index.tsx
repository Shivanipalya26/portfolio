import Layout from "@/styles/template/layout";
import { Card } from "../card";

const HomeSection = () => {
  return (
    <section id="home" className="flex justify-center">
      <Layout>
        <div className="pt-20 md:pt-32 text-justify tracking-widest">
          <div className="space-y-6 ">
            <h1>
              Hey, I am <span className="text-orange-400">Shivani Palya</span>,
              an aspiring{" "}
              <span className="text-orange-400">Software Engineer</span> and
              Tech Enthusiast.{" "}
            </h1>
            <h1>
              I'm always curious and eager to explore new technologies. Lately,
              I've been diving into full-stack development, and open-source
              contributions.
            </h1>
            <h1>
              Outside the world of code, you’ll find me with a camera in hand
              📸, painting my next idea 🎨, or diving into books that expand the
              way I think 📚. I also enjoy creating visual designs and grooving
              to my favorite music playlists. Stay tuned — I'll be uploading
              some of my creative work here soon!
            </h1>
            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-500">
              "Create with curiosity. Build with purpose."
            </blockquote>

            <h1>
              I'm embracing the journey. Whether it's diving deeper into
              development, exploring design, or contributing to communities, I'm
              open to wherever my passion and opportunities lead me. I’m not
              limited to a fixed path — I believe the most exciting
              opportunities are often the ones we least expect.
            </h1>
          </div>

          <div className="pt-14">
            <Card className="p-6 bg-gray-900">
              <h2 className="text-3xl font-semibold text-center p-2">
                Tech Stack
              </h2>
              <div className="space-y-2 mb-4 pt-4">
                <h2 className=" text-orange-400">Languages</h2>
                <p className="text-gray-300">
                  TypeScript, JavaScript, Python, C++, Golang
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <h2 className=" text-orange-400">Frameworks & Libraries</h2>
                <p className="text-gray-300">
                  React, Next.js, Node.js, Express, Tailwind CSS, Redux, Zustand
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <h2 className=" text-orange-400">Tools & Platforms</h2>
                <p className="text-gray-300">
                  Docker, Redis, Postman, Supabase, Prisma, MongoDB, Vercel,
                  Figma, Git, GitHub
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeSection;
