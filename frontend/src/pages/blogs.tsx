// pages/blogs.tsx

import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, MessageSquare, Plus } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Education",
    description:
      "Exploring how artificial intelligence is transforming the educational landscape...",
    upvotes: 15,
    downvotes: 2,
    comments: 7,
  },
  {
    id: 2,
    title: "Top 10 STEM Projects for High School Students",
    description:
      "Discover exciting STEM projects that will challenge and inspire high school students...",
    upvotes: 23,
    downvotes: 1,
    comments: 12,
  },
  {
    id: 3,
    title: "Women in STEM: Breaking Barriers",
    description:
      "Highlighting the achievements of women in STEM fields and discussing ways to promote diversity...",
    upvotes: 42,
    downvotes: 3,
    comments: 18,
  },
];

const BlogsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Probe STEM Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-card p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                {blog.title}
              </h2>
              <p className="text-muted-foreground mb-6">{blog.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    {blog.upvotes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    {blog.downvotes}
                  </Button>
                </div>
                <Link to={`/blogs/${blog.id}`}>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {blog.comments} Comments
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/create-blog">
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Plus className="mr-2 h-5 w-5" />
              Create New Blog Post
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
