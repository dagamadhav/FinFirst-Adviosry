import emailjs from '@emailjs/browser';

export type PitchEmailData = {
  companyName: string;
  website: string;
  email: string;
  pitch: string;
};

function getRequiredEnv(key: 'VITE_EMAILJS_SERVICE_ID' | 'VITE_EMAILJS_TEMPLATE_ID' | 'VITE_EMAILJS_PUBLIC_KEY') {
  const value = (import.meta as any).env?.[key] as string | undefined;
  if (!value) {
    console.error(`[Email] Missing required env variable: ${key}`);
    throw new Error(`Missing ${key}. Add it to your Vite env variables.`);
  }
  return value;
}

export async function sendPitchToAdmin(data: PitchEmailData) {
  const env = (import.meta as any).env || {};

  console.log('[Email] Preparing to send pitch email', {
    hasServiceId: !!env.VITE_EMAILJS_SERVICE_ID,
    hasTemplateId: !!env.VITE_EMAILJS_TEMPLATE_ID,
    hasPublicKey: !!env.VITE_EMAILJS_PUBLIC_KEY,
    previewData: {
      companyName: data.companyName,
      website: data.website,
      email: data.email,
      pitchPreview: data.pitch.slice(0, 120),
    },
  });

  const serviceId = getRequiredEnv('VITE_EMAILJS_SERVICE_ID');
  const templateId = getRequiredEnv('VITE_EMAILJS_TEMPLATE_ID');
  const publicKey = getRequiredEnv('VITE_EMAILJS_PUBLIC_KEY');

  const submittedAt = new Date().toISOString();

  const message = [
    `Company Name: ${data.companyName}`,
    `Website/Deck: ${data.website}`,
    `Founder Email: ${data.email}`,
    `Submitted At: ${submittedAt}`,
    '',
    'Pitch:',
    data.pitch,
  ].join('\n');

  const templateParams = {
    company_name: data.companyName,
    website: data.website,
    founder_email: data.email,
    pitch: data.pitch,
    submitted_at: submittedAt,
    message,
  };

  console.log('[Email] Sending via EmailJS', {
    serviceId,
    templateId,
    hasPublicKey: !!publicKey,
    templateParams,
  });

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, { publicKey });
    console.log('[Email] EmailJS result', result);
    return result;
  } catch (error) {
    console.error('[Email] EmailJS send error', error);
    throw error;
  }
}
