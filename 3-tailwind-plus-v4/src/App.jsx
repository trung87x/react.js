import { useState } from "react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  GearIcon,
  BellIcon,
  EnvelopeSimpleIcon,
  ArrowUpRightIcon,
  MusicNotesIcon,
  XIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { ButtonCircle } from "@/components/ui/ButtonCircle";
import { QuoteCircle } from "@/components/ui/QuoteCircle";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

function App() {
  return (
    <>
      <Text
        as="a"
        href="/projects"
        mode="body-reg-500"
        className="hover:text-main-500 cursor-pointer transition-colors"
      >
        Projects
      </Text>
    </>
  );
}

export default App;
