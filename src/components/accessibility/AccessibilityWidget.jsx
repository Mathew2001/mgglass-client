import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AccessibilityWidget.css'

const AccessibilityWidget = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    fontSize: 'normal', // 'small', 'normal', 'large', 'xlarge'
    fontFamily: 'default', // 'default', 'arial', 'verdana', 'comic', 'tahoma', 'openDyslexic'
    contrast: 'normal', // 'normal', 'high', 'dark'
    colorScheme: 'normal', // 'normal', 'white', 'black'
    grayscale: false,
    underlineLinks: false,
    stopAnimations: false,
    highlightFocus: false,
    cursorSize: 'normal', // 'normal', 'large'
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(parsed)
        applySettings(parsed)
      } catch (e) {
        console.error('Error loading accessibility settings:', e)
      }
    }
  }, [])

  // Apply settings to document
  const applySettings = (newSettings) => {
    const root = document.documentElement
    const body = document.body

    // Remove all accessibility classes first
    root.classList.remove(
      'accessibility-small-text',
      'accessibility-large-text',
      'accessibility-xlarge-text',
      'accessibility-font-arial',
      'accessibility-font-verdana',
      'accessibility-font-comic',
      'accessibility-font-tahoma',
      'accessibility-font-opendyslexic',
      'accessibility-high-contrast',
      'accessibility-dark-mode',
      'accessibility-grayscale',
      'accessibility-underline-links',
      'accessibility-stop-animations',
      'accessibility-highlight-focus',
      'accessibility-large-cursor'
    )
    body.classList.remove(
      'accessibility-small-text',
      'accessibility-large-text',
      'accessibility-xlarge-text',
      'accessibility-font-arial',
      'accessibility-font-verdana',
      'accessibility-font-comic',
      'accessibility-font-tahoma',
      'accessibility-font-opendyslexic',
      'accessibility-high-contrast',
      'accessibility-dark-mode',
      'accessibility-grayscale',
      'accessibility-underline-links',
      'accessibility-stop-animations',
      'accessibility-highlight-focus',
      'accessibility-large-cursor'
    )

    // Apply new settings
    if (newSettings.fontSize === 'small') {
      root.classList.add('accessibility-small-text')
      body.classList.add('accessibility-small-text')
    } else if (newSettings.fontSize === 'large') {
      root.classList.add('accessibility-large-text')
      body.classList.add('accessibility-large-text')
    } else if (newSettings.fontSize === 'xlarge') {
      root.classList.add('accessibility-xlarge-text')
      body.classList.add('accessibility-xlarge-text')
    }

    // Apply font family
    if (newSettings.fontFamily === 'arial') {
      root.classList.add('accessibility-font-arial')
      body.classList.add('accessibility-font-arial')
    } else if (newSettings.fontFamily === 'verdana') {
      root.classList.add('accessibility-font-verdana')
      body.classList.add('accessibility-font-verdana')
    } else if (newSettings.fontFamily === 'comic') {
      root.classList.add('accessibility-font-comic')
      body.classList.add('accessibility-font-comic')
    } else if (newSettings.fontFamily === 'tahoma') {
      root.classList.add('accessibility-font-tahoma')
      body.classList.add('accessibility-font-tahoma')
    } else if (newSettings.fontFamily === 'openDyslexic') {
      root.classList.add('accessibility-font-opendyslexic')
      body.classList.add('accessibility-font-opendyslexic')
    }

    if (newSettings.contrast === 'high') {
      root.classList.add('accessibility-high-contrast')
      body.classList.add('accessibility-high-contrast')
    } else if (newSettings.contrast === 'dark') {
      root.classList.add('accessibility-dark-mode')
      body.classList.add('accessibility-dark-mode')
    }

    // Apply color scheme (white/black)
    if (newSettings.colorScheme === 'white') {
      root.classList.add('accessibility-white-mode')
      body.classList.add('accessibility-white-mode')
    } else if (newSettings.colorScheme === 'black') {
      root.classList.add('accessibility-black-mode')
      body.classList.add('accessibility-black-mode')
    }

    if (newSettings.grayscale) {
      root.classList.add('accessibility-grayscale')
      body.classList.add('accessibility-grayscale')
    }

    if (newSettings.underlineLinks) {
      root.classList.add('accessibility-underline-links')
      body.classList.add('accessibility-underline-links')
    }

    if (newSettings.stopAnimations) {
      root.classList.add('accessibility-stop-animations')
      body.classList.add('accessibility-stop-animations')
    }

    if (newSettings.highlightFocus) {
      root.classList.add('accessibility-highlight-focus')
      body.classList.add('accessibility-highlight-focus')
    }

    if (newSettings.cursorSize === 'large') {
      root.classList.add('accessibility-large-cursor')
      body.classList.add('accessibility-large-cursor')
    }
  }

  // Update settings and apply
  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings))
    applySettings(newSettings)
  }

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 'normal',
      fontFamily: 'default',
      contrast: 'normal',
      colorScheme: 'normal',
      grayscale: false,
      underlineLinks: false,
      stopAnimations: false,
      highlightFocus: false,
      cursorSize: 'normal',
    }
    setSettings(defaultSettings)
    localStorage.setItem('accessibilitySettings', JSON.stringify(defaultSettings))
    applySettings(defaultSettings)
  }

  const accessibilityTitle = t('accessibility.title', { defaultValue: 'נגישות' })
  const fontSize = t('accessibility.fontSize', { defaultValue: 'גודל טקסט' })
  const fontFamily = t('accessibility.fontFamily', { defaultValue: 'גופן קריא' })
  const contrast = t('accessibility.contrast', { defaultValue: 'ניגודיות' })
  const grayscale = t('accessibility.grayscale', { defaultValue: 'גווני אפור' })
  const underlineLinks = t('accessibility.underlineLinks', { defaultValue: 'הדגשת קישורים' })
  const stopAnimations = t('accessibility.stopAnimations', { defaultValue: 'עצירת אנימציות' })
  const highlightFocus = t('accessibility.highlightFocus', { defaultValue: 'הדגשת פוקוס' })
  const cursorSize = t('accessibility.cursorSize', { defaultValue: 'גודל סמן' })
  const reset = t('accessibility.reset', { defaultValue: 'איפוס' })
  const close = t('accessibility.close', { defaultValue: 'סגור' })
  const small = t('accessibility.small', { defaultValue: 'קטן' })
  const normal = t('accessibility.normal', { defaultValue: 'רגיל' })
  const large = t('accessibility.large', { defaultValue: 'גדול' })
  const xlarge = t('accessibility.xlarge', { defaultValue: 'גדול מאוד' })
  const high = t('accessibility.high', { defaultValue: 'גבוה' })
  const dark = t('accessibility.dark', { defaultValue: 'כהה' })
  const colorScheme = t('accessibility.colorScheme', { defaultValue: 'צבע רקע' })
  const white = t('accessibility.white', { defaultValue: 'לבן' })
  const black = t('accessibility.black', { defaultValue: 'שחור' })
  const defaultFont = t('accessibility.defaultFont', { defaultValue: 'ברירת מחדל' })
  const arial = t('accessibility.arial', { defaultValue: 'Arial' })
  const verdana = t('accessibility.verdana', { defaultValue: 'Verdana' })
  const comic = t('accessibility.comic', { defaultValue: 'Comic Sans' })
  const tahoma = t('accessibility.tahoma', { defaultValue: 'Tahoma' })
  const openDyslexic = t('accessibility.openDyslexic', { defaultValue: 'OpenDyslexic' })

  return (
    <>
      {/* Accessibility Button - Fixed Position */}
      <button
        className="accessibility-widget-button d-none d-sm-block"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={accessibilityTitle}
        aria-expanded={isOpen}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: dir === 'rtl' ? '24px' : 'auto',
          right: dir === 'rtl' ? 'auto' : '24px',
          zIndex: 9999,
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
          color: 'white',
          border: 'none',
          boxShadow: isOpen 
            ? '0 8px 24px rgba(0, 102, 204, 0.4)' 
            : '0 4px 12px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.target.style.transform = 'scale(1.1)'
            e.target.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.3)'
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
          }
        }}
      >
        <i className="bi bi-universal-access-circle" aria-hidden="true"></i>
      </button>

      <button
        className="accessibility-widget-button d-block d-sm-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={accessibilityTitle}
        aria-expanded={isOpen}
        style={{
          position: 'fixed',
          bottom: '100px',
          left: dir === 'rtl' ? '24px' : 'auto',
          right: dir === 'rtl' ? 'auto' : '24px',
          zIndex: 9999,
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
          color: 'white',
          border: 'none',
          boxShadow: isOpen 
            ? '0 8px 24px rgba(0, 102, 204, 0.4)' 
            : '0 4px 12px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.target.style.transform = 'scale(1.1)'
            e.target.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.3)'
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
          }
        }}
      >
        <i className="bi bi-universal-access-circle" aria-hidden="true"></i>
      </button>
      {/* Accessibility Panel */}
      {isOpen && (
        <div
          className="accessibility-widget-panel"
          style={{
            position: 'fixed',
            bottom: '100px',
            left: dir === 'rtl' ? '24px' : 'auto',
            right: dir === 'rtl' ? 'auto' : '24px',
            zIndex: 9998,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '0',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            maxWidth: '380px',
            width: '90vw',
            maxHeight: '85vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            dir: dir,
            animation: 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          role="dialog"
          aria-labelledby="accessibility-title"
        >
          {/* Header */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
              color: 'white',
              padding: '20px 24px',
              borderRadius: '16px 16px 0 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="bi bi-universal-access-circle" style={{ fontSize: '24px' }}></i>
              <h3 id="accessibility-title" style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>
                {accessibilityTitle}
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label={close}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '8px',
                width: '32px',
                height: '32px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)'
                e.target.style.transform = 'rotate(90deg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                e.target.style.transform = 'rotate(0deg)'
              }}
            >
              <i className="bi bi-x-lg" style={{ fontSize: '18px' }}></i>
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: '24px' }}>

          {/* Font Size */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <i className="bi bi-type" style={{ color: '#0066cc', fontSize: '18px' }}></i>
              <label style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: '#1a1a1a' }}>
                {fontSize}
              </label>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="group">
              {[
                { value: 'small', label: small },
                { value: 'normal', label: normal },
                { value: 'large', label: large },
                { value: 'xlarge', label: xlarge },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateSetting('fontSize', option.value)}
                  style={{
                    flex: '1',
                    minWidth: '70px',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: settings.fontSize === option.value 
                      ? '2px solid #0066cc' 
                      : '2px solid #e0e0e0',
                    background: settings.fontSize === option.value 
                      ? '#0066cc' 
                      : '#ffffff',
                    color: settings.fontSize === option.value 
                      ? '#ffffff' 
                      : '#333333',
                    fontWeight: settings.fontSize === option.value ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => {
                    if (settings.fontSize !== option.value) {
                      e.target.style.borderColor = '#0066cc'
                      e.target.style.background = '#f0f7ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (settings.fontSize !== option.value) {
                      e.target.style.borderColor = '#e0e0e0'
                      e.target.style.background = '#ffffff'
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Family */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <i className="bi bi-fonts" style={{ color: '#0066cc', fontSize: '18px' }}></i>
              <label style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: '#1a1a1a' }}>
                {fontFamily}
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} role="group">
              {[
                { value: 'default', label: defaultFont },
                { value: 'arial', label: arial },
                { value: 'verdana', label: verdana },
                { value: 'comic', label: comic },
                { value: 'tahoma', label: tahoma },
                { value: 'openDyslexic', label: openDyslexic },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateSetting('fontFamily', option.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: settings.fontFamily === option.value 
                      ? '2px solid #0066cc' 
                      : '2px solid #e0e0e0',
                    background: settings.fontFamily === option.value 
                      ? '#0066cc' 
                      : '#ffffff',
                    color: settings.fontFamily === option.value 
                      ? '#ffffff' 
                      : '#333333',
                    fontWeight: settings.fontFamily === option.value ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '14px',
                    textAlign: 'left',
                    fontFamily: option.value === 'default' ? 'inherit' : 
                               option.value === 'arial' ? 'Arial, sans-serif' :
                               option.value === 'verdana' ? 'Verdana, sans-serif' :
                               option.value === 'comic' ? 'Comic Sans MS, cursive' :
                               option.value === 'tahoma' ? 'Tahoma, sans-serif' :
                               'OpenDyslexic, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (settings.fontFamily !== option.value) {
                      e.target.style.borderColor = '#0066cc'
                      e.target.style.background = '#f0f7ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (settings.fontFamily !== option.value) {
                      e.target.style.borderColor = '#e0e0e0'
                      e.target.style.background = '#ffffff'
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: '#e8e8e8', margin: '24px 0' }}></div>

          {/* Contrast */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <i className="bi bi-circle-half" style={{ color: '#0066cc', fontSize: '18px' }}></i>
              <label style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: '#1a1a1a' }}>
                {contrast}
              </label>
            </div>
            <div style={{ display: 'flex', gap: '8px' }} role="group">
              {[
                { value: 'normal', label: normal },
                { value: 'high', label: high },
                { value: 'dark', label: dark },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateSetting('contrast', option.value)}
                  style={{
                    flex: '1',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: settings.contrast === option.value 
                      ? '2px solid #0066cc' 
                      : '2px solid #e0e0e0',
                    background: settings.contrast === option.value 
                      ? '#0066cc' 
                      : '#ffffff',
                    color: settings.contrast === option.value 
                      ? '#ffffff' 
                      : '#333333',
                    fontWeight: settings.contrast === option.value ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => {
                    if (settings.contrast !== option.value) {
                      e.target.style.borderColor = '#0066cc'
                      e.target.style.background = '#f0f7ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (settings.contrast !== option.value) {
                      e.target.style.borderColor = '#e0e0e0'
                      e.target.style.background = '#ffffff'
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Color Scheme */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <i className="bi bi-palette" style={{ color: '#0066cc', fontSize: '18px' }}></i>
              <label style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: '#1a1a1a' }}>
                {colorScheme}
              </label>
            </div>
            <div style={{ display: 'flex', gap: '8px' }} role="group">
              {[
                { value: 'normal', label: normal },
                { value: 'white', label: white },
                { value: 'black', label: black },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateSetting('colorScheme', option.value)}
                  style={{
                    flex: '1',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: settings.colorScheme === option.value 
                      ? '2px solid #0066cc' 
                      : '2px solid #e0e0e0',
                    background: settings.colorScheme === option.value 
                      ? '#0066cc' 
                      : '#ffffff',
                    color: settings.colorScheme === option.value 
                      ? '#ffffff' 
                      : '#333333',
                    fontWeight: settings.colorScheme === option.value ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => {
                    if (settings.colorScheme !== option.value) {
                      e.target.style.borderColor = '#0066cc'
                      e.target.style.background = '#f0f7ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (settings.colorScheme !== option.value) {
                      e.target.style.borderColor = '#e0e0e0'
                      e.target.style.background = '#ffffff'
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: '#e8e8e8', margin: '24px 0' }}></div>

          {/* Toggle Options */}
          <div style={{ marginBottom: '24px' }}>
            {[
              { 
                id: 'grayscale', 
                checked: settings.grayscale, 
                onChange: (e) => updateSetting('grayscale', e.target.checked),
                label: grayscale,
                icon: 'bi-circle',
              },
              { 
                id: 'underlineLinks', 
                checked: settings.underlineLinks, 
                onChange: (e) => updateSetting('underlineLinks', e.target.checked),
                label: underlineLinks,
                icon: 'bi-link-45deg',
              },
              { 
                id: 'stopAnimations', 
                checked: settings.stopAnimations, 
                onChange: (e) => updateSetting('stopAnimations', e.target.checked),
                label: stopAnimations,
                icon: 'bi-pause-circle',
              },
              { 
                id: 'highlightFocus', 
                checked: settings.highlightFocus, 
                onChange: (e) => updateSetting('highlightFocus', e.target.checked),
                label: highlightFocus,
                icon: 'bi-cursor',
              },
            ].map((option) => (
              <div
                key={option.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: option.checked ? '#f0f7ff' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8f9fa'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = option.checked ? '#f0f7ff' : 'transparent'
                }}
                onClick={() => updateSetting(option.id, !option.checked)}
              >
                <div style={{ position: 'relative', marginRight: '12px' }}>
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={option.checked}
                    onChange={option.onChange}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      accentColor: '#0066cc',
                    }}
                  />
                </div>
                <i className={`bi ${option.icon}`} style={{ color: '#0066cc', fontSize: '16px', marginRight: '10px' }}></i>
                <label 
                  htmlFor={option.id}
                  style={{
                    margin: 0,
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: option.checked ? '500' : '400',
                    color: '#333333',
                    flex: 1,
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: '#e8e8e8', margin: '24px 0' }}></div>

          {/* Cursor Size */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <i className="bi bi-cursor-fill" style={{ color: '#0066cc', fontSize: '18px' }}></i>
              <label style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: '#1a1a1a' }}>
                {cursorSize}
              </label>
            </div>
            <div style={{ display: 'flex', gap: '8px' }} role="group">
              {[
                { value: 'normal', label: normal },
                { value: 'large', label: large },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateSetting('cursorSize', option.value)}
                  style={{
                    flex: '1',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: settings.cursorSize === option.value 
                      ? '2px solid #0066cc' 
                      : '2px solid #e0e0e0',
                    background: settings.cursorSize === option.value 
                      ? '#0066cc' 
                      : '#ffffff',
                    color: settings.cursorSize === option.value 
                      ? '#ffffff' 
                      : '#333333',
                    fontWeight: settings.cursorSize === option.value ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => {
                    if (settings.cursorSize !== option.value) {
                      e.target.style.borderColor = '#0066cc'
                      e.target.style.background = '#f0f7ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (settings.cursorSize !== option.value) {
                      e.target.style.borderColor = '#e0e0e0'
                      e.target.style.background = '#ffffff'
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetSettings}
            style={{
              width: '100%',
              padding: '12px 24px',
              borderRadius: '8px',
              border: '2px solid #dc3545',
              background: '#ffffff',
              color: '#dc3545',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#dc3545'
              e.target.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffffff'
              e.target.style.color = '#dc3545'
            }}
          >
            <i className="bi bi-arrow-counterclockwise"></i>
            {reset}
          </button>
          </div>
        </div>
      )}

      {/* Overlay when panel is open */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9997,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default AccessibilityWidget

