import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
  companyName: string;
  website: string;
  email: string;
  pitch: string;
};

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Startup Pitch: ${data.companyName}`);

    const body = encodeURIComponent(
      `Company Name: ${data.companyName}

Website / Deck: ${data.website}

Founder Email: ${data.email}

Story & Vision:
${data.pitch}`
    );

    const mailtoLink = `mailto:dagamadhav1@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast.success('Opening your email client...');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Send Your Pitch</h2>
          <p className="text-gray-600">Tell us about your vision and what you're building.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Company Name</label>
              <input
                {...register('companyName', { required: 'Required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                placeholder="Future Unicorn Inc."
              />
              {errors.companyName && <span className="text-xs text-red-500">{errors.companyName.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Website / Deck Link</label>
              <input
                {...register('website', { required: 'Required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                placeholder="https://..."
              />
              {errors.website && <span className="text-xs text-red-500">{errors.website.message}</span>}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Founder Email</label>
            <input
              {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none transition-all"
              placeholder="founder@company.com"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Your Story & Vision</label>
            <textarea
              {...register('pitch', { required: 'Required' })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none transition-all min-h-[160px]"
              placeholder="What makes your approach unique?"
            />
            {errors.pitch && <span className="text-xs text-red-500">{errors.pitch.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg"
          >
            Submit Pitch →
          </button>
        </form>
      </div>
    </section>
  );
}
