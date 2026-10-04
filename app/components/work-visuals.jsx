// Renders text where **double asterisks** mark the words shown in bold.
export function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold text-[var(--text-primary)]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

// A heading where the middle part is shown in the site's gradient, e.g. ["Paper to ", "one system", "."].
export function GradientHeadline({ parts, className = "" }) {
  const [lead, accent, tail] = parts;
  return (
    <span className={className}>
      {lead}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">{accent}</span>
      {tail}
    </span>
  );
}
