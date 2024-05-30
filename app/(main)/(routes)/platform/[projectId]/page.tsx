'use client'
import { currentProfile } from "@/lib/current-profile";
import { redirect, useParams } from "next/navigation";

const PlatformPage = async () => {
	const profile = await currentProfile()
	const params = useParams()
	if (!profile) {
		return redirect('/api/auth/signin')
	}

		return redirect(`/platform${params.projectId}/profile`)

}
 
export default PlatformPage;