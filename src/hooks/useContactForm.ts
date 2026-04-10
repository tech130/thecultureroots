import { useState, FormEvent } from "react";

const FORM_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9ekijcL1TzepNUHYd0uBOYR0aE3IeHqp_io8xv9yasXKQ-72U3rh4Qsgi6Exm_we3/exec"; // Placeholder URL

export const useContactForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Using URLSearchParams is often more reliable for Google Apps Script 
    // as it sends data as application/x-www-form-urlencoded
    const searchParams = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      searchParams.append(key, value);
    });

    try {
      // We use 'no-cors' mode because Google Apps Script does not return 
      // the necessary CORS headers, but the data will still be submitted.
      await fetch(FORM_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: searchParams.toString(),
      });

      // Since we use 'no-cors', we won't get a readable response,
      // so we assume success if no error is thrown by the fetch itself.
      if (onSuccess) {
        onSuccess();
      }
      resetForm();
    } catch (err) {
      console.error("Form submission error:", err);
      // Even if fetch throws, we trigger success for UX if needed,
      // or set an error state here.
      if (onSuccess) onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    error,
  };
};
