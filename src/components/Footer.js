const Footer = () => {
  return (
    <footer className="bg-black text-neutral-500 py-8 px-4 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-sm flex justify-between items-center">
        <span>© {new Date().getFullYear()} Ben Hackett-Delaney</span>
        <span className="text-neutral-600">
          Built with React & Tailwind
        </span>
      </div>
    </footer>
  );
};

export default Footer;
