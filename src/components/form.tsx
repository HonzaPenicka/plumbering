import { FunctionComponent } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSuccess,
}) => {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');

  if (state.succeeded) {
    if (onSuccess) {
      onSuccess();
    }
    return (
      <div className="text-center p-4">
        <p>Thank you for your submission!</p>
        <p>We will contact you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 p-4 gap-4 mb-8 bg-[#D1CFC5] md:bg-white md:border-[#FFCC33] md:border-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-screen-lg lg:items-center"
      aria-labelledby="contact-form-title"
    >
      <div className="col-span-1">
        <label htmlFor="email" className="font-bold text-xl block mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full p-2 md:border-2 md:border-[#FFCC33] outline-offset-2 outline-[#33CC99]"
          required
          aria-required="true"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="col-span-1">
        <label htmlFor="service" className="font-bold text-xl block mb-2">
          Select Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full p-2 md:border-2 md:border-[#FFCC33] outline-offset-2 outline-[#33CC99]"
          defaultValue=""
          required
          aria-required="true"
        >
          <option value="" disabled className="text-gray-500">
            Select an option
          </option>
          <option value="Opening jammed doors and emergency lock unlocking">
            Opening jammed doors and emergency lock unlocking
          </option>
          <option value="Replacement and installation of security locks and inserts">
            Replacement and installation of security locks and inserts
          </option>
          <option value="Replacement and repair of door hinges and knobs">
            Replacement and repair of door hinges and knobs
          </option>
          <option value="Installation and adjustment of door closers">
            Installation and adjustment of door closers
          </option>
          <option value="Bulb replacement and minor electrical installation assistance">
            Bulb replacement and minor electrical installation assistance
          </option>
          <option value="Installation and repair of outlets and switches">
            Installation and repair of outlets and switches
          </option>
          <option value="Installation of lighting fixtures and chandeliers">
            Installation of lighting fixtures and chandeliers
          </option>
          <option value="Minor furniture and hardware repairs">
            Minor furniture and hardware repairs
          </option>
          <option value="Maintenance and adjustment of window sashes and seals">
            Maintenance and adjustment of window sashes and seals
          </option>
          <option value="Installation of home accessories (shelves, holders, hangers)">
            Installation of home accessories (shelves, holders, hangers)
          </option>
        </select>
        <ValidationError
          prefix="Service"
          field="service"
          errors={state.errors}
        />
      </div>

      <div className="col-span-1 sm:col-span-2">
        <label htmlFor="message" className="font-bold text-xl block mb-2">
          Description
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 min-h-[10rem] md:border-2 md:border-[#FFCC33] outline-offset-2 outline-[#33CC99] resize-none"
          placeholder="Describe your problem/situation in as much detail as possible:"
          required
          aria-required="true"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="col-span-1 sm:col-span-2 text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full sm:w-auto px-6 py-3 bg-[#33CC99] focus:scale-125 text-white font-bold rounded transition duration-300"
          aria-label="Send message"
        >
          Send Message
        </button>
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
};
