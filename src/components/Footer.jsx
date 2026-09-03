import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Github, link: 'https://github.com/thenameisadityyaa', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/sharma-adityaa/', label: 'LinkedIn' },
    { icon: Twitter, link: 'https://x.com/heistcoder', label: 'Twitter' },
    { icon: Mail, link: 'mailto:work.adityyaa@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
        <p className="text-gray-500 text-sm font-light">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-bounce" />
          <span>by <span className="font-medium text-gray-900 font-[Caveat] text-2xl">Aditya & GPT 5.0</span></span>
        </div>

        <div className="flex gap-6">
          {socials.map(({ icon: Icon, link, label }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}