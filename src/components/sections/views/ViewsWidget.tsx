import React from "react";
import { BiShow } from "react-icons/bi";
import { STARTUP_BY_VIEWS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write";
import { after } from "next/server";

interface ViewsWidgetProps {
  slug: string;
}

const ViewsWidget: React.FC<ViewsWidgetProps> = async ({ slug }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_BY_VIEWS_QUERY, {
      slug,
    });

  after(async () => {
    await writeClient
      .patch(slug)
      .set({ views: totalViews + 1 })
      .commit();
  }); //using after to fetch after the response is sent to the client

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-pitchforge-gold/20 rounded-lg px-4 py-2 shadow-lg z-40">
      <div className="flex items-center gap-2">
        <BiShow className="w-4 h-4 text-pitchforge-gold" />
        <span className="text-sm font-medium text-pitchforge-text">
          {totalViews !== null ? `${totalViews} views` : "Loading..."}
        </span>
      </div>
    </div>
  );
};

export default ViewsWidget;
