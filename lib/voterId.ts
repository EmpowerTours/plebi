const KEY = "plebi_voter_id";

export function getVoterId(): string {
  if (typeof window === "undefined") return "";
  let id = window.localStorage.getItem(KEY);
  if (!id) {
    id =
      (globalThis.crypto && "randomUUID" in globalThis.crypto
        ? globalThis.crypto.randomUUID()
        : `v${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`);
    window.localStorage.setItem(KEY, id);
  }
  return id;
}
