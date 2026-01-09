export const ContactPage = () => {
  return (
    <main className="main-content" id="contact">
      <section className="page-header">
        <h1>Contact Babyshop</h1>
        <p className="section-subtitle">
          Have a question about a product or order? Send us a note.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-card">
          <h2>Send a message</h2>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('This is a demo. In a real shop, this would send your message.');
            }}
          >
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} required />
            </label>
            <button className="primary-btn" type="submit">
              Send message
            </button>
          </form>
        </div>
        <div className="contact-card contact-info">
          <h2>Shop details</h2>
          <p>
            This is a demo Babyshop. In a real store, you would see opening
            hours, a phone number, and a physical address here.
          </p>
          <ul>
            <li>Email: hello@babyshop.demo</li>
            <li>Opening hours: Mon–Fri, 9am–5pm</li>
          </ul>
        </div>
      </section>
    </main>
  );
};



