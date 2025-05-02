
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

const BlogSection = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['homepageBlogPosts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    }
  });

  // Function to truncate text to show only the first 2 lines approximately
  const truncateContent = (content: string) => {
    // Remove HTML tags for plain text
    const plainText = content.replace(/<[^>]+>/g, '');
    // Limit to approximately 2 lines (around 150 characters)
    const truncated = plainText.slice(0, 150);
    return truncated.length < plainText.length ? `${truncated}...` : truncated;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold font-display mb-2">Latest from our Blog</h2>
            <p className="text-muted-foreground">Insights, tips, and updates from our team</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading && (
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="hover-card">
                <CardContent className="p-0">
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
          </div>
        )}

        {blogPosts && blogPosts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
          </div>
        )}

        {blogPosts && blogPosts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post: any) => (
              <Card key={post.id} className="hover-card h-full flex flex-col">
                <CardContent className="p-0 flex-1">
                  <div className="aspect-video bg-muted overflow-hidden">
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <div className="text-muted-foreground mb-4">
                      {post.content ? truncateContent(post.content) : post.subheading || 'No content available'}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button asChild className="w-full" variant="outline">
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
