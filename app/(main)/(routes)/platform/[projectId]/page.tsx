import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

interface PlatformPageProps {
	params: {
		projectId: string

	}
}
const PlatformPage = async (params:PlatformPageProps) => {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/api/auth/signin')
	}
	else {
		
		return redirect(`/platform${params.params.projectId}/profile`)
	}

}
 
export default PlatformPage;