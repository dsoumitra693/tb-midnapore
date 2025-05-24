import { client } from "@/sanity/lib/client";
import { GalleryMedia } from "@/types";

export default async function fetchGalleryImages() {
  const query = `*[_type == "galleryImages"][0]{
    items[]{
      "type": _type,
      _key,
      ...select(
        _type == "imageItem" => {
          "source": asset->url,
          alt,
          caption
        },
        _type == "videoItem" => {
          "source": asset->url,
          caption
        }
      )
    }
  }`;

  try {
    const galleryImages = await client.fetch(query);
    return galleryImages.items as GalleryMedia[];
  } catch (error) {
    console.error("Failed to fetch gallery images:", error);
    return [];
  }
}
