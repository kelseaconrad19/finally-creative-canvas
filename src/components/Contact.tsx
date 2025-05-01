
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Have a project in mind or want to discuss a potential collaboration?
              I'd love to hear from you. Fill out the form or contact me directly.
            </p>
            
            <div className="space-y-6 mb-8">
              <ContactInfo 
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                content="hello@finallycreative.dev"
                href="mailto:hello@finallycreative.dev"
              />
              <ContactInfo 
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                content="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <ContactInfo 
                icon={<Globe className="h-5 w-5" />}
                title="Website"
                content="finallycreative.dev"
                href="https://finallycreative.dev"
              />
            </div>
            
            <div className="p-6 bg-brand-purple/5 rounded-xl border border-brand-purple/20">
              <h3 className="text-lg font-bold mb-2">My Availability</h3>
              <p className="text-muted-foreground mb-3">
                I'm currently available for freelance projects and consulting.
                My typical response time is within 24 hours.
              </p>
              <div className="flex items-center text-sm text-brand-purple">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Available for new projects
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-muted/40 border-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-muted/40 border-muted"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry" 
                    className="bg-muted/40 border-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="bg-muted/40 border-muted min-h-[150px]"
                  />
                </div>
                
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  href: string 
}) => {
  return (
    <a 
      href={href} 
      className="flex items-start hover:text-brand-purple transition-colors"
    >
      <div className="flex items-center justify-center p-3 bg-white rounded-lg mr-4 shadow-sm">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-muted-foreground">{content}</div>
      </div>
    </a>
  );
};

export default Contact;
