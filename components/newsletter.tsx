'use client'

import React, { useState, FormEvent } from 'react';
import Button from "@/components/ui/button";

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function submitToWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(false);
    setErrorMessage('');
    const formData = new FormData(event.currentTarget);  // use currentTarget for the actual form element

    const waitlist = 'cluit2oug00022oykyurko6b6';
    const rawFormData = {
      email: formData.get('email'),
    };

    try {
      const res = await fetch('https://www.waitlist.email/api/subscribers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Waitlist-Api-Key': 'cluit2oug00032oykpipj92lh',
        },
        body: JSON.stringify({ waitlist, ...rawFormData }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('An error occurred while subscribing to the waitlist.');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        setErrorMessage(err.message);
      } else {
        console.log('An unexpected error occurred');
        setErrorMessage('An unexpected error occurred');
      }
    }
  }

  return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-9">
          <div className="pb-12 md:pb-20">
            <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
              <div className="relative flex flex-col lg:flex-row justify-between items-center">
                <div className="text-center lg:text-left">
                  <h3 className="h3 text-white mb-2">Interessiert einen CSC zu gründen?</h3>
                  <p className="text-gray-300 text-lg mb-6">Trage dich in unsere Warteliste ein und du erhältst regelmäßig Informationen zu Cannabase! Verpasse nicht diese einmalige Chance und melde dich noch heute an.</p>
                  <form id="waitlist-form" onSubmit={submitToWaitlist}>
                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <input type="email" name="email"
                             className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                             placeholder="Deine E-Mail..." aria-label="Deine E-Mail..."/>
                      <Button text="Eintragen"></Button>
                    </div>
                    {isSubmitted && <p className="text-sm text-green-400 mt-3">Vielen Dank für Deine Anmeldung!</p>}
                    {errorMessage && <p className="text-sm text-red-400 mt-3">{errorMessage}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
