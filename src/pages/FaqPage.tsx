export const FaqPage = () => {
  return (
    <main className="main-content" id="faq">
      <section className="page-header">
        <h1>Babyshop FAQ</h1>
        <p className="section-subtitle">
          Quick answers to common questions about our baby essentials.
        </p>
      </section>

      <section className="faq-list">
        <article className="faq-item">
          <h3>What ages are your products for?</h3>
          <p>
            Most items are designed for newborns up to 24 months, with some toys
            and accessories suitable a bit longer with supervision.
          </p>
        </article>
        <article className="faq-item">
          <h3>Are your products safe for newborns?</h3>
          <p>
            We focus on gentle, baby-safe materials and avoid harsh dyes and
            fragrances. Always follow the safety label for each item.
          </p>
        </article>
        <article className="faq-item">
          <h3>How long does shipping take?</h3>
          <p>
            In a real shop, standard shipping would typically take 3–5 business
            days, with express options depending on your location.
          </p>
        </article>
        <article className="faq-item">
          <h3>What is your return policy?</h3>
          <p>
            Returns are usually accepted within 30 days for unused items in
            original packaging. Personalized items may be final sale.
          </p>
        </article>
      </section>
    </main>
  );
};



