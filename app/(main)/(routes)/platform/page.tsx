import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

const PlatformPage = () => {
  const profile = currentProfile()
  

	if (!profile) {
		redirect('/api/auth/signin')
	}
  

   redirect('/platform/chat')

}
 
export default PlatformPage;