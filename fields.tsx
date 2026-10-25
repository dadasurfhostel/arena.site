import type { ReactNode } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { useSiteContent } from "../../context/SiteContentContext";
import { getByPath, IMAGES } from "../../content/siteContent";

const inputCls =
  "w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 outline-none transition-all placeholder:text-ink-400 focus:border-clay-500 focus:ring-4 focus:ring-clay-500/20";

/* ---------------------------- Wrappers ----------------------------- */

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.15em] text-ink-500">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-xs text-ink-400">{hint}</span>}
    </label>
  );
}

export function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-sand-300 bg-white p-5 md:p-6">
      <h4 className="mb-5 font-display text-lg font-medium text-ink-800">
        {title}
      </h4>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Group({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove?: () => void;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-sand-300 bg-white p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h4 className="font-display text-lg font-medium text-ink-800">
          {title}
        </h4>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${title}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay-500/10 text-clay-600 transition hover:bg-clay-500 hover:text-sand-50"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function AddButton({
  path,
  template,
  label,
}: {
  path: string;
  template: unknown;
  label: string;
}) {
  const { addItem } = useSiteContent();
  return (
    <button
      type="button"
      onClick={() => addItem(path, template)}
      className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-clay-400/60 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.15em] text-clay-600 transition hover:border-clay-500 hover:bg-clay-500/10"
    >
      <Plus className="h-4 w-4" />
      {label}
    </button>
  );
}

/* ----------------------------- Inputs ------------------------------ */

export function TextInput({
  path,
  label,
  placeholder,
}: {
  path: string;
  label: string;
  placeholder?: string;
}) {
  const { content, update } = useSiteContent();
  const value = String(getByPath(content, path) ?? "");
  return (
    <Field label={label}>
      <input
        className={inputCls}
        value={value}
        placeholder={placeholder}
        onChange={(e) => update(path, e.target.value)}
      />
    </Field>
  );
}

export function TextArea({
  path,
  label,
  rows = 3,
}: {
  path: string;
  label: string;
  rows?: number;
}) {
  const { content, update } = useSiteContent();
  const value = String(getByPath(content, path) ?? "");
  return (
    <Field label={label}>
      <textarea
        className={`${inputCls} resize-y leading-relaxed`}
        rows={rows}
        value={value}
        onChange={(e) => update(path, e.target.value)}
      />
    </Field>
  );
}

export function NumberInput({
  path,
  label,
}: {
  path: string;
  label: string;
}) {
  const { content, update } = useSiteContent();
  const raw = Number(getByPath(content, path) ?? 0);
  const value = Number.isFinite(raw) ? raw : 0;
  return (
    <Field label={label}>
      <input
        type="number"
        min={0}
        className={inputCls}
        value={value}
        onChange={(e) =>
          update(path, e.target.value === "" ? 0 : Number(e.target.value))
        }
      />
    </Field>
  );
}

export function ImageSelect({
  path,
  label,
}: {
  path: string;
  label: string;
}) {
  const { content, update } = useSiteContent();
  const value = String(getByPath(content, path) ?? "");
  return (
    <Field label={label}>
      <div className="flex items-center gap-3">
        <img
          src={value}
          alt=""
          className="h-11 w-16 shrink-0 rounded-lg border border-sand-300 object-cover"
        />
        <select
          className={inputCls}
          value={value}
          onChange={(e) => update(path, e.target.value)}
        >
          {IMAGES.map((img) => (
            <option key={img.value} value={img.value}>
              {img.label}
            </option>
          ))}
        </select>
      </div>
    </Field>
  );
}

/* --------------------------- List editor --------------------------- */

export function StringList({
  path,
  label,
  addLabel = "Add item",
}: {
  path: string;
  label: string;
  addLabel?: string;
}) {
  const { content, update, addItem, removeItem } = useSiteContent();
  const items = (getByPath(content, path) as string[] | undefined) ?? [];
  return (
    <Field label={label}>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-clay-500/10 font-display text-sm italic text-clay-600">
              {i + 1}
            </span>
            <input
              className={inputCls}
              value={item}
              onChange={(e) => update(`${path}.${i}`, e.target.value)}
            />
            <button
              type="button"
              aria-label={`Remove item ${i + 1}`}
              onClick={() => removeItem(path, i)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-400 transition hover:bg-clay-500/10 hover:text-clay-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addItem(path, "New item")}
          className="inline-flex items-center gap-2 rounded-full bg-clay-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-clay-600 transition hover:bg-clay-500 hover:text-sand-50"
        >
          <Plus className="h-3.5 w-3.5" />
          {addLabel}
        </button>
      </div>
    </Field>
  );
}
