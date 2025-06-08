function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded font-semibold transition";
  const styles = {
    primary: "bg-primary text-white hover:bg-hoverPrimary",
    secondary: "bg-secondary text-black hover:bg-cyan-300",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
