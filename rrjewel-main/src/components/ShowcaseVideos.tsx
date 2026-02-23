import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ShowcaseVideos: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const { state, dispatch } = useAppContext();
  const [items, setItems] = useState<any[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (state.videos && state.videos.length > 0) {
      setItems(state.videos as any[]);
    } else {
      setItems([
        { id: 'mor', type: 'video', src: 'https://player.vimeo.com/external/447822549.sd.mp4?s=8d1b6e8f3f3c8e3c9d8b3b7d9b6a6c1f3c2d1e0f', title: 'mor' },
        { id: 'showcase1', type: 'video', src: 'https://player.vimeo.com/external/452301931.sd.mp4?s=0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8g9', title: 'showcase1' },
      ]);
    }
  }, [state.videos]);

  const addVideo = async () => {
    const API = (import.meta.env && (import.meta.env.VITE_API_BASE || '')) || '';
    try {
        if (file) {
        const fd = new FormData();
        fd.append('file', file);
        fd.append('title', title || file.name || 'Video');
        const res = await fetch(`${API}/api/videos`, { method: 'POST', body: fd });
        if (!res.ok) throw new Error('Add failed');
        const v = await res.json();
        dispatch({ type: 'SET_VIDEOS', payload: [v, ...(state.videos || [])] });
      } else if (url) {
        const res = await fetch(`${API}/api/videos`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title || 'Video', url }) });
        if (!res.ok) throw new Error('Add failed');
        const v = await res.json();
        dispatch({ type: 'SET_VIDEOS', payload: [v, ...(state.videos || [])] });
      } else {
        return;
      }
      setTitle(''); setUrl(''); setFile(null); setShowInput(false);
    } catch (e) {
      // fallback to local
      const id = Date.now().toString();
      const newV = { id, title: title || (file ? file.name : 'Video'), url: url || (file ? URL.createObjectURL(file) : '') };
      dispatch({ type: 'ADD_VIDEO', payload: newV });
      setTitle(''); setUrl(''); setFile(null); setShowInput(false);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-deep-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
          <h3 className="luxury-serif text-2xl text-text-on-dark">Showcase Videos</h3>
          <div className="flex items-center gap-3">
            {state.user && state.user.email === 'admin@moraa.com' && (
              <div className="mr-4">
                <button onClick={() => setShowInput(!showInput)} className="px-3 py-2 bg-brand text-dark-chocolate rounded">{showInput ? 'Close' : 'Add Video'}</button>
              </div>
            )}
            <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-black/40 border border-gold-primary/30 text-gold-primary hover:shadow-glow transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-black/40 border border-gold-primary/30 text-gold-primary hover:shadow-glow transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        </div>

        {showInput && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="p-2 border rounded" />
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Video URL (mp4 or embed)" className="p-2 border rounded" />
                <div className="flex items-center">
                  <label className="flex items-center space-x-2">
                    <input type="file" accept="video/*" onChange={e => setFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)} />
                  </label>
                </div>
                <div className="flex items-center">
                  <button onClick={addVideo} className="bg-brand text-dark-chocolate px-4 py-2 rounded">Add</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pr-4 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {items.map((item) => (
            <Link
              to="/products"
              key={item.id}
              className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[420px] snap-start glass-card rounded-2xl overflow-hidden relative"
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-[480px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img src={(item as any).src} alt={item.title} className="w-full h-[480px] object-cover" />
              )}

              <div className="absolute left-4 bottom-4 text-text-on-dark">
                <p className="text-sm luxury-serif bg-black/30 px-3 py-1 rounded-full">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden justify-between mt-4">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-black/40 border border-gold-primary/30 text-gold-primary hover:shadow-glow transition-all"
            aria-label="Scroll left mobile"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-black/40 border border-gold-primary/30 text-gold-primary hover:shadow-glow transition-all"
            aria-label="Scroll right mobile"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseVideos;
