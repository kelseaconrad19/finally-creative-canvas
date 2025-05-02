
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';

const BlogList = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['publicBlogPosts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-2 font-display">Blog</h1>
      <p className="text-muted-foreground mb-12 text-lg">Thoughts, ideas, and insights</p>
      
      {isLoading && (
        <div className="text-center py-12">
          <p>Loading blog posts...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-12 text-destructive">
          <p>Error loading blog posts. Please try again later.</p>
        </div>
      )}
      
      {blogPosts && blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
        </div>
      )}
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts && blogPosts.map((post: any) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <Card className="hover-card h-full">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  {post.image_url ? (
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                {post.subheading && (
                  <p className="text-muted-foreground mb-3">{post.subheading}</p>
                )}
                <div className="mt-auto pt-4 text-sm text-muted-foreground">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
