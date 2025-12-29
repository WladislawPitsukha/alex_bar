import { linksFot } from '@/constants/linksFot'
import { link } from 'fs'
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 w-full">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <span className="text-lg font-bold">Alex Bar</span>
                    <span className="text-sm opacity-75">Cozy cafe &amp; bar — good vibes only</span>
                </div>

                <div className="flex items-center gap-3">
                    {linksFot.map((link, index) => (
                        <a 
                            id={`${link.id}`}
                            href={`${link.href}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`${link.labelText}`}
                            className="p-2 rounded-full hover:bg-white/10"
                        >
                            <link.icon />
                        </a>
                    ))}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-white/10">
                        <FaInstagram />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full hover:bg-white/10">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-full hover:bg-white/10">
                        <FaTwitter />
                    </a>
                    <a href="mailto:hello@alexbar.com" aria-label="Email" className="p-2 rounded-full hover:bg-white/10">
                        <FaEnvelope />
                    </a>
                </div>

                <div className="text-sm opacity-75">© {new Date().getFullYear()} Alex Bar. All rights reserved.</div>
            </div>
        </footer>
    )
}