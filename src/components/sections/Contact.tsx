"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { content } from "@/data/portfolio";
import { panel, primaryButton, secondaryButton } from "@/lib/styles";
import { buildMailto, cn, hasText, validateContact, whatsappHref, type ContactField, type ContactValues } from "@/lib/utils";

const initialValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const contact = content.contact;
  const profile = content.profile;
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [status, setStatus] = useState("");
  const whatsapp = whatsappHref(profile.phone);

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values, contact.errors);
    setErrors(nextErrors);
    setStatus("");

    const firstInvalid = (Object.keys(nextErrors) as ContactField[])[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (!hasText(profile.email)) {
      setStatus(contact.missingEmail);
      return;
    }

    window.location.href = buildMailto(profile.email, values);
    setStatus(contact.opened);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionTitle
            index={contact.index}
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
          <ul className="mt-8 space-y-3">
            {hasText(profile.email) ? (
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm font-medium text-text">
                  <Icon name="mail" className="h-5 w-5 text-violet" />
                  <span>
                    <span className="block text-xs text-muted">{contact.emailLabel}</span>
                    {profile.email}
                  </span>
                </a>
              </li>
            ) : null}
            {hasText(profile.phone) ? (
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm font-medium text-text">
                  <Icon name="phone" className="h-5 w-5 text-violet" />
                  <span>
                    <span className="block text-xs text-muted">{contact.phoneLabel}</span>
                    {profile.phone}
                  </span>
                </a>
              </li>
            ) : null}
            <li className="flex items-center gap-3 text-sm font-medium text-text">
              <Icon name="map" className="h-5 w-5 text-violet" />
              <span>
                <span className="block text-xs text-muted">{contact.locationLabel}</span>
                {profile.location}
              </span>
            </li>
          </ul>
          {hasText(whatsapp) ? (
            <a href={whatsapp} target="_blank" rel="noreferrer noopener" className={cn(secondaryButton, "mt-6")}>
              <Icon name="message" className="h-4 w-4" />
              {contact.whatsapp}
              <span className="sr-only"> ({content.a11y.newTab})</span>
            </a>
          ) : null}
          <SocialLinks links={profile.socials} className="mt-6 flex flex-wrap gap-2" />
        </div>

        <form onSubmit={onSubmit} noValidate className={cn(panel, "p-6 md:p-8")}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              id="name"
              label={contact.nameLabel}
              value={values.name}
              error={errors.name}
              autoComplete="name"
              onChange={(value) => update("name", value)}
            />
            <Field
              id="email"
              type="email"
              label={contact.emailFieldLabel}
              value={values.email}
              error={errors.email}
              autoComplete="email"
              onChange={(value) => update("email", value)}
            />
          </div>
          <div className="mt-4">
            <Field
              id="subject"
              label={contact.subjectLabel}
              value={values.subject}
              error={errors.subject}
              autoComplete="off"
              onChange={(value) => update("subject", value)}
            />
          </div>
          <div className="mt-4">
            <Field
              id="message"
              label={contact.messageLabel}
              value={values.message}
              error={errors.message}
              multiline
              onChange={(value) => update("message", value)}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{contact.notice}</p>
          {status ? (
            <p role="status" className="mt-4 text-sm font-medium text-text">
              {status}
            </p>
          ) : null}
          <button type="submit" className={cn(primaryButton, "mt-6")}>
            {contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  multiline = false,
}: {
  id: ContactField;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
}) {
  const errorId = `${id}-error`;
  const className = cn(
    "w-full rounded-2xl border bg-bg px-4 py-3 text-sm text-text outline-none",
    error ? "border-red-600" : "border-line",
  );
  const describedBy = error ? errorId : undefined;

  return (
    <label className="block text-sm font-medium text-text" htmlFor={id}>
      {label}
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          rows={6}
          required
          aria-required="true"
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          className={cn(className, "mt-2 resize-y")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          required
          autoComplete={autoComplete}
          aria-required="true"
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          className={cn(className, "mt-2")}
        />
      )}
      {error ? (
        <span id={errorId} role="alert" className="mt-2 block text-sm font-medium text-red-700 dark:text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}
