"use client";
import Profile from "@/app/component/profile";
import Education from "@/app/component/education";
import Skill from "@/app/component/skill";
import Experience from "@/app/component/experience";
import Basic from "@/app/component/basic";
import { IconLanguage } from "@tabler/icons-react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="relative m-auto left-0 right-0 w-[794px] text-[color:#454d64]">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              className="absolute top-2 right-2"
              isIconOnly
              variant="light"
            >
              <IconLanguage />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            onAction={(key) => setUserLocale(key as Locale)}
          >
            <DropdownItem key="zh">中文</DropdownItem>
            <DropdownItem key="en">English</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Basic className={"p-2"} />
        <Profile className={"p-2"} />
        <Education className={"p-2"} />
        <Experience className={"p-2"} />
        <Skill className={"p-2"} />
      </main>
    </NextUIProvider>
  );
}
