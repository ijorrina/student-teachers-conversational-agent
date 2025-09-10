export function sanitizeForRender(s: string) {
  return s.replace(/[<>]/g, c => ({'<':'&lt;','>':'&gt;'}[c] as string))
}
