import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  // buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  // tagline = "Latest Updates",
  heading = "About Casehub",
  description = "CaseHub is a web-based case tracking system designed specifically for the Legal Office of Southern Leyte State University. It streamlines the management of legal cases, providing staff with an organized, secure, and efficient way to handle records, updates, and documentation.",
  // buttonText = "View all articles",

  posts = [
    {
      id: "post-1",
      title: "Who It's For?",
      summary:
        "CaseHub is designed for use by the school's legal office staff, administrators, and students involved in legal-related concerns or inquiries. It ensures that everyone—whether managing or participating in a case—has clear, timely, and secure access to the information they need.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Purpose",
      summary:
        "CaseHub was created to solve the problem of manual and scattered tracking of legal cases. It reduces paperwork, minimizes errors, and ensures that case progress is transparent and traceable.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Vision",
      summary:
        "Our vision is for CaseHub to grow into a powerful legal support platform, offering tools for automation, reporting, and analytics to further support the evolving needs of educational institutions.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
}: Blog7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          {/* <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge> */}
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          {/* <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button> */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="h-full w-full object-cover object-center"
                  /> */}
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              {/* <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
