import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

const PlatformPage = () => {
  const profile = currentProfile()
  

	if (!profile) {
		return redirect('/api/auth/signin')
	}
  

  return (  );
}
 
export default PlatformPage;