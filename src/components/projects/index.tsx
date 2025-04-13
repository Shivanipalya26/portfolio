import Layout from "@/styles/template/layout";
import SectionHeading from "../sectionHeading";
import { Card } from "../card";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects } from "@/config/projects";

const Projects = () => {
  return (
    <section id="projects" className="flex justify-center pt-20 md:pt-40">
      <Layout>
        <div>
          <SectionHeading
            title="What have i Built?"
            subtitle="Featured Work"
            description="From simple ideas to functional products, these projects reflect not just what I’ve built — but how I’ve grown through each experience."
          />
          <div className="pt-12" />

          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 space-y-4 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-2xl font-semibold text-orange-400">
                      {project.title}
                    </h2>

                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-2xl text-red-300"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className=" text-red-300 hover:underline"
                        >
                          <ExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 text-justify tracking-wider md:tracking-widest">
                    {project.description}
                  </p>

                  <div>
                    <h3 className="font-medium text-gray-400 pt-3">
                      Tech Stack:
                    </h3>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {project.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Projects;
