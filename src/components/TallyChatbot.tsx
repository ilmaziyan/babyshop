import { useMemo, useState } from 'react';

type Message = {
  from: 'user' | 'tally';
  text: string;
};

const FAQ: { question: string; answer: string; keywords: string[] }[] = [
  {
    question: 'What ages are your products for?',
    answer:
      'Most Babyshop items are designed for newborns up to 24 months. Some toys and accessories can be enjoyed a bit longer with supervision.',
    keywords: ['age', 'ages', 'months', 'size', 'sizing']
  },
  {
    question: 'Are your products safe for newborns?',
    answer:
      'Yes. We focus on gentle, baby-safe materials and avoid harsh dyes and fragrances. Always follow the safety label for each item.',
    keywords: ['safe', 'safety', 'newborn', 'toxic', 'chemicals']
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 3–5 business days. Express options may be available at checkout depending on your location.',
    keywords: ['shipping', 'delivery', 'arrive', 'days']
  },
  {
    question: 'What is your return policy?',
    answer:
      'Unused items in original packaging can usually be returned within 30 days of delivery. Personalized items may be final sale.',
    keywords: ['return', 'refund', 'exchange']
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'This demo shop does not process real orders, but a real Babyshop could ship to multiple countries based on its logistics partners.',
    keywords: ['international', 'country', 'countries', 'abroad', 'overseas']
  }
];

function answerWithFaq(userInput: string): string {
  const text = userInput.toLowerCase();
  const match = FAQ.find((item) =>
    item.keywords.some((kw) => text.includes(kw.toLowerCase()))
  );

  if (match) {
    return match.answer;
  }

  return (
    "I'm Tally, your Babyshop helper. I can answer common questions about ages, safety, shipping, and returns. " +
    "For anything more specific, please contact the shop owner directly."
  );
}

export const TallyChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      from: 'tally',
      text: 'Hi, I am Tally 🤍 Your Babyshop assistant. Ask me about product safety, ages, shipping, or returns.'
    }
  ]);

  const suggestedQuestions = useMemo(
    () => [
      'Are your products safe for newborns?',
      'How long does shipping take?',
      'What ages are your products for?',
      'What is your return policy?'
    ],
    []
  );

  const sendMessage = (text?: string) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;

    const userMessage: Message = { from: 'user', text: trimmed };
    const tallyReply: Message = {
      from: 'tally',
      text: answerWithFaq(trimmed)
    };

    setMessages((prev) => [...prev, userMessage, tallyReply]);
    setInput('');
  };

  return (
    <>
      <button
        className="tally-launcher"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="tally-avatar">🤍</span>
        <span className="tally-label">Chat with Tally</span>
      </button>

      {isOpen && (
        <section className="tally-window" aria-label="Tally chat window">
          <header className="tally-header">
            <div className="tally-header-left">
              <span className="tally-avatar large">🤍</span>
              <div>
                <h2>Tally</h2>
                <p>Babyshop assistant bot</p>
              </div>
            </div>
            <button
              className="icon-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className="tally-body">
            <div className="tally-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`tally-message ${
                    msg.from === 'user' ? 'from-user' : 'from-tally'
                  }`}
                >
                  <div className="bubble">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="tally-suggestions">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  className="chip-btn"
                  type="button"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            className="tally-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Ask Tally a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="primary-btn">
              Send
            </button>
          </form>
        </section>
      )}
    </>
  );
};



