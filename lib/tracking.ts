export type TrackingEvent =
  | "telephone_click"
  | "email_click"
  | "devis_click"
  | "form_submit";

export type TrackingData = Record<string, string | number | boolean | undefined>;

export function track(_event: TrackingEvent, _data: TrackingData = {}): void {
  // Intentionnellement sans effet avant le choix de la mesure d’audience en phase 6.
}
