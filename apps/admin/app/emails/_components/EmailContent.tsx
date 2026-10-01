import "server-only";

import DOMPurify from "isomorphic-dompurify";

const SANITIZE_OPTIONS = {
  ALLOW_DATA_ATTR: false,
  FORBID_ATTR: ["style", "src", "srcset"],
  FORBID_TAGS: [
    "button",
    "embed",
    "form",
    "iframe",
    "img",
    "input",
    "link",
    "math",
    "meta",
    "object",
    "script",
    "style",
    "svg",
  ],
};

export default function EmailContent({ content }: { content: string }) {
  if (!content) {
    return (
      <p className="text-sm text-muted-foreground">
        This message does not contain a displayable body.
      </p>
    );
  }

  if (!/<[a-z][\s\S]*>/i.test(content)) {
    return (
      <div className="whitespace-pre-wrap text-sm leading-7">{content}</div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(content, SANITIZE_OPTIONS);

  return (
    <div
      className="overflow-x-auto text-sm leading-7 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_table]:w-full [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_ul]:list-disc [&_ul]:pl-6"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
