// pages/blogPost.tsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Send } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface BlogPost {
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  comments: Comment[];
}

const blogPosts: Record<string, BlogPost> = {
  "1": {
    title: "The Future of AI in Education",
    content:
      "Artificial Intelligence is revolutionizing the way we approach education...",
    upvotes: 15,
    downvotes: 2,
    comments: [
      {
        id: 1,
        author: "John Doe",
        content:
          "Great article! I'm excited to see how AI will shape education.",
      },
      {
        id: 2,
        author: "Jane Smith",
        content:
          "I have some concerns about the ethical implications of AI in education.",
      },
    ],
  },
  // Add more blog posts here if needed
};

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = id ? blogPosts[id] : null;
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(
    blogPost ? blogPost.comments : []
  );

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: "Current User",
        content: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  if (!blogPost) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Blog Post Not Found
          </h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          {blogPost.title}
        </h1>
        <div className="bg-card p-6 rounded-xl shadow-xl mb-8">
          <p className="text-lg mb-6">{blogPost.content}</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {blogPost.upvotes}
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="mr-2 h-4 w-4" />
              {blogPost.downvotes}
            </Button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Comments</h2>
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-card p-4 rounded-lg">
              <p className="font-semibold text-primary">{comment.author}</p>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="flex space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow p-2 rounded-lg bg-input text-foreground"
          />
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
