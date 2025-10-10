"use client";
import React, { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { STARTUP_BY_VIEWS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";

interface ViewsWidgetProps {
  slug: string;
}

const ViewsWidget: React.FC<ViewsWidgetProps> = ({ slug }) => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViews() {
      const result = await client.fetch(STARTUP_BY_VIEWS_QUERY, { slug });
      setViews(result?.views ?? 0);
    }
    fetchViews();
  }, [slug]);

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-pitchforge-gold/20 rounded-lg px-4 py-2 shadow-lg z-40">
      <div className="flex items-center gap-2">
        <BiShow className="w-4 h-4 text-pitchforge-gold" />
        <span className="text-sm font-medium text-pitchforge-text">
          {views !== null ? `${views} views` : "Loading..."}
        </span>
      </div>
    </div>
  );
};

export default ViewsWidget;
