import { StyledLayout } from "@/src/components/Header/Header.component";
import SessionProvider from "@/src/components/SessionProvider";
import dynamic from "next/dynamic";

const Header = dynamic(() =>
  import("@/src/components").then((module) => ({
    default: module.Header,
  }))
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <SessionProvider>
          <Header />
          <StyledLayout>
            <main>{children}</main>
          </StyledLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
