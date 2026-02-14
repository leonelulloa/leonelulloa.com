export function fillVariables(
  template: string,
  snapshot: Record<string, string>,
): string {
  return template.replace(
    /\{\{(\w+)\}\}/g,
    (_, key) => snapshot[key] || `{{${key}}}`,
  );
}
