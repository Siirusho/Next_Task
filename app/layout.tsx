import SessionProvider from "@/src/components/SessionProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <SessionProvider>
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              background: "#f5eee6",
              paddingBottom: "47px",
            }}
          >
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
