import Navbar from '@/components/navbar'
import Footer from '@/components/footer';
import { fetchPageDataNavbar } from '@/hooks/fecthPageDataNavbar'
import { fetchPageDetailsFooter } from '@/hooks/fetchPageDetailsFooter';
import { fetchTripsName } from '@/hooks/getTripsName';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const [navData, tripsData, footerData] = await Promise.all([fetchPageDataNavbar(), fetchTripsName(), fetchPageDetailsFooter()])

  return (
    <>
      <Navbar navbarData={navData} />
      <main>{children}</main>
      <Footer footerData={{
        trips: tripsData,
        pageDetails: footerData
      }} />
    </>
  )
}
