export async function loadGoogleGsi() {
  if (typeof window === "undefined") return;
  if ((window as any).google && (window as any).google.accounts) return (window as any).google;

  await new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load Google Identity Services"));
    document.head.appendChild(s);
  });

  return (window as any).google;
}

export async function signInWithGoogle(clientId: string) {
  if (!clientId) throw new Error("Missing Google client id. Set VITE_GOOGLE_CLIENT_ID.");
  const google = await loadGoogleGsi();

  if (!google?.accounts?.oauth2) {
    throw new Error("Google OAuth2 library not available");
  }

  return new Promise<Record<string, any>>((resolve, reject) => {
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
      callback: async (resp: any) => {
        if (resp.error) return reject(new Error(resp.error));
        try {
          const r = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${resp.access_token}` },
          });
          const user = await r.json();
          resolve(user);
        } catch (e) {
          reject(e);
        }
      },
    });

    try {
      tokenClient.requestAccessToken({ prompt: "consent" });
    } catch (e) {
      reject(e);
    }
  });
}
