
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil, Trash2, Plus, X, Check, ExternalLink } from 'lucide-react';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    tags: '',
    category: 'frontend',
    demo_url: '',
    github_url: ''
  });
  
  useEffect(() => {
    fetchProjects();
  }, []);
  
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        toast.error('Error fetching projects: ' + error.message);
        return;
      }
      
      setProjects(data || []);
    } catch (err) {
      toast.error('Failed to fetch projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Format tags from comma-separated string to array
    const formattedData = {
      ...formData,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
    };
    
    try {
      let response;
      
      if (editingId) {
        // Update existing project
        response = await supabase
          .from('projects')
          .update(formattedData)
          .eq('id', editingId);
      } else {
        // Insert new project
        response = await supabase
          .from('projects')
          .insert(formattedData);
      }
      
      const { error } = response;
      
      if (error) {
        toast.error('Error saving project: ' + error.message);
        return;
      }
      
      toast.success(editingId ? 'Project updated!' : 'Project added!');
      resetForm();
      fetchProjects();
    } catch (err) {
      toast.error('Failed to save project');
      console.error(err);
    }
  };
  
  const handleEdit = (project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      image_url: project.image_url || '',
      tags: (project.tags || []).join(', '),
      category: project.category || 'frontend',
      demo_url: project.demo_url || '',
      github_url: project.github_url || ''
    });
    setFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const { error } = await supabase
          .from('projects')
          .delete()
          .eq('id', id);
        
        if (error) {
          toast.error('Error deleting project: ' + error.message);
          return;
        }
        
        toast.success('Project deleted');
        fetchProjects();
      } catch (err) {
        toast.error('Failed to delete project');
        console.error(err);
      }
    }
  };
  
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image_url: '',
      tags: '',
      category: 'frontend',
      demo_url: '',
      github_url: ''
    });
    setEditingId(null);
    setFormOpen(false);
  };
  
  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        {!formOpen ? (
          <Button onClick={() => setFormOpen(true)} className="bg-brand-purple">
            <Plus className="mr-2 h-4 w-4" /> Add Project
          </Button>
        ) : (
          <Button variant="outline" onClick={resetForm}>
            <X className="mr-2 h-4 w-4" /> Cancel
          </Button>
        )}
      </div>
      
      {formOpen && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Fullstack</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input 
                  id="image_url" 
                  name="image_url" 
                  value={formData.image_url} 
                  onChange={handleInputChange} 
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input 
                  id="tags" 
                  name="tags" 
                  value={formData.tags} 
                  onChange={handleInputChange} 
                  placeholder="React, TypeScript, TailwindCSS"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="demo_url">Demo URL</Label>
                <Input 
                  id="demo_url" 
                  name="demo_url" 
                  value={formData.demo_url} 
                  onChange={handleInputChange} 
                  placeholder="https://demo.example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="github_url">GitHub URL</Label>
                <Input 
                  id="github_url" 
                  name="github_url" 
                  value={formData.github_url} 
                  onChange={handleInputChange} 
                  placeholder="https://github.com/yourusername/repo"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe the project, technologies used, and challenges overcome"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
              <Button type="submit" className="bg-brand-purple">
                {editingId ? 'Update Project' : 'Save Project'}
              </Button>
            </div>
          </form>
        </div>
      )}
      
      {loading ? (
        <div className="text-center py-12">
          <p>Loading projects...</p>
        </div>
      ) : (
        <Table>
          <TableCaption>Your portfolio projects</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No projects yet. Add your first project using the form above.
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>
                    <span className="capitalize">{project.category || 'N/A'}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {(project.tags || []).map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-muted px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(project.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    {project.demo_url && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        asChild
                      >
                        <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => handleEdit(project)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-destructive"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AdminProjects;
