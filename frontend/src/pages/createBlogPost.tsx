// pages/createBlogPost.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pencil, FileText } from "lucide-react";

const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content });
    navigate("/blogs");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="shadow-lg mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-4xl font-bold text-primary">
              <FileText className="w-8 h-8" />
              <span>Create New Blog Post</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="flex items-center space-x-2 text-lg font-medium text-primary"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Title</span>
                </label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full"
                  placeholder="Enter your blog title"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="content"
                  className="flex items-center space-x-2 text-lg font-medium text-primary"
                >
                  <FileText className="w-5 h-5" />
                  <span>Content</span>
                </label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full"
                  rows={8}
                  placeholder="Write your blog content here..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/80 text-primary-foreground w-full"
              >
                Publish Blog Post
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CreateBlogPost;
