import React, { useState } from 'react';

const PartnerOnboarding: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyName: '',
    city: '',
    region: '',
    propertyType: '',
    unitsAvailable: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://swift-stay-be.onrender.com'}/api/owner-applications/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone || undefined,
          propertyName: form.propertyName,
          city: form.city,
          region: form.region,
          propertyType: form.propertyType || undefined,
          unitsAvailable: form.unitsAvailable ? Number(form.unitsAvailable) : undefined,
          message: form.message || undefined
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: 'success', text: 'Application submitted. Our team will contact you shortly.' });
        setForm({ fullName: '', email: '', phone: '', propertyName: '', city: '', region: '', propertyType: '', unitsAvailable: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.message || 'Failed to submit application' });
      }
    } catch (err: any) {
      setStatus({ type: 'error', text: err.message || 'Network error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="partner" style={{ padding: '80px 20px', background: '#0f172a' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', color: '#e5e7eb' }}>
        <h2 style={{ fontSize: 36, marginBottom: 8, color: '#f3f4f6' }}>Partner with Swift Stay</h2>
        <p style={{ opacity: 0.85, marginBottom: 32, color: '#cbd5e1' }}>List your hostel, hotel, or apartment and reach quality guests.</p>

        {status && (
          <div style={{
            padding: '12px 16px',
            borderRadius: 8,
            marginBottom: 16,
            background: status.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
            color: status.type === 'success' ? '#22c55e' : '#ef4444',
            border: `1px solid ${status.type === 'success' ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.35)'}`
          }}>
            {status.text}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
            <input name="fullName" placeholder="Full name" value={form.fullName} onChange={handleChange} required style={inputStyle} />
            <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required style={inputStyle} />
            <input name="propertyName" placeholder="Property name" value={form.propertyName} onChange={handleChange} required style={inputStyle} />
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} required style={inputStyle} />
            <input name="region" placeholder="Region/State" value={form.region} onChange={handleChange} required style={inputStyle} />
            <input name="propertyType" placeholder="Property type (hostel, hotel...)" value={form.propertyType} onChange={handleChange} style={inputStyle} />
            <input name="unitsAvailable" placeholder="Units available" value={form.unitsAvailable} onChange={handleChange} style={inputStyle} />
          </div>
          <textarea name="message" placeholder="Tell us about your property (optional)" value={form.message} onChange={handleChange} rows={4} style={textareaStyle} />
          <button type="submit" disabled={submitting || !form.phone} style={{ ...buttonStyle, opacity: (submitting || !form.phone) ? 0.7 : 1 }}>
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid #334155',
  background: '#0b1220',
  color: '#e5e7eb'
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: 'vertical'
};

const buttonStyle: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 8,
  background: '#e11d48',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600,
  width: 220
};

export default PartnerOnboarding;


