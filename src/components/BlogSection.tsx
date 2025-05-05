
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
    <section className="py-16 bg-muted/5" id="blog">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
              Blog
            </div>
            <h2 className="text-3xl font-bold font-display mb-2">Latest <span className="gradient-heading">Insights</span></h2>
            <p className="text-muted-foreground">Tips, updates, and thoughts from my development journey</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-brand-blue text-brand-blue hover:bg-brand-blue/10">
            <Link to="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading && (
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="dark-glass hover-card border border-white/5">
                <CardContent className="p-0">
                  <Skeleton className="aspect-video w-full bg-muted/20" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2 bg-muted/20" />
                    <Skeleton className="h-4 w-full mb-1 bg-muted/20" />
                    <Skeleton className="h-4 w-2/3 bg-muted/20" />
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
              <Card key={post.id} className="dark-glass hover-card h-full flex flex-col border border-white/5">
                <CardContent className="p-0 flex-1">
                  <div className="aspect-video bg-muted/10 overflow-hidden">
                    {post.image_url ? (
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted/20">
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
