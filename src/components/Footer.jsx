import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-primary text-center p-4 text-textLight mt-auto space-y-2">
      <p>&copy; 2025 – Patrick Røthe ✌️</p>
      <div className="flex justify-center gap-4 text-xl">
        <a
          href="https://github.com/PatrickRoethe"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-r%C3%B8the-850048351/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition"
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
