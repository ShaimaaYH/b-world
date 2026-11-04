import { useState } from "react";

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) return;
   
    setSent(true);
    setName("");
    setEmail("");
  }

  const input =
    "w-full bg-transparent border-b border-stone-300 dark:border-neutraسl-700 py-2 text-xs outline-none focus:border-brand";

  return (
    <section id="newsletter" className="px-5 md:px-10 py-10 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-bold mb-3">Did you know us?</h2>
        <p className="text-xs leading-relaxed text-stone-600 dark:text-neutral-400 mb-5">
          We are about books and our purpose is to show you the book who can change your life or
          distract you from the real world in a better one. B-World works with the most popular
          publisits just for your delight. If you are about books, you must to subscribe to our newsletter.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input className={input} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className={input} type="email" placeholder="Your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="w-full bg-brand text-white text-xs py-2 rounded-sm hover:opacity-90">Subscribe</button>
        </form>
        {sent && <p className="text-xs text-brand mt-2">Thanks for subscribing!</p>}
      </div>

      <iframe
        title="map"
        className="w-full h-64 md:h-full min-h-[240px] rounded-sm border-0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.49%2C-0.05%2C51.53&layer=mapnik"
      />
    </section>
  );
}

export default Newsletter;
