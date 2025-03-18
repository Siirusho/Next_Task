"use client";

import { Header, StyledLayout } from "@/src/components/Header/Header.component";
import SessionProvider from "@/src/components/SessionProvider";
import { useServerInsertedHTML } from "next/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const cache = createCache({ key: "css", prepend: true });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <SessionProvider>
        <Header />
        <StyledLayout>
          <main>{children}</main>
        </StyledLayout>
      </SessionProvider>
    </CacheProvider>
  );
};
