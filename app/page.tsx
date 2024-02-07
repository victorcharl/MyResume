import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import { skillsData } from "@/data/content";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-2 text-sm relative">
      <div className="absolute top-10 right-0">
      </div>
      <h3 className="mb-4 uppercase">{title}</h3>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-12 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1" >
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-gray-200 dark:border-gray-600 my-2" />
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <div className="absolute top-6 right-6">
          <ThemeSwitch />
        </div>
        <div className="text-center border-b-2 border-gray-200 dark:border-gray-600">
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {generalData.name}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {generalData.jobTitle}
          </p>
          {generalData.website && (
            <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
              <a
                href={`mailto:${generalData.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {generalData.website}
              </a>
              | {generalData.contact}
            </p>
          )}
        </div>

        <section className="text-sm relative border-b-2 border-gray-200 dark:border-gray-600 py-2">
          <div className="flex justify-between gap-9 mb-1">
            <h3 className="uppercase mr-3">Professional Summary</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>{generalData.summary}</p>
            </div>
          </div>
        </section>

        <section className="my-3 text-sm relative border-b-2 border-gray-200 dark:border-gray-600 py-2">
          <div className="flex gap-16 mb-1">
            <h3 className="uppercase">Skill <br/> Highlights</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {skillsData.map((skill, index) => (
                <p key={index}> • {skill}</p>
              ))}
            </div>
          </div>
        </section>
        
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}

        <section className="mt-6 text-sm relative">
          <h3 className="mb-3 text-slate-900 dark:text-slate-100 uppercase">Websites</h3>
          <div className="flex flex-col gap-1">
            {generalData.websites.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                    <p>{contact.label}
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex text-blue-700"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
