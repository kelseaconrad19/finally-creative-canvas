
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Grid, File, Book, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AuthGuard from '@/components/AuthGuard';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Admin = () => {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };

  return (
    <AuthGuard>
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and blog posts</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">Signed in as {user?.email}</p>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Projects Admin Card */}
          <Card className="hover-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="h-5 w-5" />
                Projects
              </CardTitle>
              <CardDescription>
                Manage your portfolio projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Add, edit, or remove projects from your portfolio showcase.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/admin/projects">
                  <File className="mr-2" />
                  Manage Projects
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Blog Admin Card */}
          <Card className="hover-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Blog Posts
              </CardTitle>
              <CardDescription>
                Manage your blog content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Create, edit, or publish blog posts to share with your audience.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/admin/blog">
                  <Book className="mr-2" />
                  Manage Blog
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Admin;
