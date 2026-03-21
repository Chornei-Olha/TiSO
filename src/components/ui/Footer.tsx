import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

type SocialItem =
  | { type: 'icon'; icon: any; link: string }
  | { type: 'custom'; link: string; render: () => React.ReactNode };

const socials: SocialItem[] = [
  { type: 'icon', icon: Instagram, link: '#' },
  { type: 'icon', icon: Facebook, link: '#' },
  { type: 'icon', icon: Youtube, link: '#' },

  {
    type: 'custom',
    link: '#',
    render: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 .1-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.6-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.6 0 1-.6 2.5-.9 3.9-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.1 0-2.5-1.7-4.4-4.8-4.4-3.5 0-5.7 2.6-5.7 5.5 0 1 .3 1.7.7 2.3.2.3.2.4.1.8-.1.3-.3 1-.4 1.3-.1.3-.3.4-.6.3-1.6-.7-2.3-2.5-2.3-4.6 0-3.4 2.9-7.5 8.6-7.5 4.6 0 7.6 3.3 7.6 6.9 0 4.7-2.6 8.3-6.5 8.3-1.3 0-2.5-.7-2.9-1.5l-.8 3c-.3 1-.9 2.2-1.4 3 1 .3 2 .5 3 .5 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    ),
  },

  { type: 'icon', icon: Linkedin, link: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#303030] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* LEFT */}
          <div>
            <p className="text-[18px] font-semibold text-white">TiSO Company</p>

            <div className="mt-3 space-y-2 text-[14px] text-[#b4b4b4]">
              <p>✉️ E-mail: sales@tiso.global</p>
              <p>🌐 www.tiso.global</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-[16px] font-semibold text-white">PRODUCT CATALOGUE</p>

            <div className="mt-4 flex items-center gap-4 sm:justify-end">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#b4b4b4] text-[#b4b4b4] transition hover:bg-[#a855f7] hover:border-[#a855f7] hover:text-white"
                >
                  {item.type === 'icon' && <item.icon size={18} />}
                  {item.type === 'custom' && item.render()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
