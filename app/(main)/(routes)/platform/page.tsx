import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

const PlatformPage = async () => {
	const profile = await currentProfile()

	// if (!profile) {
	// 	return redirect('/api/auth/signin')
	// }

		return redirect('/platform/crm')

}
 
export default PlatformPage;