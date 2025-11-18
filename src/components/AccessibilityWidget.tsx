'use client';

import { useState, useEffect } from 'react';
import { X, Settings, Eye, Type, MousePointer, Contrast, Palette } from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontFamily: 'default' | 'dyslexia' | 'arial' | 'verdana';
  highlightLinks: boolean;
  highlightHeadings: boolean;
  cursorSize: 'default' | 'large' | 'extra-large';
  cursorColor: 'default' | 'black' | 'white';
  contrast: 'default' | 'high' | 'higher';
  saturation: number;
  invertColors: boolean;
  grayscale: boolean;
  disableAnimations: boolean;
  screenReader: boolean;
  textSpacing: boolean;
  hideImages: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  lineHeight: 100,
  letterSpacing: 0,
  fontFamily: 'default',
  highlightLinks: false,
  highlightHeadings: false,
  cursorSize: 'default',
  cursorColor: 'default',
  contrast: 'default',
  saturation: 100,
  invertColors: false,
  grayscale: false,
  disableAnimations: false,
  screenReader: false,
  textSpacing: false,
  hideImages: false,
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [activeTab, setActiveTab] = useState<'vision' | 'motor' | 'cognitive'>('vision');

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load accessibility settings');
      }
    }
  }, []);

  // Save settings and apply them
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings();
  }, [settings]);

  const applySettings = () => {
    const root = document.documentElement;
    const body = document.body;
    
    // Font size
    root.style.setProperty('--a11y-font-scale', `${settings.fontSize / 100}`);
    if (settings.fontSize !== 100) {
      body.classList.add('a11y-font-active');
    } else {
      body.classList.remove('a11y-font-active');
    }
    
    // Line height
    root.style.setProperty('--a11y-line-height', `${settings.lineHeight / 100}`);
    if (settings.lineHeight !== 100) {
      body.classList.add('a11y-line-active');
    } else {
      body.classList.remove('a11y-line-active');
    }
    
    // Letter spacing
    root.style.setProperty('--a11y-letter-spacing', `${settings.letterSpacing}px`);
    if (settings.letterSpacing !== 0) {
      body.classList.add('a11y-letter-active');
    } else {
      body.classList.remove('a11y-letter-active');
    }
    
    // Font family
    const fontFamilies = {
      default: '',
      dyslexia: 'OpenDyslexic, Comic Sans MS, sans-serif',
      arial: 'Arial, sans-serif',
      verdana: 'Verdana, sans-serif',
    };
    root.style.setProperty('--a11y-font-family', fontFamilies[settings.fontFamily]);
    if (settings.fontFamily !== 'default') {
      body.classList.add('a11y-font-family-active');
    } else {
      body.classList.remove('a11y-font-family-active');
    }
    
    // Cursor
    const cursorSizes = {
      default: '',
      large: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Cpath d=\'M2 2 L2 28 L12 22 L16 30 L20 28 L16 20 L24 20 Z\' fill=\'black\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E") 2 2, auto',
      'extra-large': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\'%3E%3Cpath d=\'M2 2 L2 42 L18 33 L24 45 L30 42 L24 30 L36 30 Z\' fill=\'black\' stroke=\'white\' stroke-width=\'3\'/%3E%3C/svg%3E") 2 2, auto',
    };
    root.style.cursor = cursorSizes[settings.cursorSize];
    
    // Contrast
    if (settings.contrast === 'high') {
      root.classList.add('a11y-high-contrast');
      root.classList.remove('a11y-higher-contrast');
    } else if (settings.contrast === 'higher') {
      root.classList.add('a11y-higher-contrast');
      root.classList.remove('a11y-high-contrast');
    } else {
      root.classList.remove('a11y-high-contrast', 'a11y-higher-contrast');
    }
    
    // Saturation
    root.style.setProperty('--a11y-saturation', `${settings.saturation}%`);
    
    // Invert colors
    root.classList.toggle('a11y-invert', settings.invertColors);
    
    // Grayscale
    root.classList.toggle('a11y-grayscale', settings.grayscale);
    
    // Disable animations
    if (settings.disableAnimations) {
      root.classList.add('a11y-no-animations');
      
      // Kill all GSAP animations if available
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        try {
          gsap.globalTimeline.pause();
          gsap.killTweensOf('*');
        } catch (e) {
          console.warn('Could not pause GSAP:', e);
        }
      }
      
      // Disable ScrollTrigger if available
      if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
        try {
          (window as any).ScrollTrigger.getAll().forEach((trigger: any) => {
            trigger.disable();
          });
        } catch (e) {
          console.warn('Could not disable ScrollTrigger:', e);
        }
      }
    } else {
      root.classList.remove('a11y-no-animations');
      
      // Resume GSAP animations if available
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        try {
          if (gsap.globalTimeline.paused()) {
            gsap.globalTimeline.play();
          }
        } catch (e) {
          console.warn('Could not resume GSAP:', e);
        }
      }
      
      // Enable ScrollTrigger if available
      if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
        try {
          (window as any).ScrollTrigger.getAll().forEach((trigger: any) => {
            trigger.enable();
          });
        } catch (e) {
          console.warn('Could not enable ScrollTrigger:', e);
        }
      }
    }
    
    // Highlight links
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks);
    
    // Highlight headings
    root.classList.toggle('a11y-highlight-headings', settings.highlightHeadings);
    
    // Text spacing
    root.classList.toggle('a11y-text-spacing', settings.textSpacing);
    
    // Hide images
    root.classList.toggle('a11y-hide-images', settings.hideImages);
    
    // Mark body as having active accessibility features
    const hasActiveFeatures = Object.entries(settings).some(([key, value]) => {
      const defaultValue = defaultSettings[key as keyof AccessibilitySettings];
      return value !== defaultValue;
    });
    body.classList.toggle('a11y-active', hasActiveFeatures);
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="a11y-widget-button"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Settings className="a11y-widget-icon" />
      </button>

      {/* Widget panel */}
      {isOpen && (
        <div className="a11y-widget-overlay">
          {/* Backdrop */}
          <div 
            className="a11y-widget-backdrop"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="a11y-widget-panel">
            {/* Header */}
            <div className="a11y-widget-header">
              <div>
                <h2 className="a11y-widget-title">Accessibility Settings</h2>
                <p className="a11y-widget-subtitle">Customize your viewing experience</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="a11y-widget-close"
                aria-label="Close"
              >
                <X className="a11y-widget-icon" />
              </button>
            </div>

            {/* Tabs */}
            <div className="a11y-widget-tabs">
              <button
                onClick={() => setActiveTab('vision')}
                className={`a11y-widget-tab ${activeTab === 'vision' ? 'active' : ''}`}
              >
                <Eye className="a11y-tab-icon" />
                Vision
              </button>
              <button
                onClick={() => setActiveTab('motor')}
                className={`a11y-widget-tab ${activeTab === 'motor' ? 'active' : ''}`}
              >
                <MousePointer className="a11y-tab-icon" />
                Motor
              </button>
              <button
                onClick={() => setActiveTab('cognitive')}
                className={`a11y-widget-tab ${activeTab === 'cognitive' ? 'active' : ''}`}
              >
                <Type className="a11y-tab-icon" />
                Cognitive
              </button>
            </div>

            {/* Content */}
            <div className="a11y-widget-content">
              {/* Vision Tab */}
              {activeTab === 'vision' && (
                <div className="a11y-widget-section">
                  {/* Contrast */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      <Contrast className="a11y-label-icon" />
                      Contrast
                    </label>
                    <div className="a11y-button-group">
                      {['default', 'high', 'higher'].map((level) => (
                        <button
                          key={level}
                          onClick={() => setSettings({ ...settings, contrast: level as any })}
                          className={`a11y-option-button ${settings.contrast === level ? 'active' : ''}`}
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Saturation */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      <Palette className="a11y-label-icon" />
                      Saturation: {settings.saturation}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={settings.saturation}
                      onChange={(e) => setSettings({ ...settings, saturation: Number(e.target.value) })}
                      className="a11y-slider"
                    />
                  </div>

                  {/* Toggles */}
                  <div className="a11y-toggles">
                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Invert Colors</span>
                      <input
                        type="checkbox"
                        checked={settings.invertColors}
                        onChange={(e) => setSettings({ ...settings, invertColors: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>

                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Grayscale (Black & White)</span>
                      <input
                        type="checkbox"
                        checked={settings.grayscale}
                        onChange={(e) => setSettings({ ...settings, grayscale: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>

                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Hide Images</span>
                      <input
                        type="checkbox"
                        checked={settings.hideImages}
                        onChange={(e) => setSettings({ ...settings, hideImages: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Motor Tab */}
              {activeTab === 'motor' && (
                <div className="a11y-widget-section">
                  {/* Cursor Size */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      <MousePointer className="a11y-label-icon" />
                      Cursor Size
                    </label>
                    <div className="a11y-button-group">
                      {(['default', 'large', 'extra-large'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => setSettings({ ...settings, cursorSize: size })}
                          className={`a11y-option-button ${settings.cursorSize === size ? 'active' : ''}`}
                        >
                          {size.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="a11y-toggles">
                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Highlight Links</span>
                      <input
                        type="checkbox"
                        checked={settings.highlightLinks}
                        onChange={(e) => setSettings({ ...settings, highlightLinks: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>

                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Disable Animations</span>
                      <input
                        type="checkbox"
                        checked={settings.disableAnimations}
                        onChange={(e) => setSettings({ ...settings, disableAnimations: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Cognitive Tab */}
              {activeTab === 'cognitive' && (
                <div className="a11y-widget-section">
                  {/* Font Size */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      <Type className="a11y-label-icon" />
                      Font Size: {settings.fontSize}%
                    </label>
                    <input
                      type="range"
                      min="90"
                      max="150"
                      step="5"
                      value={settings.fontSize}
                      onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })}
                      className="a11y-slider"
                    />
                    <div className="a11y-slider-labels">
                      <span>90%</span>
                      <span>100%</span>
                      <span>150%</span>
                    </div>
                  </div>

                  {/* Line Height */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      Line Height: {settings.lineHeight}%
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="180"
                      step="10"
                      value={settings.lineHeight}
                      onChange={(e) => setSettings({ ...settings, lineHeight: Number(e.target.value) })}
                      className="a11y-slider"
                    />
                    <div className="a11y-slider-labels">
                      <span>Normal</span>
                      <span>Comfortable</span>
                      <span>Spacious</span>
                    </div>
                  </div>

                  {/* Letter Spacing */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      Letter Spacing: {settings.letterSpacing}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={settings.letterSpacing}
                      onChange={(e) => setSettings({ ...settings, letterSpacing: Number(e.target.value) })}
                      className="a11y-slider"
                    />
                    <div className="a11y-slider-labels">
                      <span>Normal</span>
                      <span>Wide</span>
                      <span>Extra Wide</span>
                    </div>
                  </div>

                  {/* Font Family */}
                  <div className="a11y-control-group">
                    <label className="a11y-control-label">
                      Font Family
                    </label>
                    <select
                      value={settings.fontFamily}
                      onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value as any })}
                      className="a11y-select"
                    >
                      <option value="default">Default</option>
                      <option value="dyslexia">Dyslexia Friendly</option>
                      <option value="arial">Arial</option>
                      <option value="verdana">Verdana</option>
                    </select>
                  </div>

                  {/* Toggles */}
                  <div className="a11y-toggles">
                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Highlight Headings</span>
                      <input
                        type="checkbox"
                        checked={settings.highlightHeadings}
                        onChange={(e) => setSettings({ ...settings, highlightHeadings: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>

                    <label className="a11y-toggle">
                      <span className="a11y-toggle-label">Increased Text Spacing</span>
                      <input
                        type="checkbox"
                        checked={settings.textSpacing}
                        onChange={(e) => setSettings({ ...settings, textSpacing: e.target.checked })}
                        className="a11y-checkbox"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="a11y-widget-footer">
              <button
                onClick={resetSettings}
                className="a11y-reset-button"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="a11y-done-button"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}