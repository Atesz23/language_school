"use client";

import React, { useState, useEffect } from 'react';

interface ProtectedEmailProps {
  user: string;
  domain: string;
  className?: string;
  subject?: string;
  body?: string;
  children?: React.ReactNode;
}

const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  user,
  domain,
  className = '',
  subject = '',
  body = '',
  children
}) => {
  const [email, setEmail] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Decode email on client side to prevent scraping
    const decodedEmail = atob(user) + '@' + atob(domain);
    setEmail(decodedEmail);
  }, [user, domain]);

  if (!mounted) {
    // Show placeholder during SSR
    return <span className={className}>{children || 'Loading...'}</span>;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mailtoParams = new URLSearchParams();
    if (subject) mailtoParams.append('subject', subject);
    if (body) mailtoParams.append('body', body);

    const mailtoUrl = `mailto:${email}${mailtoParams.toString() ? '?' + mailtoParams.toString() : ''}`;
    window.location.href = mailtoUrl;
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
      aria-label="Send email"
    >
      {children || email}
    </a>
  );
};

// Helper function to encode email parts
export const encodeEmailPart = (part: string): string => {
  return btoa(part);
};

// Simple obfuscated email display component (no mailto link)
interface ObfuscatedEmailDisplayProps {
  user: string;
  domain: string;
  className?: string;
}

export const ObfuscatedEmailDisplay: React.FC<ObfuscatedEmailDisplayProps> = ({
  user,
  domain,
  className = ''
}) => {
  const [email, setEmail] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const decodedEmail = atob(user) + '@' + atob(domain);
    setEmail(decodedEmail);
  }, [user, domain]);

  if (!mounted) {
    return <span className={className}>...</span>;
  }

  return <span className={className}>{email}</span>;
};

export default ProtectedEmail;
