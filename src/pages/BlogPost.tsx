
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: async () => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .eq('published', true)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-16 text-center">
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-16">
        <div className="pt-10">
          <Navbar/>
        </div>
        <Link to="/blog">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <div className="pt-10">
        <Navbar/>
      </div>
      <Link to="/blog">
        <Button variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </Link>
      
      <article className="max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">{post.title}</h1>
        
        {post.subheading && (
          <h2 className="text-xl text-muted-foreground mb-6">{post.subheading}</h2>
        )}
        
        <div className="text-sm text-muted-foreground mb-8">
          {new Date(post.created_at).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        
        {post.image_url && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image_url} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        {post.video_url && (
          <div className="mb-8 aspect-video">
            <iframe
              src={post.video_url}
              title="Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer/>
    </div>
  );
};

export default BlogPost;
