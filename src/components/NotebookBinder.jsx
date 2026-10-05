import React from 'react';
import {
    MapPin,
    Sparkles
} from 'lucide-react';

export const NotebookBinder = ({
    entry,
    onUpdateEntry,
    fontStyle,
    paperStyle,
    onOpenPhotoModal,
}) => {

return (
    <div className="book-container relative">

    {/* Book Glow */}
    <div className="book-glow-layer" />

    {/* ================= CENTER BINDER RINGS ================= */}

    {/* Space between the two pages */}
    <div className="book-spine-gutter" />


    {/* Ring 1 - Top */}
    <div className="binder-ring-wrapper binder-ring-top">
        <div className="binder-hole-left" />
        <div className="binder-ring-arc" />
        <div className="binder-hole-right" />
    </div>

      {/* Ring 2 - Middle */}
      <div className="binder-ring-wrapper binder-ring-middle">
        <div className="binder-hole-left" />
        <div className="binder-ring-arc" />
        <div className="binder-hole-right" />
      </div>


    {/* Ring 3 - Bottom */}
    <div className="binder-ring-wrapper binder-ring-bottom">
        <div className="binder-hole-left" />
        <div className="binder-ring-arc" />
        <div className="binder-hole-right" />
    </div>


    {/* ================= LEFT PAGE ================= */}

    <section className="book-page-left" aria-label="Journal Overview" >
    <div className="polaroid-wrapper group" onClick={onOpenPhotoModal} title="Click to view full photo or generate new art" >
    <div className="polaroid-frame">
    <div className="polaroid-image-container">
        <img src="./images/tropical-sandy-beach.jpg" alt="image" className="polaroid-img" loading="eager" />

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 text-xs px-2.5 py-1 rounded-full shadow font-medium flex items-center gap-1 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-amber-500" /> View Art
        </span>
        </div>
    </div>
    </div>
    </div>
    </section>


      {/* ================= RIGHT PAGE ================= */}

    <section className="book-page-right" aria-label="Journal Editor" >
    <div className="journal-section">
        <div className="journal-prompt-header">
            <span className="journal-prompt-icon">
                <i className="fa-solid fa-pen-nib" aria-hidden="true" ></i>
            </span>
            <span> {entry.prompt} </span>
        </div>

        {/* Journal Paper */}
        <div
            className={`ruled-paper-container ${
                paperStyle === 'blank' ? '!bg-none' : ''
            }`}

            style={{
                backgroundImage: paperStyle === 'dots' ? 'radial-gradient(circle, var(--page-line) 1.5px, transparent 1.5px)' : undefined,
                backgroundSize: paperStyle === 'dots' ? '24px 24px' : undefined, 
            }}
        >

        {/* Journal Text */}
        <textarea value={entry.content} readOnly aria-readonly="true" placeholder="Feel free to journal your current thoughts or anything else you'd like..."
            className={`journal-textarea journal-textarea-readonly 
            ${ fontStyle === 'handwriting' ? 'handwriting' : '' } 
            ${ fontStyle === 'serif' ? 'font-serif' : '' }`}
            rows={6}
        />
        </div>

        <div className="location-bar">
        <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input type="text" value={entry.location} onChange={(e) =>
                onUpdateEntry({
                    location: e.target.value
                })
            }
            placeholder="Where are you right now..." className="location-input" />
        </div>
    </div>
    </section>
    </div>
  );
};