export default function About() {
  return (
    <main>
      <h2>HI!</h2>
      <p>I'm Susie. Here you can read all about me!</p>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>My hobbies</h1>
        </header>
        <main>
          <section>
            <h2>My job </h2>
            <p>This is the first section of your content.</p>
          </section>
          <section>
            <h2>My family</h2>
            <p>This is the second section of your content.</p>
          </section>
        </main>
        <footer>
          <p>&copy; SEH</p>
        </footer>
      </div>
    </main>
  );
}
