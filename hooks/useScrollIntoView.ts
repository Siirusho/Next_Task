import { RefObject, useEffect } from "react";
import { ControllerFieldState } from "react-hook-form";

let isScrolled = false;

const useScrollIntoView = (
  fieldRef: RefObject<HTMLInputElement | null>,
  fieldState: ControllerFieldState
) => {
  useEffect(() => {
    if (fieldState.error && !isScrolled) {
      isScrolled = true;
      fieldRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        isScrolled = false;
      }, 1000);
    }
  }, [fieldState.error, fieldRef]);
};

export default useScrollIntoView;
