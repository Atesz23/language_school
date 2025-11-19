'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

export default function ClarityScript() {
  useEffect(() => {
    // Inicializálás a Clarity project ID-val
    clarity.init('u83qsqwjqb');
    
    // Opcionális: Custom tag hozzáadása
    // clarity.setTag('environment', 'production');
    
  }, []);

  return null;
}