import type { Metadata } from "next";

const applicationUrl = "https://tally.so/r/RGavYQ";
const reviewsUrl =
  "https://app.notion.com/p/Read-More-Student-Reviews-39d6e301dd5580ff942df808f6d570fd";

export const metadata: Metadata = {
  title: {
    absolute: "Learn Korean with Jaerim | 1:1 Online Lessons",
  },
  description:
    "Personalized 1:1 online Korean lessons with Jaerim for learners at every level.",
};

const lessonDetails = [
  "1:1 Online Lessons (Google Meet)",
  "50 minutes per lesson",
  "Personalized lessons for all levels",
  "Structured grammar and speaking practice",
];

const trialSteps = [
  "Assess your current Korean level",
  "Talk about your learning goals",
  "Experience a real Korean lesson together",
  "Discuss the best study plan for you",
];

const availability = [
  ["Wednesday", "10:00 AM"],
  ["Wednesday", "3:00 PM"],
  ["Wednesday", "4:00 PM"],
  ["Thursday", "9:00 AM"],
  ["Thursday", "10:00 AM"],
  ["Friday", "10:00 AM"],
  ["Friday", "1:00 PM"],
  ["Friday", "4:00 PM"],
];

const courses = [
  {
    title: "Complete Beginner Course",
    intro:
      "Build a strong foundation in Korean by learning Hangul, essential grammar, vocabulary, and everyday expressions.",
    lead:
      "You'll begin speaking Korean from your very first lessons with practical topics such as:",
    items: [
      "Introducing yourself",
      "Greetings",
      "Expressing likes and dislikes",
      "Ordering food",
      "Shopping",
      "Asking simple questions",
    ],
  },
  {
    title: "Daily Korean Course",
    intro:
      "Once you've learned the basics, we'll move on to Korean for everyday life.",
    lead: "Lessons are based on real-life situations, including:",
    items: [
      "Ordering food at a restaurant",
      "Shopping",
      "Talking about the weather",
      "Making plans with friends",
      "Traveling in Korea",
      "Daily routines and conversations",
    ],
    includes: [
      "Grammar",
      "Vocabulary",
      "Listening",
      "Speaking",
      "Reading",
      "Writing",
      "Homework",
    ],
    outro: [
      "Rather than simply memorizing useful expressions, you'll follow a systematic grammar curriculum and learn how to naturally apply grammar and vocabulary in real conversations.",
      "Our goal isn't just to understand Korean—it's to use Korean confidently and naturally.",
    ],
  },
  {
    title: "Speaking Course (Intermediate & Advanced)",
    intro:
      "Designed for learners who already know the basics and want to become more fluent.",
    lead: "Lessons focus on:",
    items: [
      "Real-life conversations",
      "Personalized corrections and feedback",
      "Natural expressions",
      "Expanding vocabulary",
      "Improving fluency and accuracy",
    ],
    outro: [
      "Topics can be tailored to your interests, including food, travel, culture, current events, hobbies, work, emotions, and much more.",
    ],
  },
];

const faqs = [
  {
    question: "Do I need a textbook?",
    answer: (
      <>
        <p>Not necessarily.</p>
        <p>
          Lessons use a combination of textbooks, custom-made PDFs, videos, and
          authentic Korean materials depending on your level and goals.
        </p>
      </>
    ),
  },
  {
    question: "Can complete beginners join?",
    answer: (
      <>
        <p>Absolutely!</p>
        <p>Many of my students started with no Korean experience.</p>
      </>
    ),
  },
  {
    question: "Can I change my lesson time every week?",
    answer: (
      <>
        <p>No.</p>
        <p>Regular lessons are held at the same time every week.</p>
      </>
    ),
  },
  {
    question: "What happens after the trial lesson?",
    answer: (
      <p>
        If we&apos;re a good fit and a regular lesson slot is available, you can
        continue with weekly lessons.
      </p>
    ),
  },
  {
    question: "Can I start lessons in the middle of the month?",
    answer: (
      <>
        <p>Yes.</p>
        <p>
          After your trial lesson, any remaining lessons for the current month
          are charged individually. From the following month, you&apos;ll switch to
          a monthly lesson package.
        </p>
      </>
    ),
  },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <span className={`sparkle ${className}`} aria-hidden="true">
      ✦
    </span>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Jaerim, back to top">
            JAERIM <Sparkle />
          </a>
          <a className="button button-small" href={applicationUrl}>
            Apply for lessons <Sparkle />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">1:1 ONLINE KOREAN LESSONS · GOOGLE MEET</p>
            <h1>
              Learn Korean
              <span>with Jaerim</span>
            </h1>
            <p className="hero-welcome">Welcome!</p>
            <p>
              I&apos;m Jaerim, a Korean teacher and the creator of Daily Korean with
              Jaerim on YouTube.
            </p>
            <p>If you&apos;ve been learning Korean through my videos, welcome!</p>
            <p>
              In our lessons, we&apos;ll build on that foundation with personalized
              grammar, vocabulary, and speaking practice to help you communicate
              confidently in Korean.
            </p>
            <div className="hero-actions">
              <a className="button" href={applicationUrl}>
                Apply for lessons <Sparkle />
              </a>
              <span className="hero-note">50 minutes · all levels</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Jaerim visual direction">
            <div className="tape tape-coral" aria-hidden="true" />
            <div className="photo-frame">
              <div className="brand-board-crop">
                <img
                  src="/jaerim-photo.png"
                  alt="Korean tutor studying at a warm desk"
                />
              </div>
              <p className="photo-caption">Hi, I&apos;m Jaerim ♡</p>
            </div>
            <div className="star-charm" aria-hidden="true">
              <span>★</span>
            </div>
            <Sparkle className="hero-sparkle" />
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container split-section">
          <div>
            <p className="section-kicker">안녕하세요</p>
            <h2>About My Lessons</h2>
          </div>
          <div className="prose-large">
            <p>
              Every lesson is personalized based on your level, learning style,
              and goals.
            </p>
            <p>
              Whether you&apos;re learning Korean from the beginning, preparing for
              TOPIK, improving your conversation skills, or simply wanting to
              communicate more naturally, I&apos;ll help you make steady progress
              step by step.
            </p>
            <p>
              Every lesson is carefully prepared to match your learning pace,
              making sure you always know what to study next.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="lesson-information">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="section-kicker">THE ESSENTIALS</p>
            <h2>Lesson Information</h2>
          </div>
          <div className="lesson-info-grid">
            {lessonDetails.map((detail, index) => (
              <article className="info-card" key={detail}>
                <span className="card-number">0{index + 1}</span>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">CHOOSE YOUR RHYTHM</p>
            <h2>Lesson Packages</h2>
          </div>

          <div className="packages-grid">
            <article className="price-card trial-card">
              <div className="price-card-top">
                <div>
                  <p className="mini-label">FIRST LESSON</p>
                  <h3>Trial Lesson</h3>
                </div>
                <div className="price-lockup">
                  <strong>$50</strong>
                  <span>USD · 50 minutes</span>
                </div>
              </div>
              <div className="trial-highlight">
                Your trial lesson is FREE when you continue with a monthly
                lesson package. The $50 trial lesson fee will be deducted from
                your first monthly payment.
              </div>
              <h4>What happens during the trial lesson?</h4>
              <p>Your trial lesson is a real lesson—not just an introduction.</p>
              <p>During the lesson, we will:</p>
              <CheckList items={trialSteps} />
              <p>
                This helps both of us decide whether we&apos;re a good fit before
                starting regular weekly lessons.
              </p>
              <a className="button full-width-button" href={applicationUrl}>
                Apply for a trial lesson <Sparkle />
              </a>
            </article>

            <div className="monthly-packages">
              <article className="price-card monthly-card">
                <div>
                  <p className="mini-label">ONCE A WEEK</p>
                  <h3>4 Lessons / Month</h3>
                  <p>Once a week (50 minutes per lesson)</p>
                </div>
                <div className="price-lockup">
                  <strong>$200</strong>
                  <span>USD</span>
                </div>
              </article>

              <article className="price-card monthly-card featured-monthly">
                <div>
                  <p className="mini-label">TWICE A WEEK · SAVE 5%</p>
                  <h3>8 Lessons / Month (Save 5%)</h3>
                  <p>Twice a week (50 minutes per lesson)</p>
                </div>
                <div className="price-lockup">
                  <span className="old-price">$400</span>
                  <strong>$380</strong>
                  <span>USD</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="container reviews-grid">
          <div>
            <p className="section-kicker">TRUSTED BY KOREAN LEARNERS</p>
            <h2>Student Reviews</h2>
            <div className="review-stats" aria-label="Student review statistics">
              <div>
                <strong>5.0</strong>
                <span>Rating</span>
              </div>
              <div>
                <strong>41</strong>
                <span>Public Reviews</span>
              </div>
              <div>
                <strong>1,686</strong>
                <span>Lessons Taught</span>
              </div>
            </div>
          </div>

          <figure className="testimonial-card">
            <div className="tape tape-blue" aria-hidden="true" />
            <div className="rating" aria-label="5 out of 5 stars">
              ★ ★ ★ ★ ★
            </div>
            <h3>What My Students Say</h3>
            <blockquote>
              “Jaerim has been the best teacher I&apos;ve ever had. She is
              incredibly patient, well prepared, and every lesson is
              personalized. I would definitely recommend her.”
            </blockquote>
            <figcaption>— Joe</figcaption>
            <a className="text-link" href={reviewsUrl}>
              Read More Student Reviews <span aria-hidden="true">↗</span>
            </a>
          </figure>
        </div>
      </section>

      <section className="section curriculum-section" id="curriculum">
        <div className="container">
          <div className="section-heading centered-heading narrow-heading">
            <p className="section-kicker">A CLEAR PATH FOR EVERY LEVEL</p>
            <h2>Lesson Style</h2>
            <p className="curriculum-label">Curriculum</p>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <h3>{course.title}</h3>
                <p>{course.intro}</p>
                <p>{course.lead}</p>
                <CheckList items={course.items} />
                {course.includes && (
                  <>
                    <p>Each lesson includes:</p>
                    <div className="pill-list">
                      {course.includes.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </>
                )}
                {course.outro?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>

          <article className="materials-card">
            <div>
              <p className="mini-label">INCLUDED IN YOUR LESSONS</p>
              <h3>Learning Materials</h3>
              <p>Lessons include a combination of:</p>
            </div>
            <CheckList
              items={[
                "Carefully selected textbooks",
                "Custom-made PDFs",
                "Authentic Korean materials",
                "Speaking activities",
                "Homework and review materials after each lesson",
              ]}
            />
            <p>
              All materials are carefully chosen based on your level and
              learning goals.
            </p>
          </article>
        </div>
      </section>

      <section className="section availability-section" id="availability">
        <div className="container availability-grid">
          <div className="availability-intro">
            <p className="section-kicker">AUGUST 2026</p>
            <h2>Current Availability</h2>
            <h3>August 2026</h3>
            <p>The following weekly lesson times are currently available.</p>
            <div className="availability-note">
              <p>(Last updated: July 14, 2026)</p>
              <strong>Can&apos;t find a suitable time?</strong>
              <p>Please check this page again next month for updated availability.</p>
            </div>
          </div>

          <div className="schedule-card">
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time (KST)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {availability.map(([day, time]) => (
                  <tr key={`${day}-${time}`}>
                    <td>{day}</td>
                    <td>{time}</td>
                    <td>
                      <span className="status-dot" aria-hidden="true" /> Available
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section apply-section" id="apply">
        <div className="container apply-card">
          <div>
            <p className="section-kicker">YOUR NEXT STEP</p>
            <h2>Apply for Lessons</h2>
            <p>Ready to start your Korean learning journey?</p>
            <p>I&apos;d love to help you achieve your goals.</p>
          </div>
          <a className="button button-large" href={applicationUrl}>
            Apply Here <Sparkle />
          </a>
        </div>
      </section>

      <section className="section policy-section" id="payment">
        <div className="container policy-grid">
          <div>
            <p className="section-kicker">GOOD TO KNOW</p>
            <h2>Payment</h2>
          </div>
          <article className="policy-card">
            <h3>Payment &amp; Lesson Policy</h3>
            <ul>
              <li>Trial lessons are paid before the lesson.</li>
              <li>
                If you choose to continue after the trial lesson, any remaining
                lessons in the current month are charged individually ($50 USD
                per lesson).
              </li>
              <li>
                Starting from the following month, you can choose a monthly
                lesson package.
              </li>
              <li>
                Monthly lesson packages are paid in advance by the 20th of the
                previous month.
                <span className="example-line">
                  Example: September lessons are paid by August 20.
                </span>
              </li>
            </ul>
            <div className="payment-method">
              <h4>Payment Method</h4>
              <p>
                Payments are made securely through PayPal. (*A PayPal account is
                not required.)
              </p>
              <p>You can pay using: • PayPal balance • Credit card • Debit card</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div>
            <p className="section-kicker">EVERYTHING YOU NEED TO KNOW</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="wordmark footer-wordmark" href="#top">
              JAERIM <Sparkle />
            </a>
            <p>Thank you so much for your interest in learning Korean with me!</p>
            <p>I look forward to meeting you soon.</p>
          </div>
          <a className="button" href={applicationUrl}>
            Apply for lessons <Sparkle />
          </a>
        </div>
      </footer>
    </main>
  );
}
