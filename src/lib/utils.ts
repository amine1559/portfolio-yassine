export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function hasText(value: string) {
  return value.trim().length > 0;
}

export function formatPeriod(start: string, end: string) {
  const from = start.trim();
  const to = end.trim();
  if (from && to) return `${from} — ${to}`;
  return from || to;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactField = keyof ContactValues;

export function validateContact(
  values: ContactValues,
  messages: {
    name: string;
    email: string;
    emailInvalid: string;
    subject: string;
    message: string;
    messageLong: string;
  },
) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.trim().length < 2) errors.name = messages.name;
  if (!values.email.trim()) errors.email = messages.email;
  else if (!isValidEmail(values.email)) errors.email = messages.emailInvalid;
  if (values.subject.trim().length < 3) errors.subject = messages.subject;
  if (values.message.trim().length < 10) errors.message = messages.message;
  else if (values.message.trim().length > 800) errors.message = messages.messageLong;

  return errors;
}

export function buildMailto(to: string, values: ContactValues) {
  const body = `Nom : ${values.name.trim()}\nE-mail : ${values.email.trim()}\n\n${values.message.trim()}`;
  return `mailto:${to.trim()}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) return "";
  return `https://wa.me/${digits}`;
}
