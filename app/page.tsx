import Counter from "../components/Counter";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Button Counter</h1>
      <p className="tagline">Add, subtract & have fun!</p>

      <div className="grid">
        <section>
          <h2>Default Counter</h2>
          <Counter />
        </section>

        <section>
          <h2>Custom Counter</h2>
          <Counter initialCount={5} initialStep={2} />
        </section>
      </div>
    </main>
  );
}
