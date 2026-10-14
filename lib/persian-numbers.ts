/** Persian numerals for all user-facing counts, dates and identifiers.
 * Keep route IDs, links, tel: destinations and machine-readable values unchanged.
 */
export function toPersianDigits(value: number | string): string {
  return String(value).replace(/[0-9٠-٩]/g, digit => {
    const code=digit.charCodeAt(0);
    return String.fromCharCode((code>=0x660 ? code-0x660 : code-0x30)+0x6f0);
  });
}

/** Fixed-width, zero-padded counters shown in the Persian UI. */
export function toPersianCounter(value: number, width=2): string {
  return toPersianDigits(String(value).padStart(width, '0'));
}
