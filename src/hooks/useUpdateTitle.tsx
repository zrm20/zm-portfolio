import { useEffect } from "react";


export default function useUpdateTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title])
};