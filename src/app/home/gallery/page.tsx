import fetchGalleryImages from "@/hooks/getGalleryImages"
import GalleryPage from "@/components/gallery-page"

export default async function Page(){
  const galleryTrips = await fetchGalleryImages()

  if(!galleryTrips) return []
  return <GalleryPage galleryTrips={galleryTrips} />
}