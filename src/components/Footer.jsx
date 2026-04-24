import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j2073v7",
        "template_o8ivxdl",
        form.current,
        "dBynwZg3IcPZRy_DA",
      )
      .then(
        () => {
          alert("Messaggio inviato!");
          form.current.reset();
        },
        (error) => {
          alert("Errore nell'invio");
          console.log(error);
        },
      );
  };

  return (
    <>
      <section id="contact">
        <h2>Contact</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Nome" required />
          <input type="email" name="from_email" placeholder="Email" required />
          <textarea name="message" placeholder="Messaggio" required />

          <button type="submit">Invia</button>
        </form>

        <a
          href="/CV.pdf"
          download
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <h2>Scarica il mio CV</h2>
        </a>
      </section>
      <footer>
        <p>© 2026 - Portfolio</p>
      </footer>
    </>
  );
}

export default Footer;
