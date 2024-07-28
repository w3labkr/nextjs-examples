"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import "ckeditor5/ckeditor5.css"

const Editor = dynamic(() => import("@/components/ckeditor5/editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return <Editor />
}
