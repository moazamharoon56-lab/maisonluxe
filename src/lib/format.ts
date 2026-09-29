export function formatPkr(amount: number) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}

export function waDigits(raw: string) {
  return raw.replace(/\D/g, "");
}
