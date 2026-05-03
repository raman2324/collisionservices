import { useEffect, useState } from "react";

const messages = [
  "Free shipping on orders over $99 in the contiguous US.",
  "Shop accounts: NET-30 terms available — Apply →",
  "CHAMP® Made in America — 10% off through 07/05 · Code CHAMP10",
];

export const AnnouncementBar = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % messages.length), 13000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-paper-100 text-asphalt-900 border-b border-line-200" role="region" aria-label="Announcements">
      <div className="container-shop flex h-9 items-center justify-center text-[13px]">
        <p className="truncate font-medium" key={i}>{messages[i]}</p>
      </div>
    </div>
  );
};
