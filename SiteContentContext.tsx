import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultContent,
  getByPath,
  loadContent,
  saveContent,
  setByPath,
  type SiteContent,
} from "../content/siteContent";

interface SiteContentContextValue {
  content: SiteContent;
  update: (path: string, value: unknown) => void;
  addItem: (path: string, template: unknown) => void;
  removeItem: (path: string, index: number) => void;
  reset: () => void;
  importContent: (raw: string) => boolean;
  isPanelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
}

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(loadContent);
  const [isPanelOpen, setPanelOpen] = useState(false);

  /* Auto-persist every change */
  useEffect(() => {
    saveContent(content);
  }, [content]);

  /* Lock body scroll while the panel is open */
  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPanelOpen]);

  const update = (path: string, value: unknown) =>
    setContent((prev) => setByPath(prev, path, value));

  const addItem = (path: string, template: unknown) =>
    setContent((prev) => {
      const arr = getByPath(prev, path);
      return setByPath(
        prev,
        path,
        Array.isArray(arr) ? [...arr, template] : [template]
      );
    });

  const removeItem = (path: string, index: number) =>
    setContent((prev) => {
      const arr = getByPath(prev, path);
      if (!Array.isArray(arr)) return prev;
      return setByPath(
        prev,
        path,
        arr.filter((_, i) => i !== index)
      );
    });

  const reset = () => setContent(defaultContent);

  const importContent = (raw: string) => {
    try {
      setContent({ ...defaultContent, ...(JSON.parse(raw) as SiteContent) });
      return true;
    } catch {
      return false;
    }
  };

  return (
    <SiteContentContext.Provider
      value={{
        content,
        update,
        addItem,
        removeItem,
        reset,
        importContent,
        isPanelOpen,
        openPanel: () => setPanelOpen(true),
        closePanel: () => setPanelOpen(false),
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error("useSiteContent must be used within SiteContentProvider");
  }
  return ctx;
}
