import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  MessageSquare,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.brand.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const subject = formData.subject || 'DreamObserver';
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    const href = `mailto:${PORTFOLIO_CONFIG.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <section id="contact" className="py-20 border-b border-[#0D416D]/60 bg-[#061320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#E5A00D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Get in Touch with DreamObserver
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Questions about the work can go to email. The form opens your mail app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#091b2c] border border-[#0D416D] rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">
                Contact Channels
              </h3>

              <div className="mb-4 p-3.5 bg-[#05111c] rounded-xl border border-[#0D416D] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#E5A00D] uppercase">Direct Email</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate max-w-[200px] sm:max-w-none mt-0.5">
                    {PORTFOLIO_CONFIG.brand.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#0D416D] hover:bg-[#145388] text-slate-200 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#E5A00D]" />}
                </button>
              </div>

              <div className="p-4 bg-[#05111c]/60 rounded-xl border border-[#0D416D]/60 text-xs text-slate-300 space-y-2">
                <div className="font-mono text-[11px] text-[#E5A00D] uppercase font-semibold">Specialization</div>
                <p className="leading-relaxed">
                  Web and mobile GIS, remote sensing, spatial analysis, desktop tools, mobile games, and other applications.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#0D416D] text-xs text-slate-300 font-medium">
                <a
                  href={PORTFOLIO_CONFIG.brand.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E5A00D] inline-flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#091b2c] border border-[#0D416D] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#E5A00D]" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Write the note here. Sending opens your mail app, addressed to DreamObserver.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-[#05111c] border border-[#0D416D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A00D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-[#05111c] border border-[#0D416D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A00D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">Subject / Inquired Project</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Cloud Optimized GeoTIFF Viewer or Mobile GIS Surveying"
                      className="w-full bg-[#05111c] border border-[#0D416D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A00D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your inquiry, thoughts on the projects, or collaboration details..."
                      className="w-full bg-[#05111c] border border-[#0D416D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A00D] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-[11px] font-mono text-slate-400">
                      Opens your email app
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E5A00D] hover:bg-[#f5af19] text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-lg shadow-[#E5A00D]/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Write email</span>
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
